/**
 * 应用数据配置文件
 * 包含所有图片资源URL和静态数据
 * 
 * 修改图片方法：
 * 1. 找到对应的图片URL字段
 * 2. 替换为新的图片URL
 * 3. 保存文件即可生效
 * 
 * 数据使用说明：
 * - appInfo: 应用基本信息，被DownloadSection组件使用
 * - rewardData: 支付二维码数据，被RewardSection和SupportSection使用
 * - wechatAccounts: 微信公众号信息，被FreeDownloadModal和WechatSection使用
 * - tutorials: 教程数据，被TutorialCard使用
 * - wechatQR: 微信公众号二维码，被FreeDownloadModal和WechatSection使用
 * - statsData: 统计数据，被StatsSection使用
 * - testimonials: 支持系统数据，被Testimonial使用
 * - carouselItems: 轮播图数据，被Carousel使用
 * 
 * 图片类型说明：
 * - 应用图标(appInfo.icon) - 建议尺寸: 512x512
 * - 轮播图(carouselItems[].image) - 建议尺寸: 16:9宽屏
 * - 支持系统图片(testimonials[].image) - 建议尺寸: 16:9宽屏
 * - 支付二维码(rewardData.wechatQR/alipayQR) - 建议尺寸: 430x430
 * - 微信公众号二维码(wechatQR) - 建议尺寸: 430x430
 */
export const appInfo = {
  name: "领克第三方应用商店",
  versions: {
    free: {
      name: "Free 版",
      version: "v1.0.0",
      description: "所有软件免费使用",
      features: [
        "快速进入设置",
        "简单笔记功能",
        "基本提醒功能"
      ]
    },
    pro: {
      name: "Pro 版",
      version: "v2.0.0",
      description: "解锁全部高级功能",
      features: [
        "智能任务管理",
        "数据统计分析", 
        "云同步功能"
      ]
    }
  },
  // 应用图标 - 建议尺寸: 512x512
  icon: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=a%20modern%20app%20icon%20with%20blue%20gradient%20background%20and%20minimal%20design&sign=b6a5a9544f89e5a6ee7a7e1226c6d2e0"
};

export const rewardData = {
   // 微信支付二维码 - 建议尺寸: 430x430
   wechatQR: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=wechat%20payment%20qr%20code%20with%20modern%20design&sign=d83f52bb3d4875ba2996080a3df6be8b",
   // 支付宝二维码 - 建议尺寸: 430x430
   alipayQR: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=alipay%20payment%20qr%20code%20with%20modern%20design&sign=cbd72561e200563ae1af5e52e2cfbcf0",
   thankText: "您的支持将帮助我们持续改进应用",
    suggestion: "请输入自定义金额进行赞赏"
 };

export const wechatAccounts = {
  primary: "xbrooke"
};

export const tutorials = [
  {
    title: "快速入门指南",
    description: "10分钟快速掌握应用核心功能，立即提升工作效率"
  },
  {
    title: "高级使用技巧",
    description: "探索隐藏的高级功能和快捷操作方式，成为高级用户"
  },
  {
    title: "数据统计分析",
    description: "学会使用强大的数据分析功能，洞察您的行为模式"
  }
];

// 微信公众号二维码 - 建议尺寸: 430x430
export const wechatQR = "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=modern%20wechat%20official%20account%20qr%20code%20design&sign=c2fe00c84d5d50949ad4f11680cf530d";

export const statsData = [
  { value: "10万+", label: "用户下载" },
  { value: "98%", label: "用户满意度" },
  { value: "24/7", label: "技术支持" },
  { value: "50+", label: "实用功能" }
];

export const testimonials = [
  {
    title: "LYNK OS N 1.0-1.2",
    features: [
      "LYNK OS N 1.0",
      "LYNK OS N 1.1", 
      "LYNK OS N 1.2"
    ],
    // 支持系统图片1 - 建议尺寸: 16:9宽屏
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20car%20infotainment%20system%20interface%20with%20navigation%20and%20media%20controls%2C%20blue%20theme&sign=c55df5a5fcc5a63d1da91b4e95bda832"
  },
  {
    title: "LYNK OS N 1.3",
    features: [
      "LYNK OS N 1.3"
    ],
    // 支持系统图片2 - 建议尺寸: 16:9宽屏
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=futuristic%20car%20infotainment%20system%20interface%20with%20AI%20assistant%2C%20purple%20theme&sign=dd17f7f526d37b83779a84c143a92ca9"
  }
];

// 轮播图配置 - 建议尺寸: 16:9宽屏
export const carouselItems = [
  {
    title: "智能任务管理",
    description: "高效管理您的日常任务和项目",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=a%20modern%20task%20management%20interface%20with%20clean%20design&sign=40b0e55cbf3b86ffdf4aa7413e055e3d"
  },
  {
    title: "数据分析",
    description: "可视化您的行为数据，获得洞察",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=a%20data%20analysis%20dashboard%20with%20charts%20and%20graphs&sign=a1a16943428dd870ab17e25840b03342"
  },
  {
    title: "个人助手 Pro",
    description: "提升您的工作效率与生活品质",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=a%20modern%20productivity%20app%20interface%20with%20minimal%20design&sign=f80049113d17b106b778dd991f7bbf5e"
  }
];
