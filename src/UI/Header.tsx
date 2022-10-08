import { createElement, FC } from "react";

interface HeaderProps {
  title: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Header: FC<HeaderProps> = ({ title, type, className }) => {
  return createElement(type, { class: className }, title);
};

export default Header;
