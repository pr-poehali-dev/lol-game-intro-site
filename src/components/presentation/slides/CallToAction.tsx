
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToActionSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-blue-900/30 flex items-center justify-center mb-6">
        <Icon name="FlameKindling" size={48} className="text-blue-500" />
      </div>
      
      <p className="text-xl max-w-xl mb-8">
        Fortnite научил тебя быстрой реакции. Теперь пора применить эти навыки в мире, 
        где стратегия и командная работа определяют победителей.
      </p>
      
      <Button 
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2"
        onClick={() => window.open('https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip', '_blank')}
      >
        <Icon name="Download" size={24} />
        Скачать бесплатно
      </Button>
    </div>
  );
};

export default CallToActionSlide;
