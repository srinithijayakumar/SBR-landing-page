import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'Is it free to post an ad?',
    answer:
      'Yes. Posting is free for standard listings. You can optionally upgrade specific ads to Premium for boosted visibility and performance insights.',
  },
  {
    question: 'How do you verify users?',
    answer:
      'SBR uses verified profiles with KYC for sellers and layered checks to reduce spam. Suspicious listings are blocked through moderation and reporting signals.',
  },
  {
    question: 'How does the in-app chat work?',
    answer:
      'Chat happens inside SBR so you don’t need to share your personal number. Send messages, photos, and location details safely and keep conversations organized.',
  },
  {
    question: 'What are premium ads?',
    answer:
      'Premium ads get priority placement, richer analytics, and optional secure payments—helping you close deals faster with higher-quality buyer intent.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-slate-50 py-12 sm:py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto container-mobile sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center"
        >
          <h2 className="text-mobile-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="mt-3 sm:mt-4 text-mobile-sm sm:text-xl text-slate-500">
            Everything you need to know to start buying and selling confidently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.21, 0.8, 0.32, 1] }}
          className="mt-8 sm:mt-16 rounded-mobile sm:rounded-3xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-900/5 overflow-hidden"
        >
          <Accordion type="single" collapsible className="px-4 sm:px-8 lg:px-12">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="py-2 sm:py-4">
                <AccordionTrigger className="text-mobile-base sm:text-lg lg:text-xl font-semibold text-slate-900 hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-mobile-sm sm:text-base lg:text-lg leading-relaxed pr-2 pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
