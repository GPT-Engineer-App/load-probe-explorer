import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl"
      >
        <motion.h1 
          className="text-5xl font-bold mb-6 text-white"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Welcome to Your Fancy App
        </motion.h1>
        <motion.p 
          className="text-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover amazing features and build something extraordinary!
        </motion.p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64"
          />
          <Button variant="secondary">
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" className="bg-white text-purple-600">
            <Sparkles className="mr-2 h-4 w-4" /> Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
