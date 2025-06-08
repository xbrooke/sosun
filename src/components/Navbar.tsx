/**
 * 导航栏组件
 * 
 * 功能：
 * - 显示网站标题
 * - 提供GitHub链接
 * - 提供主题切换按钮
 * 
 * 特性：
 * - 支持暗黑/明亮主题切换
 * - 使用useTheme hook管理主题状态
 */
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
      <div className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
         <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">徐大兵Brooke</a>
      </div>
      
       <div className="flex items-center gap-6">
        <a 
          href="/about" 
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          关于
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          <i className="fa-brands fa-github text-2xl"></i>
        </a>
        <button
          onClick={toggleTheme}
          className={cn(
            "p-2 rounded-full",
            "text-gray-800 dark:text-gray-200",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "transition-colors"
          )}
        >
          {isDark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
