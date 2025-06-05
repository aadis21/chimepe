import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smart Tax Filing",
        description: "Skip the stress and confusion of tax season. Our secure, AI-assisted tax platform is designed to simplify filing, maximize your refund, and keep you fully compliant with IRS regulations.",
        bullets: [
            {
                title: "Automated Tax Preparation",
                description: "Automatically organizes your financial documents and selects the right forms — saving you time and effort.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Maximized Deductions & Credits",
                description: "Set and track financial objectives that matter to you.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Secure IRS E-Filing",
                description: "Submit your taxes confidently with bank-level encryption and direct electronic filing to the IRS.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Effortless Tax Filing",
        description: "Get your taxes done right — without the hassle. Whether you're a first-time filer or a seasoned taxpayer, our platform simplifies the process and ensures maximum accuracy every step of the way.",
        bullets: [
            {
                title: "Simple, Step-by-Step Filing",
                description: "Answer a few basic questions — we’ll guide you through the rest, no tax knowledge needed.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Built by Experts",
                description: "Developed with guidance from certified tax professionals to meet all IRS standards and state compliance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Tax Estimates",
                description: "Instantly see your estimated refund or balance due as you fill out your return.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
   {
  title: "Top-Tier Data Security",
  description: "Your tax information is sensitive — and we treat it that way. Our platform is built on enterprise-grade security systems to give you full peace of mind while filing.",
  bullets: [
    {
      title: "IRS-Level Encryption",
      description: "We protect your data using 256-bit SSL encryption — the same level trusted by government agencies and top banks.",
      icon: <FiLock size={26} />
    },
    {
      title: "Secure Access Controls",
      description: "Login protection through multi-factor authentication (MFA), facial ID, or fingerprint, keeping your account safe from unauthorized access.",
      icon: <FiUser size={26} />
    },
    {
      title: "Continuous Threat Monitoring",
      description: "Our systems run 24/7 threat detection protocols to prevent fraud, identity theft, and data breaches — before they happen.",
      icon: <FiShield size={26} />
    }
  ],
  imageSrc: "/images/mockup-1.webp"
}
]