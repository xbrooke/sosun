import { rewardData } from "@/mock/appData";

export default function RewardSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-8">
          支持徐大兵
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-6/12 flex flex-col sm:flex-row gap-6 justify-center">
            <div className="text-center">
              <img 
                src={rewardData.wechatQR} 
                alt="微信支付" 
                className="w-50 h-50 mx-auto mb-2 rounded-lg"
                width={200}
                height={200}
              />
              <p className="text-gray-600 dark:text-gray-300">微信支付</p>
            </div>
            <div className="text-center">
              <img 
                src={rewardData.alipayQR} 
                alt="支付宝" 
                className="w-50 h-50 mx-auto mb-2 rounded-lg"
                width={200}
                height={200}
              />
              <p className="text-gray-600 dark:text-gray-300">支付宝</p>
            </div>
          </div>
          
          <div className="lg:w-4/12 flex flex-col justify-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              {rewardData.thankText}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {rewardData.suggestion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
