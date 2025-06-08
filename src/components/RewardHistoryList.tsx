/**
 * 赞赏历史列表组件
 * 
 * 功能：
 * - 展示所有赞赏记录
 * - 从JSON文件加载数据
 * - 响应式布局
 * 
 * Props:
 * - className: 自定义类名
 * 
 * 数据依赖：
 * - 使用src/db/rewards.json数据
 * 
 * 布局：
 * - 移动端：单列
 * - 平板：双列
 * - 桌面：三列
 */
import RewardItem, { RewardItemProps } from "./RewardItem";
import rewardsData from "@/db/rewards.json";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RewardHistoryListProps {
  className?: string;
}

export default function RewardHistoryList({ className }: RewardHistoryListProps) {
  const [rewards, setRewards] = useState<RewardItemProps[]>([]);

  useEffect(() => {
    setRewards(rewardsData);
  }, []);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {rewards.map((reward) => (
          <RewardItem
            key={reward.id}
            id={reward.id}
            name={reward.name}
            amount={reward.amount}
            date={reward.date}
            paymentMethod={reward.paymentMethod}
          />
        ))}
      </div>
    </div>
  );
}