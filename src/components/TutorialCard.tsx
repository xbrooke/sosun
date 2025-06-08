/**
 * 教程卡片组件
 * 
 * 功能：
 * - 展示使用教程列表
 * - 提供跳转链接
 * - 显示教程序号
 * 
 * 数据依赖：
 * - 使用mock/appData.ts中的tutorials数据
 * 
 * 交互：
 * - 点击"查看详情"会跳转到教程页面
 * - 悬停时有轻微上浮效果
 */
import { tutorials } from "@/mock/appData";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function TutorialCard() {
  const handleClick = (link: string) => {
    toast('即将跳转到教程页面');
    window.location.href = link;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            使用教程
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            通过我们的教程快速掌握应用的所有功能
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tutorials.map((tutorial, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {tutorial.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {tutorial.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => handleClick(tutorial.link)}
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                查看详情
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
