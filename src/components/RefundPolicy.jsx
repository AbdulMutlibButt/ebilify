"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Edit3, 
  UserCheck, 
  Truck, 
  Scale, 
  CheckCircle2 
} from "lucide-react";

const termsData = [
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "1. Payment Terms",
    text: "Payment must be completed within 7 days of the invoice date. Work may be paused until payment is received.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
    title: "2. Payment Methods",
    text: "We accept bank transfers, online payment gateways, or other approved methods provided on the invoice.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    title: "3. Late Payments",
    text: "Late payments may result in service suspension, additional fees, or eventual cancellation of services.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
    title: "4. Refund Policy",
    text: "Payments are non-refundable once service/digital products are delivered or work has commenced.",
  },
  {
    icon: <Edit3 className="w-6 h-6 text-purple-500" />,
    title: "5. Revisions & Changes",
    text: "Any revisions or additional work requested after project completion may incur additional charges.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-indigo-500" />,
    title: "6. Client Responsibilities",
    text: "Clients must provide accurate info, materials, and timely feedback necessary for project completion.",
  },
  {
    icon: <Truck className="w-6 h-6 text-cyan-500" />,
    title: "7. Service Delivery",
    text: "Timelines vary based on project scope, client cooperation, and unforeseen circumstances.",
  },
  {
    icon: <Scale className="w-6 h-6 text-slate-500" />,
    title: "8. Liability",
    text: "Ebilify is not liable for indirect, incidental, or consequential damages from use of our services.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    title: "9. Agreement",
    text: "By paying the invoice, the client acknowledges and agrees to these terms and policies.",
  },
];

const TermsAndConditions = () => {
  return (
    <section id="terms-conditions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 mb-4"
          >
            <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4"
          >
            Terms & <span className="text-indigo-600">Conditions</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Please review our service agreement. These terms ensure a transparent and professional partnership between Ebilify and our clients.
          </p>
        </div>

        {/* Main Terms Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {termsData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Acceptance Note */}
              <div className="mt-12 p-6 bg-indigo-600/5 border border-indigo-500/20 rounded-2xl flex gap-4 items-center">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  <strong className="text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mr-1">Final Note:</strong> 
                  Payment of your invoice constitutes a digital signature and full acceptance of the terms listed above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;