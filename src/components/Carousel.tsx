/**
 * 轮播图组件
 * 
 * 功能：
 * - 自动轮播展示图片内容
 * - 支持手动切换轮播项
 * - 包含平滑的动画过渡效果
 * - 添加图片加载错误处理
 * 
 * 使用场景：
 * - 首页顶部轮播展示重要内容
 * 
 * 数据依赖：
 * - 使用mock/appData.ts中的carouselItems数据
 */
import { carouselItems } from "@/mock/appData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    if (carouselItems && carouselItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [carouselItems]);

  // 检查是否有carouselItems数据
  if (!carouselItems || carouselItems.length === 0) {
    return (
      <div className="relative h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <i className="fa-solid fa-image-slash text-5xl text-gray-400 mb-4"></i>
          <p className="text-xl text-gray-600 dark:text-gray-400">暂无轮播内容</p>
        </div>
      </div>
    );
  }

  const handleImageError = (index: number) => {
    toast.error(`图片加载失败: ${carouselItems[index].title}`);
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
    <div className="relative h-96 overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="absolute inset-0 flex">
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              x: `${(index - currentIndex) * 100}%`
            }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex-shrink-0 relative"
          >
            {loadedImages[index] !== false && (
              <img 
                src={item.image} 
                alt={item.title}
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
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-extrabold text-white mb-2"
                >
                  {item.title}
                </motion.h2>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-semibold text-white mb-6"
                >
                  {item.description}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}