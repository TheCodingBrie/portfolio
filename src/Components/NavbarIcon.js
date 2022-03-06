import React from "react";

export default function NavbarIcon({ icon, text, link }) {
  return (
    <a className="navbar-icon group" href={link}>
      {icon}
      <span className="navbar-tooltip group-hover:scale-100">{text}</span>
    </a>
  );
}
