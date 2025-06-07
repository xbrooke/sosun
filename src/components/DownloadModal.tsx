/**
 * 通用下载模态框组件
 * 
 * 功能：
 * - 提供通用的下载界面
 * - 支持自定义标题和描述
 * - 包含下载和关闭功能
 * 
 * Props:
 * - onClose: 关闭模态框的回调函数
 * - onDownload: 下载按钮点击回调
 * - title: 模态框标题 (可选)
 * - description: 描述文本 (可选)
 * - buttonText: 下载按钮文本 (可选)
 * 
 * 使用场景：
 * - 作为FreeDownloadModal和ProDownloadModal的基础组件
 */
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DownloadModalProps {
  onClose: () => void;
  onDownload: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function DownloadModal({
  onClose,
  onDownload,
  title = "下载",
  description = "准备开始下载",
  buttonText = "立即下载"
}: DownloadModalProps) {
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
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {description}
            </p>
            <button
              onClick={() => {
                onDownload();
                onClose();
              }}
              className={cn(
                "w-full py-3 px-4 rounded-lg transition-colors",
                "bg-blue-500 hover:bg-blue-600 text-white",
                "font-medium flex items-center justify-center"
              )}
            >
              <i className="fa-solid fa-download mr-2"></i>
              {buttonText}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
