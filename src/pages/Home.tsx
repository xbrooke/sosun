/**
 * 首页组件
 * 
 * 功能：
 * - 组合所有页面组件
 * - 提供页面级动画
 * 
 * 包含组件：
 * - Navbar: 顶部导航栏
 * - DownloadSection: 下载区域
 * - StatsSection: 数据统计区域
 * - TutorialCard: 教程卡片
 * - Testimonial: 支持系统展示
 * - SupportSection: 支持区域
 * - WechatSection: 微信公众号区域
 * - Footer: 页脚
 */
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadSection from "@/components/DownloadSection";
import SupportSection from "@/components/SupportSection";
import TutorialCard from "@/components/TutorialCard";
import StatsSection from "@/components/StatsSection";
import Testimonial from "@/components/Testimonial";
import WechatSection from "@/components/WechatSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gray-50/95 dark:bg-gray-900/95"
    >
      <Navbar />
      <main className="flex-grow">
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 text-center"
        >
          <motion.h1 
            className="text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            领克第三方应用商店
          </motion.h1>
          <motion.h2 
            className="text-3xl font-semibold text-gray-600 dark:text-gray-300"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            助您更多车机娱乐体验
          </motion.h2>
        </motion.section>
        <DownloadSection />
        <StatsSection />
        <TutorialCard />
        <Testimonial />
        <SupportSection />
        <WechatSection />
      </main>
      <Footer />
    </motion.div>
  );
}
