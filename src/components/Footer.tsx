import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMastodon } from 'react-icons/fa';

export default function Footer() {
    const socialMedia = [
        { name: 'Twitter', icon: FaTwitter },
        { name: 'LinkedIn', icon: FaLinkedin },
        { name: 'GitHub', icon: FaGithub },
        { name: 'Instagram', icon: FaInstagram },
        { name: 'Mastodon', icon: FaMastodon },
    ];

    return (
        <div className="m-8 fixed bottom-0 left-0 right-0">
            <div className="flex justify-center">
                {socialMedia.map((platform, index) => (
                    <a
                        key={index}
                        href={`https://www.${platform.name.toLowerCase()}.com`}
                        className="text-duckBlue2 mx-2"
                    >
                        <platform.icon />
                    </a>
                ))}
            </div>
        </div>
    );
}