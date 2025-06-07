/**
 * 主题管理自定义hook
 * 
 * 功能：
 * - 管理应用的主题状态(light/dark)
 * - 自动从localStorage读取保存的主题偏好
 * - 自动检测系统主题偏好
 * - 持久化主题选择到localStorage
 * 
 * 返回值：
 * - theme: 当前主题
 * - toggleTheme: 切换主题函数
 * - isDark: 是否为暗黑主题
 */
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
} 