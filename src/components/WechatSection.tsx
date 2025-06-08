/**
 * 微信公众号关注区域组件
 * 
 * 功能：
 * - 展示微信公众号二维码
 * - 提供微信号复制功能
 * 
 * 交互：
 * - 点击复制按钮会复制微信号并显示toast
 * 
 * 数据依赖：
 * - 使用mock/appData.ts中的wechatQR和wechatAccounts数据
 */
import { wechatQR, wechatAccounts } from "@/mock/appData";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function WechatSection() {
  const handleCopy = (account: string) => {
    navigator.clipboard.writeText(account);
    toast.success('微信号已复制');
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            关注公众号
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            获取最新更新和专属福利
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <img 
                  src={wechatQR} 
                  alt="微信公众号" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              <div className="w-full">
                <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="font-mono text-gray-800 dark:text-gray-200 truncate">
                    {wechatAccounts.primary}
                  </span>
                  <button 
                    onClick={() => handleCopy(wechatAccounts.primary)}
                    className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-colors flex-shrink-0"
                  >
                    <i className="fa-regular fa-copy mr-1"></i>
                    复制
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
