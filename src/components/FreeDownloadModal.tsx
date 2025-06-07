/**
 * Free版下载弹窗组件
 * 
 * 功能：
 * - 提供Free版直接下载按钮
 * - 展示微信公众号二维码和微信号
 * - 支持复制微信号功能
 * 
 * Props:
 * - onClose: 关闭弹窗的回调函数
 * - onDownload: 下载按钮点击回调
 * 
 * 使用场景：
 * - 由DownloadSection组件触发显示
 */
import { motion } from "framer-motion";
import { toast } from "sonner";
import { wechatQR, wechatAccounts } from "@/mock/appData";

interface FreeDownloadModalProps {
  onClose: () => void;
  onDownload: () => void;
}

export default function FreeDownloadModal({ onClose, onDownload }: FreeDownloadModalProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(wechatAccounts.primary);
    toast.success('微信号已复制');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full mx-4"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Free版下载
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* 直接下载区块 */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              直接下载应用
            </h4>
             <button
              onClick={() => {
                onDownload();
                window.location.href = 'https://www.baidu.com';
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <i className="fa-solid fa-download mr-2"></i>
              立即下载 Free版
            </button>
          </div>

          {/* 分隔线 */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          {/* 关注公众号获取激活码区块 */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              关注公众号获取激活码
            </h4>
            <div className="flex flex-col items-center space-y-4">
              <img 
                src={wechatQR} 
                alt="微信公众号" 
                className="w-40 h-40 rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <div className="flex items-center w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                <span className="font-mono text-gray-800 dark:text-gray-200 truncate flex-grow">
                  {wechatAccounts.primary}
                </span>
                <button 
                  onClick={handleCopy}
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-colors"
                >
                  <i className="fa-regular fa-copy mr-1"></i>
                  复制
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}