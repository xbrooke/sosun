/**
 * Pro版下载弹窗组件
 * 
 * 功能：
 * - 提供Pro版直接下载按钮
 * - 提供购买激活码的跳转按钮
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

interface ProDownloadModalProps {
  onClose: () => void;
  onDownload: () => void;
}

export default function ProDownloadModal({ onClose, onDownload }: ProDownloadModalProps) {
  const handleBuyCode = () => {
    toast('即将跳转到购买激活码页面');
    // 实际项目中这里可以跳转到购买页面
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
              Pro版下载
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
              下载 Pro 版
            </h4>
              <button
               onClick={() => {
                 onDownload();
                 window.location.href = 'https://www.baidu.com';
                 toast.success('Pro版 下载已开始');
                 setTimeout(() => {
                   toast('Pro版 下载完成');
                 }, 2000);
               }}
               className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition-colors"
             >
               <i className="fa-solid fa-download mr-2"></i>
               立即下载 Pro版
             </button>
          </div>

          {/* 分隔线 */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          {/* 购买激活码区块 */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              购买激活码
            </h4>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                购买激活码解锁Pro版全部功能
              </p>
              <button
                onClick={handleBuyCode}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-credit-card mr-2"></i>
                前往购买激活码
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}