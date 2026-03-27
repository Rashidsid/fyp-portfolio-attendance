import { motion } from 'motion/react';
import { Cloud, Database, Zap, Code2 } from 'lucide-react';

const technologies = [
  {
    name: 'Cloudinary',
    icon: Cloud,
    description: 'Image Storage & Management',
    detail: 'Stores 5 face images per user from different positions',
    color: 'blue'
  },
  {
    name: 'Firebase',
    icon: Database,
    description: 'Real-time Database',
    detail: 'Secure user data and attendance records storage',
    color: 'orange'
  },
  {
    name: 'Face Recognition AI',
    icon: Zap,
    description: 'AI-Powered Recognition',
    detail: 'Advanced algorithms for accurate face detection',
    color: 'purple'
  },
  {
    name: 'Email Service',
    icon: Code2,
    description: 'Automated Notifications',
    detail: 'Instant account creation and ID delivery via email',
    color: 'green'
  }
];

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with industry-leading technologies for reliability and performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              orange: 'from-orange-500 to-orange-600',
              purple: 'from-purple-500 to-purple-600',
              green: 'from-green-500 to-green-600'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[tech.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{tech.description}</p>
                <p className="text-sm text-gray-600">{tech.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// Tech
