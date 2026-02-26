import React, { lazy, Suspense } from "react";

const HomeHero = lazy(() => import("../../sections/HomeHero"));
const Brandcarousal = lazy(() => import("./components/BrandCarousal"));
const IntroOne = lazy(() => import("./components/IntroOne"));
const IntroTwo = lazy(() => import("./components/IntroTwo"));
const OurProcess = lazy(() => import("@/src/sections/OurProcess"));
const RecentProjects = lazy(() => import("@/src/components/RecentProjects"));
const WritingServices = lazy(() => import("@/src/sections/WritingServices"));
const ContactForm = lazy(() => import("@/src/sections/ContactForm"));
import { Search, PenTool, CheckCircle, Layout, Send, RefreshCw } from "lucide-react";
const PricingSection = lazy(() => import("@/src/components/PriceSection"));
const RefundPolicy = lazy(() => import("@/src/components/RefundPolicy"));


const processes = [
  {
    title: "Consultation & Project Scope Confirmation",
    description:
      "We begin with a deep dive into your vision. Our team collaborates with you to define the project goals, target audience, and specific requirements to ensure a perfect alignment.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Written Agreement & Milestone Payment",
    description:
      "Transparency is our priority. We formalize our partnership with a clear contract and a structured milestone payment plan, ensuring security and commitment for both parties.",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: "Outline Approval",
    description:
      "Before the heavy lifting begins, we craft a detailed roadmap of your content. You review and approve the structure to ensure the narrative flow meets your expectations.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Draft Delivery",
    description:
      "Our expert writers bring your ideas to life. We deliver a high-quality initial draft that maintains your unique voice while adhering to the highest standards of professional writing.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Revision Phase",
    description:
      "Your feedback is vital. We offer a dedicated revision cycle to fine-tune the nuances, polish the prose, and ensure every detail resonates perfectly with your vision.",
    icon: <RefreshCw className="w-8 h-8" />, // Suggested changing 'Send' to 'RefreshCw' for revisions
  },
  {
    title: "Final Approval & File Handover",
    description:
      "Once you are 100% satisfied, we perform a final quality check and hand over the polished, ready-to-publish files in your preferred formats.",
    icon: <Send className="w-8 h-8" />,
  },
];
const LoadingFallback = () => (
  <div className="h-24 w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950">
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-500 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:300ms]" />
      </div>
      <span className="text-slate-400 dark:text-slate-500 text-sm font-medium tracking-wide">
        Loading...
      </span>
    </div>
  </div>
);

const HomeScreen = () => {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <HomeHero />
        <Brandcarousal />
        <section id="about-us">
          <IntroOne />
          <IntroTwo />
        </section>
        <OurProcess processes={processes} />
        <RecentProjects />
        <section id="services">
          <WritingServices />
        </section>
        <section>
          <PricingSection />
        </section>
        <section>
          <RefundPolicy/>
        </section>
        <section id="contact-us">
          <ContactForm />
        </section>
      </Suspense>
    </>
  );
};

export default HomeScreen;
