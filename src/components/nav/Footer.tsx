"use client";
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMastodon, FaMedium } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/brennan-mahto', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/duckb3ar', label: 'Twitter' },
    { icon: FaGithub, url: 'https://github.com/bluDuckb3ar', label: 'GitHub' },
    { icon: FaMastodon, url: 'https://mastodon.social/@duckb3ar', label: 'Mastodon' },
    { icon: FaMedium, url: 'https://medium.com/@duckb3ar', label: 'Medium' },
  ];

  const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 20px;

    a {
      color: #FFD700; // Replace with actual color value
      transition: color 0.3s;
      font-size: 14px; // Adjust the font size to make the icons smaller

      &:hover {
        color: #1E90FF; // Replace with actual color value
      }
    }
  `;

  return (
    <div>
      <SocialMediaIcons>
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.url} className="mx-2 text-duckBlue2">
            {link.label}
          </a>
        ))}
      </SocialMediaIcons>
    </div>
  );
};

export default Footer;