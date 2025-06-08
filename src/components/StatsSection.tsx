/**
 * 数据统计区域组件
 * 
 * 功能：
 * - 展示关键统计数据
 * - 提供入场动画效果
 * 
 * 数据依赖：
 * - 使用mock/appData.ts中的statsData
 * 
 * 动画：
 * - 每个统计项依次淡入
 * - 延迟动画避免同时出现
 */
import { statsData } from "@/mock/appData";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center"
            >
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}