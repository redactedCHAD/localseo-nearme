import React from 'react';
import { BentoCard } from './BentoCard';

const faqData = [
  {
    question: "What exactly is local SEO?",
    answer: "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. This includes managing your Google Business Profile, building local citations, and optimizing your website for local keywords to ensure customers in your area find you first."
  },
  {
    question: "How long does it take to see results?",
    answer: "You can expect to see initial improvements in rankings and traffic within the first 1-2 months as we build your foundational presence. Significant, market-leading results typically become evident within 3-4 months, which is why our aggressive launch plan is structured this way."
  },
  {
    question: "Is the 4-month investment all I have to pay upfront?",
    answer: "Yes. The total investment for the 4-month aggressive launch is billed as a one-time package. This covers all foundational work, including website development, GBP optimization, citation building, and social media setup, with no hidden fees."
  },
  {
    question: "What happens after the initial 4 months?",
    answer: "After the 4-month launch, we transition to a 15% commission-based plan on new business generated through our efforts. This performance-based model ensures our goals are perfectly aligned with yours: driving tangible, profitable growth for your business."
  },
  {
    question: "Do I need to provide content for my website or social media?",
    answer: "We handle all the content creation for you. Our team will research your industry and local market to write optimized website copy and create engaging social media posts. We may ask for your input or approval on certain items to ensure brand consistency."
  },
  {
    question: "Why is your pricing so competitive?",
    answer: "We achieve our aggressive pricing through highly streamlined workflows, leveraging smart automation for repetitive tasks, and focusing only on the strategies that deliver the highest impact for local businesses. This efficiency allows us to provide premium services without the premium price tag."
  },
];


export const FaqSection: React.FC = () => {
    return (
        <section id="faq" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
                    {faqData.map((item, index) => (
                        <BentoCard key={index} className="flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                            <p className="text-slate-400 text-sm">{item.answer}</p>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section>
    );
};