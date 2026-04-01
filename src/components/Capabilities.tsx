import { motion } from 'framer-motion';
import {
  Zap, Search, Database, Share2, UserPlus,
  TrendingUp, FileText, Send, Eye, Bot
} from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Capabilities() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const capabilities = [
    { icon: Zap, title: 'Algorithmic Lead Gen', description: 'Systematic identification and qualification of high-probability targets' },
    { icon: Search, title: 'Semantic Content Gen', description: 'Scalable content engines driven by performance methodologies' },
    { icon: Database, title: 'Data Synchronization', description: 'Seamless bidirectional integration across your enterprise stack' },
    { icon: Share2, title: 'Omnichannel Routing', description: 'Cohesive engagement pathways across multiple touchpoints' },
    { icon: UserPlus, title: 'Intelligent Onboarding', description: 'Frictionless orientation protocols enhancing customer adoption' },
    { icon: TrendingUp, title: 'Predictive Allocation', description: 'Dynamic budget optimization for maximum return on ad spend' },
    { icon: FileText, title: 'Document Parsing', description: 'Automated extraction and classification of structured data' },
    { icon: Send, title: 'Outreach Sequencing', description: 'Personalized, multi-variate cadence structures' },
    { icon: Eye, title: 'Market Intelligence', description: 'Continuous monitoring of competitive positioning and market variables' },
    { icon: Bot, title: 'Proprietary Integrations', description: 'Custom-built computational models for bespoke workflows' },
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
            Enterprise <span className="text-cyan-300">Competencies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive suite of machine learning modules engineered to streamline processes and amplify business intelligence.
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
