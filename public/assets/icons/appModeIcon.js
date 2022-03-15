import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
export default function () {
  const { theme } = useTheme("");
  const [isDark, setisDark] = useState(null);
  useEffect(() => {
    if (theme === "dark") setisDark(true);
    if (theme === "light") setisDark(false);
  }, [theme]);
  if (isDark) return <BsMoon />;
  if (isDark === false) return <BsSun />;
  if (isDark === null) return <></>;
}
