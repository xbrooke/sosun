import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/95 dark:bg-gray-900/95">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 px-4 max-w-4xl mx-auto">
          {/* 个人简介部分 */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl mb-8 relative"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=friendly%20developer%20portrait%20with%20smile&sign=c7ee227c978eeac06aaa80e1225edaa6" 
                alt="徐大兵"
                className="w-full h-full object-cover dark:brightness-90 dark:contrast-110"
              />
              <div className="absolute inset-0 rounded-full border border-white/20 dark:border-gray-600/30 pointer-events-none"></div>
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
               徐大兵 (Brooke)
             </h1>
             <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
               领克车机应用开发者
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
               专注领克车机应用开发3年，已为超过1万+领克车主提供实用工具，致力于提升车机使用体验。
             </p>
            
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:xbrooke@example.com"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 shadow-md dark:shadow-blue-500/20"
              >
                <i className="fa-regular fa-envelope"></i>
                联系我
              </motion.a>
            </div>
          </div>

          {/* 我的故事 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
              关于我
            </h2>
            <div className="bg-white dark:bg-gray-800/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200/70 dark:border-gray-700/50 backdrop-blur-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                 作为领克03+车主和开发者，我深刻理解车机系统的痛点。从2021年开始，我专注于开发解决实际问题的车机应用。
               </p>
               <p className="text-gray-600 dark:text-gray-300">
                 开发理念：安全第一、操作简单、功能实用。所有应用都经过严格测试，确保不影响原车系统稳定性。
               </p>
            </div>
          </div>

          {/* 我的作品 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
              开发的应用
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200/70 dark:border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-store text-blue-600 dark:text-blue-300 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    领克应用商店
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                   已收录50+款实用车机应用，支持LYNK OS N全系列版本，每日更新。
                 </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200/70 dark:border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-toolbox text-orange-600 dark:text-orange-300 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    车机工具箱
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                   包含车机清理、性能监测、主题管理等12项实用工具，专业版支持更多高级功能。
                 </p>
              </motion.div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              联系方式
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              有任何问题或建议，欢迎随时联系
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:xbrooke@example.com" 
                className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fa-regular fa-envelope mr-2 text-blue-600 dark:text-blue-400"></i>
                邮箱联系
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://example.com/wechat" 
                className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fa-brands fa-weixin mr-2 text-green-600 dark:text-green-400"></i>
                微信联系
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}