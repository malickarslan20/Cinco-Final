import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What does CincoByte specialize in?",
    answer: "CincoByte specializes in creating modern, scalable, and value-driven web applications using technologies like React, Node.js, Firebase, and more."
  },
  {
    question: "Do you work with startups or enterprise clients?",
    answer: "We partner with both startups and enterprises, offering custom digital solutions tailored to each client's unique needs and growth stage."
  },
  {
    question: "How can I collaborate with CincoByte?",
    answer: "Simply reach out via our contact form or email. We’ll schedule a discovery session to understand your goals and how we can add value."
  },
  {
    question: "What technologies do you use?",
    answer: "Our stack includes React.js, Next.js, Node.js, Firebase, Appwrite, Tailwind CSS, MongoDB, Stripe, and other modern tools to ensure performance and scalability."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-transparent bg-clip-text mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-700">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-4 pt-2 text-gray-700 text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
