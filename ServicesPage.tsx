import React from 'react';
import { BentoCard } from './components/BentoCard';
import { GlassButton } from './components/GlassButton';
import { 
    GoogleBusinessIcon, 
    WebsiteIcon, 
    CitationsIcon, 
    SocialMediaIcon, 
    TimelineIcon,
    ArrowRightIcon
} from './components/Icons';

const detailedServices = [
    {
        icon: <GoogleBusinessIcon />,
        title: "Google Business Profile",
        description: "Your GBP is the cornerstone of local SEO. We transform it into a powerful customer acquisition tool through meticulous optimization and active management.",
        keyFeatures: [
            "Complete Profile Setup & Verification",
            "Keyword-Rich Business Descriptions",
            "20+ Geotagged Photo Uploads",
            "Weekly Q&A Seeding & Updates",
            "Ongoing Post & Service Updates",
            "Review Monitoring & Responses",
        ],
        priceInfo: { setup: 202, monthly: 11 },
    },
    {
        icon: <WebsiteIcon />,
        title: "Website Development & Technical SEO",
        description: "A high-performance, professionally designed website built to convert visitors and rank high on search engines from day one.",
        keyFeatures: [
            "8-12 Custom Service Pages",
            "Mobile-First Responsive Design",
            "Programmatic SEO Structure",
            "Core Web Vitals Optimization",
            "Schema Markup Implementation",
            "On-Page SEO (Titles, Metas, Headers)",
        ],
        priceInfo: { setup: 1260, monthly: 202 },
    },
    {
        icon: <CitationsIcon />,
        title: "35+ Citations Building",
        description: "We build and manage your business listings across the web's most important directories to ensure consistency and boost local authority.",
        keyFeatures: [
            "Manual Submissions to 35+ Directories",
            "Guaranteed NAP Consistency",
            "Duplicate Listing Suppression",
            "Citation Health Monitoring",
            "Building Local Authority & Trust",
            "Detailed Submission Reporting",
        ],
        priceInfo: { setup: 38, monthly: 14 },
    },
    {
        icon: <SocialMediaIcon />,
        title: "Social Media Management",
        description: "Engage your local community and build brand loyalty with consistent, high-quality content on Facebook and Instagram.",
        keyFeatures: [
            "Facebook & Instagram Profile Optimization",
            "12-20 High-Quality Posts per Month",
            "Custom Branded Graphics & Content",
            "Audience Engagement & Interaction",
            "Monthly Content Calendar Planning",
            "Performance Analytics Tracking",
        ],
        priceInfo: { setup: 0, monthly: 123 },
    },
];

export const ServicesPage: React.FC = () => {
    return (
        <section id="services" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Our Core Services</h2>
                <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-12">
                    A fully-managed, aggressive SEO strategy with transparent pricing. We handle everything you need to dominate your local market.
                </p>

                <BentoCard className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10">
                    <div className="md:w-2/3">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Dominate Your Local Market?</h2>
                        <p className="text-slate-300 mb-4">Our 4-month aggressive launch plan is the ultimate foundation for explosive growth and market leadership.</p>
                        <GlassButton Icon={ArrowRightIcon} onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            Get Started Today
                        </GlassButton>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-400 text-sm">Total 4-Month Investment</p>
                        <p className="text-5xl font-bold text-cyan-400">$3,204</p>
                        <p className="text-slate-400 mt-1">Then move to a 15% commission-based plan.</p>
                    </div>
                </BentoCard>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-start">
                    {detailedServices.map((service, index) => (
                        <BentoCard key={index} className="flex flex-col h-full">
                            <div className="text-cyan-400 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 flex-grow">{service.description}</p>
                            
                            <h4 className="font-semibold text-white mb-3 text-sm">Key Features:</h4>
                            <ul className="list-disc list-inside text-slate-400 text-sm space-y-2">
                                {service.keyFeatures.map((feature, i) => <li key={i}>{feature}</li>)}
                            </ul>
                            
                            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                                <div className="text-left">
                                    <p className="text-xs text-slate-500">One-Time Setup</p>
                                    <p className="text-lg font-semibold text-white">${service.priceInfo.setup}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500">Monthly Price</p>
                                    <p className="text-lg font-semibold text-white">${service.priceInfo.monthly}</p>
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-start">
                    <BentoCard>
                        <div className="text-fuchsia-400 mb-4"><TimelineIcon /></div>
                        <h3 className="text-xl font-bold text-white mb-2">Month 1: Foundation</h3>
                        <p className="text-slate-400 text-sm">
                        We build your entire local presence: complete GBP optimization with 20+ photos, a professional website with 8-12 pages, 35+ citation submissions, and social media setup.
                        </p>
                    </BentoCard>
                    <BentoCard>
                        <div className="text-fuchsia-400 mb-4"><TimelineIcon /></div>
                        <h3 className="text-xl font-bold text-white mb-2">Months 2-4: Growth & Management</h3>
                        <p className="text-slate-400 text-sm">
                            Focus shifts to consistent growth: 12-20 monthly social media posts, ongoing GBP optimization, citation management, weekly reporting, and a 90-day ROI guarantee.
                        </p>
                    </BentoCard>
                </div>
                
            </div>
        </section>
    );
};