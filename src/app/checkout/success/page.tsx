import Stripe from "stripe";
import CheckoutSuccessClient from "./SuccessClient";

export const metadata = {
  title: "Payment Successful | Ebilify",
  description: "Your payment was successful. Thank you for your order.",
};

interface SessionInfo {
  planName?: string;
  amount?: string;
  customerEmail?: string;
}

interface Product {
  name: string;
}

interface CheckoutPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not defined");
}

const stripe = new Stripe(stripeSecretKey);

export default async function CheckoutSuccessPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  const sessionInfo: SessionInfo = {};

  if (!sessionId) {
    console.warn("⚠️  No session_id provided in URL search params");
  }

  if (sessionId) {
    try {
    
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items.data.price.product"],
      });


      const lineItem = session.line_items?.data?.[0];
 
      if (lineItem && lineItem.price?.product) {
        const product = lineItem.price.product as unknown as Product;
        sessionInfo.planName = product.name;

        if (lineItem.amount_total) {
          sessionInfo.amount = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: (lineItem.currency || "usd").toUpperCase(),
          }).format(lineItem.amount_total / 100);
        }
      }

      sessionInfo.customerEmail = session.customer_details?.email ?? undefined;
 
    } catch (error) {
   
      // Log the specific error for debugging
      if (error instanceof Error) {
        console.error("💥 Error details:", error.message);
        console.error("💥 Error stack:", error.stack);
      }
    }
  }


  // We pass the data to the Client Component
  return <CheckoutSuccessClient sessionInfo={sessionInfo} />;
}