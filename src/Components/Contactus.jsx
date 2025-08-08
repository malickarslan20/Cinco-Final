import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contactus = () => {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    // Clear error message on change
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-transparent bg-clip-text mb-6">
            Get In Touch
          </h2>
          <p className="md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-bold text-purple-600 text-center"
          >
            Send us a message
          </motion.h3>
          <hr className='mt-5 mb-10 text-gray-300' />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 md:py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 pl-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 md:py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 pl-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Name (Optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 hover:shadow"
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
                className={`w-full px-4 py-2 md:py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 resize-none hover:shadow`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1 pl-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-semibold transition duration-200 flex items-center justify-center gap-2 shadow-md"
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
