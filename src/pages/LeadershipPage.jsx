import { motion } from 'framer-motion';
import Leadership from './Leadership';

const LeadershipPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 pb-16 pt-10 space-y-10"
    >
      <Leadership showHeading={false} />
    </motion.div>
  );
};

export default LeadershipPage;
