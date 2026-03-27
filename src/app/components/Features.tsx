import { motion } from 'motion/react';
import { Scan, Mail, Database, ImageIcon, UserCheck, Clock } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Scan,
    title: 'Face Recognition Attendance',
    description: 'Advanced AI-powered face recognition system that accurately identifies teachers and students for seamless attendance tracking.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: ImageIcon,
    title: '5-Position Image Storage',
    description: 'Each user profile stores 5 images from different angles and positions, ensuring high accuracy and reliability in recognition.',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Database,
    title: 'Firebase Integration',
    description: 'Robust and scalable Firebase database ensures secure data storage and real-time synchronization across all devices.',
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: ImageIcon,
    title: 'Cloudinary Image Management',
    description: 'Efficient image storage and management using Cloudinary, optimizing performance and reducing server load.',
    color: 'green',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Automated Email Notifications',
    description: 'Instant email notifications sent to users upon account creation with unique student or teacher ID credentials.',
    color: 'pink',
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    icon: UserCheck,
    title: 'Dual User System',
    description: 'Separate interfaces and functionalities designed specifically for teachers and students with role-based access.',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technology to deliver a seamless attendance experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// Updated
// Cards
