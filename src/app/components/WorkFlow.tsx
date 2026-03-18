import { motion } from 'motion/react';
import { ArrowRight, UserPlus, Camera, CheckCircle, BarChart, Cloud, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const steps = [
  {
    icon: UserPlus,
    title: 'Enrollment',
    description: 'Admin adds teacher/student to system',
    fullDescription: 'Admin registers new users with basic information (Name, Roll No, Class, Section) | Face enrollment triggered via /enroll API endpoint | System captures and stores face data in Firestore',
    color: 'blue',
    image: '/images/add student.png'
  },
  {
    icon: Camera,
    title: 'Face Capture',
    description: '5 images captured from different angles',
    fullDescription: 'Frontend captures face via webcam | Base64 encoded image sent to Flask REST API (localhost:5000) | Haar Cascade classifier detects face region | Images sent to Cloudinary for secure storage',
    color: 'purple',
    image: '/images/teacher list.png'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Secure storage and data management',
    fullDescription: 'Face images stored in Cloudinary | Enrollment data & face data saved to Firebase Database | LBPH (Local Binary Patterns Histograms) model trained with enrolled students faces | Ready for real-time recognition',
    color: 'indigo',
    image: '/images/admin settings.png'
  },
  {
    icon: CheckCircle,
    title: 'Recognition',
    description: 'AI verifies and marks attendance',
    fullDescription: 'User clicks "Recognize Face" | Camera captures live face | Frontend sends image to /recognize API endpoint | OpenCV LBPH algorithm matches against trained model | Returns matched student (USN) with confidence score | Attendance auto-marked in database',
    color: 'green',
    image: '/images/user page.png'
  },
  {
    icon: Database,
    title: 'Profile & Records',
    description: 'Attendance stored in user profile',
    fullDescription: 'Matched face data stored in Firestore with timestamp | User profile updated with check-in status | Confidence scores logged for audit trail | Available in user dashboard for history tracking & analytics',
    color: 'cyan',
    image: '/images/manage class.png'
  },
  {
    icon: BarChart,
    title: 'Reports',
    description: 'Generate comprehensive analytics',
    fullDescription: 'Admin generates attendance reports from Firebase data | Real-time visual analytics and statistics | Export historical records for institutional documentation | Track recognition accuracy & confidence metrics',
    color: 'orange',
    image: '/images/report.png'
  }
];

export function WorkFlow() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete face recognition attendance system from enrollment to reporting
          </p>
        </motion.div>

        {/* Desktop - Grid Layout with Images */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                green: 'from-green-500 to-green-600',
                orange: 'from-orange-500 to-orange-600',
                indigo: 'from-indigo-500 to-indigo-600',
                cyan: 'from-cyan-500 to-cyan-600'
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden shadow-lg mb-4 h-48 bg-gray-200">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-center text-gray-600 mb-3">{step.description}</p>

                  {/* Full Description */}
                  <p className="text-xs text-center text-gray-500 leading-relaxed bg-white rounded-lg p-3">
                    {step.fullDescription}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet - 2 Column Grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                green: 'from-green-500 to-green-600',
                orange: 'from-orange-500 to-orange-600',
                indigo: 'from-indigo-500 to-indigo-600',
                cyan: 'from-cyan-500 to-cyan-600'
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="rounded-lg overflow-hidden shadow-md mb-3 h-32 bg-gray-200">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center mb-3 shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              purple: 'from-purple-500 to-purple-600',
              green: 'from-green-500 to-green-600',
              orange: 'from-orange-500 to-orange-600',
              indigo: 'from-indigo-500 to-indigo-600',
              cyan: 'from-cyan-500 to-cyan-600'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md"
              >
                <div className="rounded-lg overflow-hidden mb-3 h-40 bg-gray-200">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="text-xs text-gray-600">{step.description}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  {step.fullDescription}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
