import { useEffect, useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkTheme", darkTheme);
    }
  }, [darkTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    const preferDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === null) {
      setDarkTheme(preferDark);
    } else {
      setDarkTheme(savedTheme === "true");
    }
  }, []);

  return (
    <div>
      <div className="dark:bg-slate-800 dark:text-white w-full h-screen">
        <button onClick={handleToggle}>
          {darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}
