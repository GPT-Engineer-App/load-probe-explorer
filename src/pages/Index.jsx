import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Star, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FloatingObject = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      rotateY: [0, 360],
      transition: { 
        y: { 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        },
        rotateY: { 
          repeat: Infinity, 
          duration: 5,
          ease: "linear"
        }
      }
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="absolute top-20 right-20 text-white text-6xl"
    >
      <Coffee />
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-white bg-opacity-10 backdrop-blur-md">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-200">{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 overflow-hidden relative">
      <FloatingObject />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-12 bg-black bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full"
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 text-white"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Welcome to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Fancy App</span>
        </motion.h1>
        <motion.p 
          className="text-2xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover amazing features and build something extraordinary!
        </motion.p>
        <div className="flex justify-center items-center space-x-4 mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
          />
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-opacity-90">
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-12"
        >
          <Button variant="outline" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-none text-lg px-8 py-6">
            <Sparkles className="mr-2 h-5 w-5" /> Get Started Now
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-yellow-400" />}
            title="Lightning Fast"
            description="Experience blazing fast performance with our optimized architecture."
          />
          <FeatureCard 
            icon={<Star className="h-6 w-6 text-pink-400" />}
            title="Feature Rich"
            description="Packed with all the features you need to succeed in your projects."
          />
          <FeatureCard 
            icon={<Coffee className="h-6 w-6 text-orange-400" />}
            title="Easy to Use"
            description="Intuitive design that makes your workflow smooth and enjoyable."
          />
        </div>
        <div className="mt-12 flex justify-center space-x-4">
          <Badge variant="secondary" className="text-sm py-1 px-3">New</Badge>
          <Badge variant="outline" className="text-sm py-1 px-3">v2.0</Badge>
          <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm py-1 px-3">Premium</Badge>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
