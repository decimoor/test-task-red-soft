import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
    const setTheme = useThemeStore((state) => state.setTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(savedTheme);
    }, [setTheme]);

    return <>{children}</>;
}