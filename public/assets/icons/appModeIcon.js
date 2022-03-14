import React from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function () {
  const { theme } = useTheme("");
  if (theme === "dark") return <IoSunnyOutline />;
  if (theme === "light") return <IoMoonOutline />;
  return <></>;
}
