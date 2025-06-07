/**
 * 下载区域组件
 * 
 * 功能：
 * - 展示Free和Pro两个版本的应用信息
 * - 处理下载按钮点击事件
 * - 显示对应的下载弹窗
 * 
 * 使用场景：
 * - 首页中部展示下载选项
 * 
 * 交互：
 * - 点击下载按钮会打开对应版本的弹窗
 * - 使用sonner显示下载状态toast
 */
import { appInfo } from "@/mock/appData";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";
import FreeDownloadModal from "./FreeDownloadModal";
import ProDownloadModal from "./ProDownloadModal";

export default function DownloadSection() {
  const [showModal, setShowModal] = useState(false);
  const [currentVersion, setCurrentVersion] = useState<'free' | 'pro'>('free');

  const handleDownload = (version: 'free' | 'pro') => {
    setCurrentVersion(version);
    setShowModal(true);
  };

  const handleFreeDownload = () => {
    setShowModal(false);
    toast.success(`${appInfo.versions.free.name} 下载已开始`);
    setTimeout(() => {
      toast(`${appInfo.versions.free.name} 下载完成`);
    }, 2000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 p-10 rounded-3xl shadow-2xl max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center mb-12">
            <motion.img 
              src={appInfo.icon} 
              alt="App Icon" 
              className="w-40 h-40 rounded-3xl border-4 border-white dark:border-gray-200 shadow-xl mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <h2 className="text-5xl font-extrabold text-white mb-2">领克第三方应用商店</h2>
            <p className="text-blue-100 text-xl">选择适合您的版本</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {(['free', 'pro'] as const).map((version) => (
              <motion.div
                key={version}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border-2 border-white/30 dark:border-gray-700 shadow-lg"
              >
                <div className="text-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-extrabold text-white mb-2">
                      {appInfo.versions[version].name}
                    </h3>
                    <p className="text-blue-100 text-lg font-medium">
                      版本 {appInfo.versions[version].version}
                    </p>
                  </div>
                  
                  <p className="text-white text-lg mb-6 px-4">
                    {appInfo.versions[version].description}
                  </p>
                  
                  <div className="mb-8">
                    <ul className="text-blue-100 text-left space-y-3">
                      {appInfo.versions[version].features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start py-2 border-b border-white/10 last:border-0"
                          whileHover={{ x: 5 }}
                        >
                          <i className="fa-solid fa-check-circle text-green-400 mr-3 mt-1"></i>
                          <span className="text-white/90">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                   <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDownload(version)}
                    className={`w-full font-bold px-8 h-12 rounded-lg transition-all text-lg flex items-center justify-center ${
                      version === 'pro' 
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <i className="fa-solid fa-download mr-2"></i>
                    下载 {appInfo.versions[version].name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {showModal && (
        <>
          {currentVersion === 'free' ? (
            <FreeDownloadModal 
              onClose={() => setShowModal(false)}
              onDownload={handleFreeDownload}
            />
          ) : (
            <ProDownloadModal 
              onClose={() => setShowModal(false)}
              onDownload={handleFreeDownload}
            />
          )}
        </>
      )}
    </section>
  );
}
