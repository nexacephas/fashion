import React from "react";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import "./SNSNavigation.css";

const SNSNav = () => {
  const socials = [
    { id: 1, name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/" },
    { id: 2, name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { id: 3, name: "YouTube", icon: <FaYoutube />, link: "https://www.youtube.com/" },
  ];

  return (
    <nav className="sns-nav">
      <ul>
        {socials.map((social) => (
          <li key={social.id}>
            <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SNSNav;
