import { motion } from 'framer-motion';
import { ArrowRight, Calendar, RefreshCw, Star, Target } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function WorkflowVisualizer() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const workflows = [
    {
      icon: Calendar,
      title: 'Intelligent Lead Qualification',
      steps: ['Ingestion', 'Predictive Scoring', 'Dynamic Scheduling', 'Secured Allocation'],
      color: 'sky',
    },
    {
      icon: RefreshCw,
      title: 'Database Revitalization',
      steps: ['Cold Cohort ID', 'Contextual Outreach', 'Dynamic Offers', 'Re-engagement'],
      color: 'blue',
    },
    {
      icon: Star,
      title: 'Reputation Management',
      steps: ['Milestone Trigger', 'Sentiment Processing', 'Strategic Routing', 'Equity Growth'],
      color: 'cyan',
    },
    {
      icon: Target,
      title: 'Multi-Touch Nurture Protocols',
      steps: ['Pipeline Entry', 'Algorithmic Outreach', 'Engagement Tracking', 'Conversion'],
      color: 'sky',
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
            Core Infrastructural <span className="text-cyan-300">AI Integrations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end operational pathways designed to systemize acquisition, engagement, and retention strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >


              <div className="relative p-8 rounded-2xl bg-black/40 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center border border-cyan-500/20">
                    <workflow.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{workflow.title}</h3>
                </div>

                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex}>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-sm font-semibold text-cyan-400 border border-cyan-500/20">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-300 font-medium">{step}</p>
                      </div>
                      {stepIndex < workflow.steps.length - 1 && (
                        <div className="ml-4 pl-4 py-2">
                          <ArrowRight className="w-4 h-4 text-cyan-600" />
                        </div>
                      )}
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
