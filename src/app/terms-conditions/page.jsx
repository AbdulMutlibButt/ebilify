"use client";

import React from "react";
import { motion } from "framer-motion";
import LampDemo from "@/src/components/ui/lamp";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <div className="h-[60vh] overflow-hidden">
        <LampDemo text="Terms & Conditions" />
      </div>
      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-indigo-500/5 border border-slate-100 dark:border-slate-800">
          <div className="prose prose-indigo dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="italic text-slate-500 dark:text-slate-400">
              The use of this Website and/or our services constitutes your
              agreement to the following terms and conditions:
            </p>

            {/* Section 1 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                DEFINITION OF TERMS
              </h2>
              <div className="space-y-4">
                <p>
                  <strong>&quot;Website&quot;</strong> means all online content
                  on ebilify.com website pages.
                </p>
                <p>
                  <strong>
                    &quot;Customer,&quot; &quot;You,&quot; &quot;Yours&quot;
                  </strong>{" "}
                  refers to you and/or any other person submitting an order to
                  ebilify.com on your behalf.
                </p>
                <p>
                  <strong>
                    &quot;Company,&quot; &quot;We,&quot; &quot;Our&quot;
                  </strong>{" "}
                  refers to ebilify.com, a company registered under the laws of
                  the State.
                </p>
                <p>
                  <strong>&quot;Product or Services&quot;</strong> means all
                  services and products provided by ebilify.com to customer in
                  accordance with his/her order.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                PAYMENT
              </h2>
              <p>
                We request a 100% upfront payment for all the services we
                provide, which are (inclusive) of the tax to be financed by no
                other than the client.
              </p>
            </article>

            {/* Section 3 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                OUR SERVICES
              </h2>
              <p>
                It is important that you carefully read and understand the
                refund policy in order to have full knowledge of the privileges
                and limitations governed by theEbilify Policy. It is your
                obligation to read these Terms and Conditions before submitting
                any Order and/or payment to this Website.
              </p>
            </article>

            {/* Section 4 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                REFUND POLICY
              </h2>
              <p>
                We handle refunds on a case-by-case basis and do our best to
                stand behind the customer and take care of their needs. Our team
                will always work with the customer to resolve any issues to the
                best of our ability.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Refunds, if processed, take between 5 to 15 days to reflect on
                  the customer&apos;s end.
                </li>
                <li>
                  A processing fee of USD 250 or 5% of the order amount
                  (whichever is higher) will be charged in all cases.
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                LATE DELIVERY
              </h2>
              <p>
                We believe in &quot;On Time Delivery&quot; but if, for any
                reason we fail to deliver the asked service on time, after at
                least three attempts to contact us, your refund will be
                processed once it is established through documentary evidence
                that the late delivery was the company&apos;s fault.
              </p>
            </article>

            {/* Section 6 */}
            <article>
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                CASES WHERE REFUND WILL NOT BE ISSUED
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  In case of late delivery due to some minor technical errors,
                  such as grammatical, typing, word count, missing references
                  etc.
                </li>
                <li>
                  Company will not be responsible for any delay from the
                  client&apos;s end.
                </li>
                <li>
                  No refund will be issued on the basis of low word count.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
