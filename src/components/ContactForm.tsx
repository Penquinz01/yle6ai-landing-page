import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

export default function ContactForm() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    industry: '',
    whatsapp: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', businessName: '', industry: '', whatsapp: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-black relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Scale Operations with <span className="text-cyan-300">Precision AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a strategic consultation to explore custom AI integrations built for measurable ROI and enterprise reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Partner With Us</h3>
                <p className="text-gray-400 leading-relaxed">
                  Discover how our bespoke AI infrastructure can optimize your sales pipeline, reduce overhead, and drive sustainable, measurable revenue growth.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919497062393"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-black/60 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center border border-cyan-500/20">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                    <p className="font-semibold text-white">+91 9497062393</p>
                  </div>
                </a>

                <a
                  href="mailto:zayansiddique@yel6ai.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-black/60 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center border border-cyan-500/20">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-white">zayansiddique@yel6ai.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-black/40 border border-cyan-500/30">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-white mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Industry"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-white mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Contact Number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all bg-opacity-90 hover:bg-opacity-100"
                >
                  {isSubmitted ? 'Request Submitted' : 'Request Consultation'}
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
