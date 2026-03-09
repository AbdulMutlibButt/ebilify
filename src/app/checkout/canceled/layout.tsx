import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Canceled | Ebilify",
  description: "Your payment was canceled. You can return to continue shopping or contact support for assistance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CanceledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
