import React from "react";

export default function NavbarIcon({ icon, link }) {
  return (
    <a href={link} className="footer-icon group">
      {icon}
    </a>
  );
}
