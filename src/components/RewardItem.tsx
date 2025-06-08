/**
 * 赞赏记录项组件
 * 
 * 功能：
 * - 展示单条赞赏记录
 * - 根据金额显示不同颜色
 * - 提供悬停动画效果
 * 
 * Props:
 * - id: 记录ID
 * - name: 赞赏者名称
 * - amount: 赞赏金额
 * - date: 赞赏日期
 * - paymentMethod: 支付方式
 * - className: 自定义类名
 * 
 * 样式特性：
 * - 金额颜色根据数值变化
 * - 悬停时轻微上浮和阴影效果
 */
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RewardItemProps {
  id: number;
  name: string;
  amount: number;
  date: string;
  paymentMethod: string;
  className?: string;
}

export default function RewardItem({
  id,
  name,
  amount,
  date,
  paymentMethod,
  className,
}: RewardItemProps) {
  // 根据金额范围设置不同颜色
  const getAmountColor = (amount: number) => {
    if (amount >= 100) return 'text-yellow-600 dark:text-yellow-400';
    if (amount >= 10) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        y: -4
      }}
      className={cn(
        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700",
        "rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-600/30",
        "transition-all duration-300 ease-in-out hover:shadow-md",
        "backdrop-blur-sm bg-opacity-80",
        "w-full sm:w-[300px] min-h-[100px]",  // 响应式宽度调整
        className
      )}
    >
      <div className="flex items-center gap-5">
        {paymentMethod === "微信支付" ? (
          <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/50">
            <i className="fa-brands fa-weixin text-green-600 dark:text-green-400 text-xl"></i>
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
            <i className="fa-brands fa-alipay text-blue-600 dark:text-blue-400 text-xl"></i>
          </div>
        )}
        
        <div className="flex-1 flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400/80 mt-1">
              {date}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="text-xl font-bold mr-1">¥</span>
            <span className={`text-xl font-bold ${getAmountColor(amount)}`}>
              {amount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
