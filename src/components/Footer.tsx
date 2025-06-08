/**
 * 页脚组件
 * 
 * 功能：
 * - 显示版权信息和年份
 * - 适配暗黑/明亮主题
 * 
 * 样式特性：
 * - 半透明背景
 * - 模糊效果
 * - 顶部边框分隔线
 */
export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} 由徐大兵为维护. 保留所有权利.
      </p>
    </footer>
  );
}
