import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    emailjs
      .send('service_h5k663a', 'template_1relfh5', templateParams, 'PgPgnjyw2-vqkM6QO')
      .then(
        () => {
          alert('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', company: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f9f9ff)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 text-transparent bg-clip-text mb-6"
          >
            Get In Touch
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-semibold text-slate-800 mb-6 text-center"
          >
            Send us a message
          </motion.h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 resize-none hover:shadow"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactus;
