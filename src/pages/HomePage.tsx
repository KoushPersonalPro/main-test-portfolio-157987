import React from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to <span className="text-purple-600 dark:text-purple-400">MyAwesomeApp</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your new favorite application for productivity and collaboration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Easy to Use</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our intuitive interface makes it simple to get started without a steep learning curve.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Highly Customizable</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tailor the app to your specific needs with our powerful customization options.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-purple-100 dark:bg-purple-900 p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-200 mb-4">
          Ready to get started?
        </h2>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
          Sign Up Now
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;