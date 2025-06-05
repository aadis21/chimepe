import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
    name: 'Basic File',
    price: 29,
    features: [
        'Federal Tax Filing Included',
        'State Tax Filing (1 state)',
        'W-2 and 1099 Support',
        'Email Support',
        'Secure Data Encryption',
    ],
},
{
    name: 'Pro File',
    price: 99,
    features: [
        'Federal & State Filing (Up to 3 States)',
        'W-2, 1099, and Itemized Deductions',
        'Schedule C (Freelancers/Self-Employed)',
        'Phone & Priority Email Support',
        'Live CPA Chat Support',
        'Maximum Refund Guarantee',
    ],
},
{
    name: 'Enterprise File',
    price: 'Custom',
    features: [
        'Unlimited State Filings',
        'Complex Returns (S-Corp, LLC, Investments)',
        'Dedicated CPA/EA Assigned',
        'Audit Protection & Representation',
        'Year-Round Tax Support',
        'Custom Tax Strategy Session',
    ],
}

]