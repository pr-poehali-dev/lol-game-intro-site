
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToActionSlide: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Youtube", url: "#" },
    { name: "Twitch", url: "#" }
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-red-900/30 flex items-center justify-center mb-6">
        <Icon name="FlameKindling" size={48} className="text-red-500" />
      </div>
      
      <p className="text-xl max-w-xl mb-8">
        Fortnite научил тебя быстрой реакции. Теперь пора применить эти навыки в мире, 
        где стратегия и командная работа определяют победителей.
      </p>
      
      <ActionButtons />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2">
        <Icon name="Download" size={24} />
        Скачать бесплатно
      </Button>
      <Button variant="outline" className="border-red-700 text-red-400 hover:bg-red-950/30 px-8 py-6 text-lg rounded-md flex items-center gap-2">
        <Icon name="Youtube" size={24} />
        Смотреть трейлер
      </Button>
    </div>
  );
};

interface SocialLinksProps {
  links: { name: string; url: string }[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="mt-12 flex justify-center gap-6">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          className="hover:text-red-500 transition-colors"
          aria-label={link.name}
        >
          <Icon name={link.name} size={24} />
        </a>
      ))}
    </div>
  );
};

export default CallToActionSlide;
