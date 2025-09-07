import React from 'react';
import { Navbar } from './components/Navbar';
import { BentoCard } from './components/BentoCard';
import { GlassButton } from './components/GlassButton';
import { ArrowRightIcon } from './components/Icons';
import { ServicesPage } from './ServicesPage';
import { FaqSection } from './components/FaqSection';
import Prism from './components/Prism';


const App: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Prism
                                animationType="rotate"
                                timeScale={0.5}
                                height={3.5}
                                baseWidth={5.5}
                                scale={3.6}
                                hueShift={0}
                                colorFrequency={1}
                                noise={0.5}
                                glow={1}
                            />
                        </div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 pb-2">
                            Local SEO Near Me
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4">
                            Propel your local business to the top of search results. We offer a comprehensive, transparent, and affordable SEO package designed for growth.
                        </p>
                    </div>
                </section>
                
                {/* Services Page Section */}
                <ServicesPage />

                {/* About Section */}
                <section id="about" className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Us</h2>
                         <BentoCard className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-start">
                                <div className="md:col-span-2">
                                    <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">Driven by Transparency & Results</h3>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-slate-400 mb-4">
                                        Local SEO Near Me was founded on a simple principle: provide small and medium-sized businesses with powerful, transparent, and affordable local SEO services that deliver tangible results. We saw too many businesses being overcharged for underperforming strategies.
                                    </p>
                                    <p className="text-slate-400">
                                        Our aggressive pricing model is made possible by streamlined workflows, smart automation, and a dedicated focus on what truly moves the needle for local search rankings. We are your partners in growth, committed to dominating your local market together.
                                    </p>
                                </div>
                            </div>
                         </BentoCard>
                    </div>
                </section>

                {/* FAQ Section */}
                <FaqSection />

                {/* Contact Section */}
                <section id="contact" className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
                        <BentoCard className="max-w-2xl mx-auto">
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2">Full Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
                                        <input type="email" id="email" name="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" placeholder="you@example.com" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                                    <textarea id="message" name="message" rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" placeholder="How can we help you dominate the local market?"></textarea>
                                </div>
                                <div className="text-center mt-6">
                                    <GlassButton type="submit" Icon={ArrowRightIcon}>
                                        Send Message
                                    </GlassButton>
                                </div>
                            </form>
                        </BentoCard>
                    </div>
                </section>
            </main>
            
            <footer className="text-center py-10">
                <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Local SEO Near Me. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;