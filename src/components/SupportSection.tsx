/**
 * 支持/赞赏区域组件
 * 
 * 功能：
 * - 展示微信支付和支付宝赞赏二维码
 * - 提供关注公众号的交互
 * 
 * 使用场景：
 * - 首页底部展示支持方式
 * 
 * 交互：
 * - 点击二维码区域会显示感谢toast
 */
import { rewardData, wechatQR } from "@/mock/appData";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function SupportSection() {
  const handleWechatClick = () => {
    toast('已关注公众号', {
      description: '感谢车友的关注！您将第一时间获取车机信息',
      action: {
        label: '确定',
        onClick: () => {}
      },
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            赞赏徐大兵
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            whileHover={{ scale: 1.01 }}
          >
            您的赞赏将用于服务器维护，后续带来更多车机帮助～
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* 微信支付二维码 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              微信支付
            </motion.h3>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <img 
                src={rewardData.wechatQR} 
                alt="微信支付" 
                className="w-48 h-48 mx-auto rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-md"
              />
            </motion.div>
          </motion.div>

          {/* 支付宝二维码 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              支付宝
            </motion.h3>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <img 
                src={rewardData.alipayQR} 
                alt="支付宝" 
                className="w-48 h-48 mx-auto rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.01 }}
          >
            感谢每一位支持者的信任与鼓励！我们将持续为您带来更好的体验
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}