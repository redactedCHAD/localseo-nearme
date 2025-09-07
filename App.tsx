
import React from 'react';
import { BentoCard } from './components/BentoCard';
import { GlassButton } from './components/GlassButton';
import { 
    GoogleBusinessIcon, 
    WebsiteIcon, 
    CitationsIcon, 
    SocialMediaIcon, 
    TimelineIcon,
    ArrowRightIcon,
    ReportIcon,
    GuaranteeIcon
} from './components/Icons';

const services = [
    {
        icon: <GoogleBusinessIcon />,
        title: "Google Business Profile",
        description: "Complete optimization and ongoing management with 20+ professional photos, posts, and review management.",
        priceInfo: { setup: 202, monthly: 11 },
        className: "lg:col-span-2"
    },
    {
        icon: <WebsiteIcon />,
        title: "Website Development & Technical SEO",
        description: "Professional website development with 8–12 service pages, full technical SEO, and programmatic structure for high rankings.",
        priceInfo: { setup: 1260, monthly: 202 },
        className: "lg:col-span-2"
    },
    {
        icon: <CitationsIcon />,
        title: "35+ Citations Building",
        description: "We build and manage over 35 directory and citation submissions to boost your local authority and ensure NAP consistency.",
        priceInfo: { setup: 38, monthly: 14 },
        className: "lg:col-span-1"
    },
    {
        icon: <SocialMediaIcon />,
        title: "Social Media Management",
        description: "Facebook & Instagram management with 12-20 monthly posts to engage your audience and drive traffic.",
        priceInfo: { setup: 0, monthly: 123 },
        className: "lg:col-span-1"
    },
];

const App: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="container mx-auto px-4 py-12 md:py-20">
                
                <header className="text-center mb-12 md:mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 pb-2">
                        Local SEO Near Me
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4">
                        Propel your local business to the top of search results. We offer a comprehensive, transparent, and affordable SEO package designed for growth.
                    </p>
                </header>
                
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <BentoCard className="lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Dominate Your Local Market?</h2>
                            <p className="text-slate-300 mb-4">Our 4-month aggressive launch plan is the ultimate foundation for explosive growth and market leadership.</p>
                            <GlassButton Icon={ArrowRightIcon}>
                                Get Started Today
                            </GlassButton>
                        </div>
                        <div className="text-center">
                             <p className="text-slate-400 text-sm">Total 4-Month Investment</p>
                             <p className="text-5xl font-bold text-cyan-400">$3,204</p>
                             <p className="text-slate-400 mt-1">Then move to a 15% commission-based plan.</p>
                        </div>
                    </BentoCard>

                    {services.map((service, index) => (
                        <BentoCard key={index} className={service.className}>
                            <div className="flex flex-col h-full">
                                <div className="text-cyan-400 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm flex-grow">{service.description}</p>
                                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                    <div className="text-left">
                                        <p className="text-xs text-slate-500">One-Time Setup</p>
                                        <p className="text-lg font-semibold text-white">${service.priceInfo.setup}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500">Monthly Price</p>
                                        <p className="text-lg font-semibold text-white">${service.priceInfo.monthly}</p>
                                    </div>
                                </div>
                            </div>
                        </BentoCard>
                    ))}

                    <BentoCard className="lg:col-span-2">
                        <div className="text-fuchsia-400 mb-4"><TimelineIcon /></div>
                        <h3 className="text-xl font-bold text-white mb-2">Month 1: Foundation</h3>
                        <p className="text-slate-400 text-sm">
                           We build your entire local presence: complete GBP optimization with 20+ photos, a professional website with 8-12 pages, 35+ citation submissions, and social media setup.
                        </p>
                    </BentoCard>

                    <BentoCard className="lg:col-span-2">
                         <div className="text-fuchsia-400 mb-4"><TimelineIcon /></div>
                        <h3 className="text-xl font-bold text-white mb-2">Months 2-4: Growth & Management</h3>
                        <p className="text-slate-400 text-sm">
                            Focus shifts to consistent growth: 12-20 monthly social media posts, ongoing GBP optimization, citation management, weekly reporting, and a 90-day ROI guarantee.
                        </p>
                    </BentoCard>

                     <BentoCard className="lg:col-span-4 text-center">
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="text-cyan-400 w-12 h-12"><ReportIcon /></div>
                            <div className="text-fuchsia-400 w-12 h-12"><GuaranteeIcon /></div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Weekly Reports & ROI Guarantee</h3>
                        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                            You'll receive comprehensive weekly performance reports covering GBP insights, website metrics, local rankings, citation status, social media engagement, and lead generation. We back our work with a 90-day ROI guarantee.
                        </p>
                    </BentoCard>
                </main>
                
                <footer className="text-center mt-20">
                    <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Local SEO Near Me. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
