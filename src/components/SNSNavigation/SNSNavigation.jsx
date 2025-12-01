import React from "react";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import "./SNSNavigation.css";

const SNSNav = () => {
  const socials = [
    { id: 1, name: "TikTok", icon: <FaTiktok />, link: "" },
    { id: 2, name: "Instagram", icon: <FaInstagram />, link: "" },
    { id: 3, name: "YouTube", icon: <FaYoutube />, link: "" },
  ];

  return (
    <nav className="sns-nav">
      <ul>
        {socials.map((social) => (
          <li key={social.id}>
            {social.link ? (
              <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                {social.icon}
              </a>
            ) : (
              <span className="sns-icon disabled" aria-label={social.name} title="Coming soon">
                {social.icon}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SNSNav;
