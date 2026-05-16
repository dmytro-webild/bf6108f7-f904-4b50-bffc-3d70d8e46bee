"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { BarChart, Clock, Database, FileText, Layers, Network, ShieldCheck, Star, Target, TrendingUp, UserCheck, Zap } from "lucide-react";

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
        {
          name: "Home",          id: "#home"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Process",          id: "#process"},
        {
          name: "Industries",          id: "#industries"},
        {
          name: "Results",          id: "#results"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Demedia"
      button={{
        text: "Book a Free AI Audit",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"}}
      title="AI Automation Systems That Save Time, Cut Costs & Scale Your Business"
      description="Demedia helps small and medium businesses replace repetitive manual work with AI-powered workflows, smart chatbots, automated outreach, CRM systems, and custom AI tools built around their operations."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/abstract-background-cyclist-design_183364-118217.jpg",          alt: "Automation Dashboard"},
        {
          src: "http://img.b2bpic.net/free-vector/technology-background-with-statistics_23-2148924486.jpg",          alt: "Workflow Automation"},
        {
          src: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884874.jpg",          alt: "Smart CRM"},
        {
          src: "http://img.b2bpic.net/free-photo/abstract-techno-low-poly-background-with-dark-connecting-dots-lines_1048-6127.jpg",          alt: "AI Network visualization"},
        {
          src: "http://img.b2bpic.net/free-photo/data-network-with-glowing-core_23-2152004043.jpg",          alt: "Neural network core"},
      ]}
      buttons={[
        {
          text: "Book a Free AI Audit",          href: "#contact"},
        {
          text: "Explore Services",          href: "#services"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "AI Workflow Automation"},
        {
          type: "text",          text: "Scalable Lead Generation"},
        {
          type: "text",          text: "Custom AI Assistants"},
        {
          type: "text",          text: "Smart CRM Integration"},
        {
          type: "text",          text: "Automated Content Creation"},
      ]}
    />
  </div>

  <div id="problem" data-section="problem">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Your Business Doesn’t Need More Tools. It Needs Better Systems."
      description="Most businesses waste hours every week on manual admin, disconnected apps, slow follow-ups, and inefficient processes. We design AI-powered systems that work quietly in the background, giving your team time to focus on growth."
      metrics={[
        {
          value: "10h+",          title: "Hours Saved Weekly"},
        {
          value: "24/7",          title: "System Uptime"},
        {
          value: "100%",          title: "Process Clarity"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aesthetic-background-with-abstract-neon-led-light-effect_53876-108164.jpg"
      imageAlt="AI Systems Concept"
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
        {
          icon: Zap,
          title: "AI Workflow Automation",          description: "Automate repetitive workflows across n8n, Make, and internal systems."},
        {
          icon: Star,
          title: "Customer Support Chatbots",          description: "Intelligent chatbots that handle FAQs, qualify leads, and reduce load."},
        {
          icon: Target,
          title: "Lead Gen & Outreach",          description: "Automated lead sourcing, enrichment, and multi-channel follow-ups."},
        {
          icon: FileText,
          title: "Content Creation at Scale",          description: "Generate social posts, blogs, and newsletters with AI workflows."},
        {
          icon: Database,
          title: "CRM & Sales Automation",          description: "Automated lead capture, pipeline updates, and sales reporting."},
        {
          icon: Layers,
          title: "Document Processing",          description: "Extract, classify, and summarize information from invoices and documents."},
        {
          icon: Network,
          title: "Custom Knowledge Base",          description: "Private AI assistants trained on your internal company policies."},
        {
          icon: BarChart,
          title: "AI Analytics",          description: "Turn scattered business data into intelligent, actionable dashboards."},
      ]}
      title="AI Integration Services Built for Real Results"
      description="Powerful AI tools tailored to your specific operational needs."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "01",          description: "Audit your current tools and bottlenecks."},
        {
          id: "2",          value: "02",          description: "Design clear automation plans for efficiency."},
        {
          id: "3",          value: "03",          description: "Build and integrate your custom AI systems."},
        {
          id: "4",          value: "04",          description: "Refine, test, and support your growth."},
      ]}
      title="How We Turn Your Business Into an Automated System"
      description="Our proven 4-step framework for business automation."
    />
  </div>

  <div id="results" data-section="results">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Clock,
          title: "Save 10+ hours",          description: "Eliminate repetitive daily tasks instantly."},
        {
          icon: UserCheck,
          title: "Instant Lead Response",          description: "Capture and qualify leads around the clock."},
        {
          icon: ShieldCheck,
          title: "Reduce Manual Admin",          description: "Remove human error from routine business tasks."},
        {
          icon: TrendingUp,
          title: "Scalable Systems",          description: "Build infrastructure that grows with your company."},
      ]}
      title="What Demedia Helps You Achieve"
      description="Real outcomes, not empty buzzwords."
    />
  </div>

  <div id="industries" data-section="industries">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Real Estate",        "E-commerce",        "Recruitment",        "Legal Services",        "Finance",        "Marketing Agencies",        "Construction",        "Insurance",        "SaaS Startups",        "Healthcare",        "Hospitality",        "Consulting"]}
      title="Built for Businesses Across Multiple Industries"
      description="We specialize in operational efficiency for diverse business models."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Built Around Your Workflow",          content: "We design systems based on your actual business process, not generic templates."},
        {
          id: "2",          title: "Tool-Agnostic Approach",          content: "We work with n8n, Make, Zapier, and existing CRMs to fit your stack."},
        {
          id: "3",          title: "Clear Business Impact",          content: "Every automation is focused on saving time or driving revenue growth."},
        {
          id: "4",          title: "Scalable Systems",          content: "We build automation infrastructure designed for your future growth."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-14317.jpg"
      mediaAnimation="slide-up"
      title="Practical AI Systems. Not Empty AI Hype."
      description="Demedia builds systems that actually work for your business."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Automate Your Business?"
      description="Book a free AI audit. No jargon, just results. We will contact you at hello@demedia.co.uk."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name"},
        {
          name: "business",          type: "text",          placeholder: "Business Name"},
        {
          name: "email",          type: "email",          placeholder: "Email Address"},
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number"},
      ]}
      textarea={{
        name: "automation_goals",        placeholder: "What do you want to automate?",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301533.jpg"
      mediaPosition="right"
      onSubmit={(data) => console.log("Lead Captured:", data)}
      buttonText="Submit Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Demedia"
      columns={[
        {
          title: "Navigate",          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Process",              href: "#process"},
            {
              label: "Industries",              href: "#industries"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Email Us",              href: "mailto:hello@demedia.co.uk"},
            {
              label: "Privacy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2026 Demedia. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
