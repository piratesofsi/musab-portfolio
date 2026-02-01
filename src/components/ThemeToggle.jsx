import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Load saved theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  function toggleTheme() {
    const root = document.documentElement;

    const nowLight = root.classList.toggle("light");

    localStorage.setItem("theme", nowLight ? "light" : "dark");
    setIsLight(nowLight);
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 right-6 z-[9999]
        px-3 py-3
        md:px-4 md:py-2 rounded-full shadow-lg
        bg-blue-600 text-white
        hover:bg-blue-700 transition
      "
    >
        {/* Icon always visible */}
  <span className="text-lg">
    {isLight ? "🌙" : "☀️"}
  </span>

  {/* Text only on md+ screens */}
  <span className="hidden md:inline">
    {isLight ? "Dark" : "Light"}
  </span>
    </button>
  );
}
