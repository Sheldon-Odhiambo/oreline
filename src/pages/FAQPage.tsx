import { motion } from 'motion/react';
import Accordion from '../components/Accordion';
import { faqData } from '../data/faq';

export default function FAQPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12 text-center">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
