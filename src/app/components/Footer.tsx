import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">Insight Attendance System</h3>
            <p className="text-gray-400 mb-4">
              A cutting-edge face recognition attendance system developed as a Final Year Project, revolutionizing how educational institutions manage attendance.
            </p>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-lg mb-4">Project Details</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Final Year Project 2026</li>
              <li>• Face Recognition Technology</li>
              <li>• Firebase & Cloudinary Integration</li>
              <li>• Automated Email Notifications</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg mb-4">Technologies Used</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• AI Face Recognition</li>
              <li>• Firebase Database</li>
              <li>• Cloudinary Storage</li>
              <li>• Email Service Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Insight Attendance System. Final Year Project.
            </p>
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Built with <Heart className="w-4 h-4 text-red-500" /> for innovation in education
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
// Footer
