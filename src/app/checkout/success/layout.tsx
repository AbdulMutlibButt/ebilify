import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful | Ebilify",
  description: "Your payment has been processed successfully. Thank you for your purchase with Ebilify.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
