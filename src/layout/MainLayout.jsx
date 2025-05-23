import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeProvider";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-end items-center gap-2 px-6 py-4 bg-[#e8faf4] dark:bg-gray-900">
        <Label htmlFor="theme-toggle" className="text-sm">
          {isDark ? "Dark Mode" : "Light Mode"}
        </Label>
        <Switch
          id="theme-toggle"
          checked={isDark}
          onCheckedChange={toggleTheme}
        />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
