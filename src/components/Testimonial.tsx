/**
 * 支持系统展示组件
 * 
 * 功能：
 * - 展示不同LYNK OS版本支持信息
 * - 使用卡片形式展示各版本特性
 * - 添加图片加载错误处理
 * 
 * 数据依赖：
 * - 使用mock/appData.ts中的testimonials数据
 * 
 * 动画：
 * - 使用Framer Motion实现入场动画和悬停效果
 */
import { testimonials } from "@/mock/appData";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Testimonial() {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  const handleImageError = (index: number) => {
    toast.error(`图片加载失败: ${testimonials[index].title}`);
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = false;
    setLoadedImages(newLoadedImages);
  };

  const handleImageLoad = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            whileHover={{ scale: 1.01 }}
          >
            支持系统
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            为您提供全面的系统版本支持
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-700/50"
            >
              <motion.div className="flex flex-col items-center mb-8">
                <motion.div 
                  className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  {loadedImages[index] !== false && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                      onLoad={() => handleImageLoad(index)}
                    />
                  )}
                  {loadedImages[index] === false && (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <div className="text-gray-500 dark:text-gray-400">
                        <i className="fa-solid fa-image fa-3x mb-4"></i>
                        <p>图片加载失败</p>
                      </div>
                    </div>
                  )}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  {testimonial.title}
                </motion.h3>
              </motion.div>
              
              <div className="space-y-4">
                {testimonial.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center py-3 px-4 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all shadow-sm hover:shadow-md"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full p-2 mr-4 shadow-sm">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}