/**
 * 应用数据配置文件
 * 包含所有图片资源URL和静态数据
 * 
 * 修改图片方法：
 * 1. 找到对应的图片URL字段
 * 2. 替换为新的图片URL
 * 
 * 下载配置：
 * - Free版下载路径: /downloads/link-app-store-free.zip
 * - Pro版下载路径: /downloads/link-app-store-pro.zip
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
  name: "领克车机应用商店",
  versions: {
    free: {
      name: "Free版",
      version: "v1.2.0",
      description: "基础车机功能体验",
      features: [
        "车机应用一键安装",
        "基础主题切换",
        "集成系统设置"
      ]
    },
    pro: {
      name: "Pro版",
      version: "v2.1.0",
      description: "更丰富的车机应用",
      features: [
        "更多适配软件",
        "驾驶行为分析", 
        "车机性能优化"
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
    thankText: "您的支持将帮助我们开发更多车机实用功能",
    suggestion: "建议赞赏金额：6.6元、8.8元、16.6元"
 };

export const wechatAccounts = {
  primary: "xbrooke"
};

export const tutorials = [
  {
    title: "快速安装应用",
    description: "车机应用安装一条龙",
    link: "https://hblog.xbrooke.cn/p/22189.html"
  },
  {
    title: "应用商店使用指南",
    description: "详细讲解如何使用应用商店",
    link: "https://hblog.xbrooke.cn/p/60576.html"
  },
  {
    title: "车机常见问题",
    description: "详细讲解安装过程遇到的问题",
    link: "https://hblog.xbrooke.cn/p/da7.html"
  }
];

// 微信公众号二维码 - 建议尺寸: 430x430
export const wechatQR = "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=modern%20wechat%20official%20account%20qr%20code%20design&sign=c2fe00c84d5d50949ad4f11680cf530d";

export const statsData = [
  { value: "2000+", label: "用户下载" },
  { value: "100%", label: "适用新手" },
  { value: "24/7", label: "专属沟通群" },
  { value: "50+", label: "实用应用" }
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
    title: "LYNK OS N 1.2升级1.3带应用商店",
    features: [
      "LYNK OS N 1.3（商店版）"
    ],
    // 支持系统图片2 - 建议尺寸: 16:9宽屏
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=futuristic%20car%20infotainment%20system%20interface%20with%20AI%20assistant%2C%20purple%20theme&sign=dd17f7f526d37b83779a84c143a92ca9"
  }
];

// 轮播图配置 - 建议尺寸: 16:9宽屏
export const carouselItems = [
  {
    title: "领克车机应用商店",
    description: "专为领克车主打造的应用平台",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20car%20infotainment%20system%20interface%20with%20app%20store&sign=8c2957ec742c299324d4406f96120f28"
  },
  {
    title: "驾驶行为分析",
    description: "专业分析您的驾驶习惯",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=car%20dashboard%20with%20driving%20analytics&sign=30b0b92f0f22cd527c05b12b24ecb61c"
  },
  {
    title: "车机主题定制",
    description: "个性化您的车机界面",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=car%20infotainment%20system%20with%20customizable%20themes&sign=cc25f1a2f7d63c278c608299c1603ec8"
  }
];


