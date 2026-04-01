import { motion } from 'framer-motion';
import {
  Zap, Search, Database, Share2, UserPlus,
  TrendingUp, FileText, Send, Eye, Bot
} from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Capabilities() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const capabilities = [
    { icon: Zap, title: 'Autonomous Lead Gen', description: 'Self-sustaining systems that find and qualify prospects' },
    { icon: Search, title: 'Programmatic SEO', description: 'AI-generated content that ranks and converts' },
    { icon: Database, title: 'CRM Auto-Sync', description: 'Real-time data flow across all your tools' },
    { icon: Share2, title: 'Social Orchestration', description: 'Multi-channel engagement on autopilot' },
    { icon: UserPlus, title: 'Agentic Onboarding', description: 'AI that educates and activates new customers' },
    { icon: TrendingUp, title: 'Ad-Spend Optimization', description: 'Smart budget allocation for maximum ROI' },
    { icon: FileText, title: 'Smart Doc Processing', description: 'Extract and act on data from any document' },
    { icon: Send, title: 'Sales Outreach', description: 'Persistent, personalized follow-up sequences' },
    { icon: Eye, title: 'Competitor Intel', description: 'Monitor and adapt to market movements' },
    { icon: Bot, title: 'Custom Internal AI', description: 'Bespoke agents for your unique workflows' },
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
            Core <span className="text-cyan-300">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade AI automation tools that give you an unfair advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((capability, index) => {
            const isLarge = index < 2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group p-6 rounded-2xl bg-black/40 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 ${
                  isLarge ? 'lg:col-span-2 lg:row-span-1' : 'lg:col-span-1'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center mb-4 transition-colors border border-cyan-500/20">
                    <capability.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
