import { motion } from 'motion/react';
import { UserPlus, Edit3, Trash2, Palette, Upload, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const adminCapabilities = [
  {
    icon: UserPlus,
    title: 'Add Users',
    description: 'Enroll new teachers and students with automated ID generation'
  },
  {
    icon: Edit3,
    title: 'Edit Records',
    description: 'Update user information and attendance records anytime'
  },
  {
    icon: Trash2,
    title: 'Remove Users',
    description: 'Delete user accounts with complete data management'
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    description: 'Customize panel colors to match institutional branding'
  },
  {
    icon: Upload,
    title: 'Logo Management',
    description: 'Upload and manage custom institutional logos'
  },
  {
    icon: FileText,
    title: 'Generate Reports',
    description: 'Create comprehensive attendance and analytics reports'
  }
];

export function AdminFeatures() {
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
            Comprehensive Admin Panel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete control and customization for system administrators
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Admin Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG1pbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzM2Njk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Admin Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                <p className="text-sm text-gray-600">Admin Dashboard</p>
                <p className="text-2xl text-gray-900">Full Control</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Admin Capabilities */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {adminCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg mb-2 text-gray-900">{capability.title}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
