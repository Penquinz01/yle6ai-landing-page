import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">


      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-cyan-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-300">Enterprise AI Infrastructure</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Optimize Operations — <span className="text-cyan-300">Scale Revenue</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We engineer bespoke AI systems for automotive and retail enterprises, streamlining lead capture, data management, and continuous market engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="group px-8 py-4 bg-cyan-600 text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919497062393"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black/40 text-cyan-300 rounded-lg font-semibold flex items-center justify-center gap-2 border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-black/60 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
  

              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  stroke="#1E40AF"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="#3B82F6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />

                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="8"
                      fill="#3B82F6"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
