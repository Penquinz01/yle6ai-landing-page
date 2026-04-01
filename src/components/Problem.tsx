import { motion } from 'framer-motion';
import { Clock, MessageSquareX, TrendingDown } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Problem() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const problems = [
    {
      icon: MessageSquareX,
      title: 'Uncaptured Pipeline',
      description: 'Inbound communications overwhelm siloed teams, allowing critical opportunities to be intercepted by competitors.',
    },
    {
      icon: Clock,
      title: 'Latent Lead Engagement',
      description: 'Protracted response times degrade prospect intent, directly decreasing conversion probabilities on high-value leads.',
    },
    {
      icon: TrendingDown,
      title: 'Conversion Degradation',
      description: 'Time-to-action correlates heavily with deal closure; suboptimal response speed measurably damages acquisition ROI.',
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
            Manual Processes Create <span className="text-cyan-300">Pipeline Bottlenecks</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Operational friction in communication pathways causes unnecessary churn and prevents consistent capitalization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-black/40 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="w-14 h-14 rounded-xl bg-black/50 flex items-center justify-center mb-6 transition-colors border border-cyan-500/20">
                <problem.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
