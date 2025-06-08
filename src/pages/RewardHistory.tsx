import { motion } from "framer-motion";
import { Toaster } from "sonner";
import RewardHistoryList from "@/components/RewardHistoryList";

export default function RewardHistory() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            历史赞赏名单
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            感谢所有支持者的慷慨赞赏
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <RewardHistoryList />
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}