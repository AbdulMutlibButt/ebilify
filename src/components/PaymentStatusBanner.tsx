"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";

export default function PaymentStatusBanner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"success" | "canceled" | null>(null);

  useEffect(() => {
    const payment = searchParams.get("payment");
    if (payment === "success") setStatus("success");
    else if (payment === "canceled") setStatus("canceled");
    else setStatus(null);
  }, [searchParams]);

  const handleDismiss = () => {
    const url = pathname;
    router.replace(url);
  };

  if (!status) return null;

  return (
    <div className="mx-auto mb-6 max-w-4xl rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start gap-4">
        <div className="mt-0.5">
          {status === "success" ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
          ) : (
            <XCircle className="h-6 w-6 text-rose-500" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900 dark:text-white">
            {status === "success" ? "Payment completed" : "Payment canceled"}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            {status === "success"
              ? "Thanks for your order! We’ll follow up soon to get the next steps in place."
              : "No worries — you can retry anytime. Select a plan to continue."}
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
