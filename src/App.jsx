import { useState } from 'react'
import Logo from './assets/ryan.jpg'
import { MoreVertical, Sun, Moon } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true);

  const groups = [
    { name: "Nosso Grupo de Contas FF", gap: "gap-1", url: "https://chat.whatsapp.com/Lme3kDQu6yd5d9cMrWsk2d?s=cl&p=a&mlu=4" },
    { name: "Adquira seu xit aqui 👺✅", gap: "gap-2", url: "https://chat.whatsapp.com/Lme3kDQu6yd5d9cMrWsk2d?s=cl&p=a&mlu=4" },
    {
      name: "instagram",
      gap: "gap-3",
      url: "https://www.instagram.com/ryan_xits079?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: SiInstagram,
      iconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      name: "TIKTOK",
      gap: "gap-3",
      url: "https://www.tiktok.com/@ryanxitsff?is_from_webapp=1&sender_device=pc",
      icon: SiTiktok,
      iconBg: "bg-black",
    },
  ];

  return (
    <div>
      <div
        className={`flex min-h-screen flex-col justify-start px-6 pt-6 pb-12 lg:px-8 ${isDark ? "bg-slate-950" : "bg-slate-100"
          }`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-between">
          <div className="flex-1" />
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Alternar tema"
            className={`p-2 rounded-full ${isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={Logo} alt="Logo" className="mx-auto w-32 h-32 rounded-full object-cover" />
          <h2
            className={`mt-10 text-center text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"
              }`}
          >
            RYAN_XITS
          </h2>
        </div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col space-y-4">
          {groups.map((group) => (
            <a
              key={group.name}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-sm rounded-2xl shadow-sm px-3 py-2 flex items-center justify-between cursor-pointer ${group.gap} border ${isDark
                ? "bg-black hover:bg-white/8 border-transparent"
                : "bg-white hover:bg-black/5 border-slate-200"
                }`}
            >
              {group.icon ? (
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${group.iconBg}`}
                >
                  <group.icon className="w-7 h-7 text-white" />
                </div>
              ) : (
                <img
                  src={Logo}
                  alt="Group thumbnail"
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />
              )}

              <div className="flex-1 min-w-0 px-2">
                <h3
                  className={`text-[15px] font-semibold uppercase truncate ${isDark ? "text-white" : "text-slate-900"
                    }`}
                >
                  {group.name}
                </h3>
              </div>

              <span
                aria-label="Mais opções"
                className="p-1.5 rounded-full"
              >
                <MoreVertical
                  className={`w-5 h-5 transition-transform hover:scale-105 ${isDark
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-slate-400 hover:text-slate-600"
                    }`}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;