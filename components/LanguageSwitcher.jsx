"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import BanglaIcon from "./icons/BanglaIcon";
import EnglishIcon from "./icons/EnglishIcon";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
      icon: <EnglishIcon />,
    },
    {
      code: "bn",
      language: "Bangla",
      icon: <BanglaIcon />,
    },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (code) => {
    const lang = languages.find((l) => l.code === code);
    if (lang) setSelectedLanguage(lang);
    setShowMenu(false);
    router.push(`/${code}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setShowMenu(!showMenu)}
        >
          {selectedLanguage.icon}
          <span className="text-sm">{selectedLanguage.language}</span>
        </button>

        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white dark:bg-zinc-900 p-2 z-10 shadow-lg border border-gray-200 dark:border-gray-700">
            {languages.map((entry) => (
              <button
                key={entry.code}
                type="button"
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 w-full text-left"
              >
                {entry.icon}
                {entry.language}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
