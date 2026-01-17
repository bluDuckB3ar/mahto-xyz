import React from "react";
import { Mac, Windows, Linux } from "@/public/social-icons/icons"; // Adjust the import path as needed

import Button from "@/components/dodad/Button";
// Icons imported for display

const operatingSystems = [
    {
        name: "MacOS",
        downloadLink: "https://github.com/rustdesk/rustdesk/releases/download/1.3.6/rustdesk-1.3.6-x86_64.dmg",
        docLink: "https://rustdesk.com/docs/en/client/mac/",
        buttonText: "Download for Mac"
    },
    {
        name: "Windows",
        downloadLink: "https://github.com/rustdesk/rustdesk/releases/download/1.3.6/rustdesk-1.3.6-x86_64.dmg",
        docLink: "https://rustdesk.com/docs/en/client/windows/",
        buttonText: "Download for Windows"
    },
    {
        name: "Android",
        downloadLink: "https://github.com/rustdesk/rustdesk/releases/download/1.3.6/rustdesk-1.3.6-armv7-signed.apk",
        docLink: "https://rustdesk.com/docs/en/client/android/",
        buttonText: "Download for Android"
    },
    {
        name: "iOS",
        downloadLink: "https://testflight.apple.com/join/KBG9EsZW",
        docLink: "https://testflight.apple.com/join/KBG9EsZW",
        buttonText: "Download for iOS"
    }
];

const RustPage = () => {
    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="text-center text-duckBlue2 mb-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Remote Support Page</h1>
                <h2 className="text-2xl font-semibold">Select Your Operating System</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                {operatingSystems.map((os) => (
                    <div key={os.name} className="flex flex-col items-center border rounded-lg transition-shadow">
                        <h3 className="text-xl font-bold my-4">{os.name}</h3>
                        <a 
                            href={os.downloadLink}
                            className="text-white px-4 py-2 transition-colors"
                            rel="noopener noreferrer"
                        >
                            <Button>
                                {os.buttonText}
                            </Button>
                        </a>
                        <a 
                            href={os.docLink}
                            className="mt-2 text-blue-500 hover:underline"
                            rel="noopener noreferrer"
                        >
                            View Documentation
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RustPage;
