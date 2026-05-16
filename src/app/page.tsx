"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Star, Target, FileText, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "#home" },
        { name: "Why Demedia", id: "#why-us" },
        { name: "Services", id: "#services" },
        { name: "Industries", id: "#industries" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Demedia"
      button={{
        text: "Book a Free AI Audit", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      title="AI Automation Systems That Save Time, Cut Costs & Scale Your Business"
      description="Demedia helps small and medium businesses replace repetitive manual work with AI-powered workflows, smart chatbots, automated outreach, CRM systems, and custom AI tools built around their operations."
      avatars={[]}
      buttons={[
        { text: "Book a Free AI Audit", href: "#contact" },
        { text: "Explore Services", href: "#services" },
      ]}
    />
  </div>

  <div id="problem" data-section="problem">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Your Business Doesn’t Need More Tools. It Needs Better Systems."
      description="Most businesses waste hours every week on manual admin, disconnected apps, slow follow-ups, and inefficient processes. We design AI-powered systems that work quietly in the background, giving your team time to focus on growth."
      metrics={[
        { value: "10h+", title: "Hours Saved Weekly" },
        { value: "24/7", title: "System Uptime" },
        { value: "100%", title: "Process Clarity" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aesthetic-background-with-abstract-neon-led-effect_53876-108164.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { icon: Zap, title: "AI Workflow Automation", description: "Automate repetitive workflows across n8n, Make, and internal systems." },
        { icon: Star, title: "Customer Support Chatbots", description: "Intelligent chatbots that handle FAQs, qualify leads, and reduce load." },
        { icon: Target, title: "Lead Gen & Outreach", description: "Automated lead sourcing, enrichment, and multi-channel follow-ups." },
        { icon: FileText, title: "Content Creation at Scale", description: "Generate social posts, blogs, and newsletters with AI workflows." },
      ]}
      title="AI Integration Services Built for Real Results"
      description="Powerful AI tools tailored to your specific operational needs."
    />
  </div>

  <div id="industries" data-section="industries">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Real Estate", "E-commerce", "Recruitment", "Legal", "Finance", "Agency", "Construction", "Insurance", 
        "SaaS", "Healthcare", "Hospitality", "Consulting", "Logistics", "Manufacturing", "Education", "Retail"
      ]}
      title="Industries We Serve"
      description="Tailored AI solutions for diverse operational models."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "1", title: "Why Choose Demedia?", content: "We focus on high-impact AI automation that reduces overhead while driving scalable growth for SMBs." },
        { id: "2", title: "How is your implementation different?", content: "We build bespoke, tool-agnostic systems that integrate seamlessly with your existing tech stack." },
        { id: "3", title: "What is the timeline for results?", content: "Most automation projects show measurable time savings within the first 30 days of implementation." },
      ]}
      mediaAnimation="slide-up"
      title="Why Demedia"
      description="Learn more about our approach and why we are the right partner for your digital transformation."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Automate?"
      description="Fill in your details below and choose your estimated monthly automation budget to get started."
      inputs={[
        { name: "name", type: "text", placeholder: "Name", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
      ]}
      multiSelect={{
        name: "budget", label: "Estimated Monthly Budget", options: ["<$500", "$500 - $2,000", "$2,000 - $5,000", "$5,000+"]
      }}
      textarea={{ name: "needs", placeholder: "Describe your needs...", rows: 4 }}
      onSubmit={(data) => console.log(data)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Demedia"
      columns={[
        { title: "Demedia", items: [{ label: "About", href: "#why-us" }, { label: "Contact", href: "#contact" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}