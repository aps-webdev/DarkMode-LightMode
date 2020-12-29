import { useEffect, useState } from "react";
import ToggleBtn from "../toggleButton/toggleBtn.index";
import "./darkMode.styles.scss";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
    return () => {
      if (!isDark) {
        document.body.classList.remove("light");
      } else {
        document.body.classList.remove("dark");
      }
    };
  }, [isDark]);
  return (
    <div>
      <h3>Switch mode to DARK or LIGHT</h3>
      <ToggleBtn handleToggle={handleToggle} />
    </div>
  );
}
export default DarkMode;
