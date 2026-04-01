import { motion } from 'framer-motion';
import { Car, KeyRound, ShoppingCart } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Industries() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const industries = [
    {
      icon: Car,
      title: 'Automotive Retail',
      description: 'Streamlined test drive protocols, algorithmic follow-ups, and data-driven trade-in assessments.',
      benefits: ['Always-On Lead Response', 'Automated Logistics', 'Reputation Scaling'],
    },
    {
      icon: KeyRound,
      title: 'Vehicle Fleet Logistics',
      description: 'Frictionless reservation funnels, robust inventory tracking, and autonomous client support architectures.',
      benefits: ['Live Inventory Modeling', 'Instantaneous Approvals', 'Algorithmic Upselling'],
    },
    {
      icon: ShoppingCart,
      title: 'Large-Scale Retail',
      description: 'Omnichannel customer engagement, targeted promotional deployment, and systemic loyalty management.',
      benefits: ['Broadcast Precision', 'Campaign Orchestration', 'Retention Frameworks'],
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Engineered for <span className="text-cyan-300">Your Sector</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized AI configurations calibrated precisely to the operational demands of your vertical.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >


              <div className="relative p-8 rounded-2xl bg-black/40 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                <div className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      <span className="text-sm text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
