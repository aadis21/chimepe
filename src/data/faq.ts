import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
   {
  question: `Is ${siteDetails.siteName} secure?`,
  answer: 'Yes. Your tax data is protected with industry-standard 256-bit SSL encryption. We never store sensitive login details, and all filings are done through secure IRS-authorized channels.',
},
{
  question: `Can I use ${siteDetails.siteName} on multiple devices?`,
  answer: 'Absolutely. You can access your account from desktop, tablet, or mobile with full synchronization — continue your filing anytime, anywhere.',
},
{
  question: 'Can I file both Federal and State taxes?',
  answer: 'Yes, all of our plans include Federal filing. State filing is included in Pro and Enterprise plans, with Basic supporting one state filing.',
},
{
  question: 'Do I need tax experience to use this service?',
  answer: 'Not at all. We guide you step-by-step, and our system ensures you get all the credits and deductions you qualify for — no tax background needed.',
},
{
  question: 'What if I need help during the filing process?',
  answer: 'We’ve got your back. Our tax experts are available via live chat, email, and phone (depending on your plan). You also get access to a help center with detailed guides.',
}

];