
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToActionSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className="text-2xl font-semibold text-red-300 mb-4">
          Присоединяйся к миллионам игроков!
        </h3>
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-xl rounded-md flex items-center gap-2 shadow-lg transform transition-transform hover:scale-105"
          onClick={() => window.open('https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip', '_blank')}
        >
          <Icon name="Download" size={24} />
          Скачать бесплатно
        </Button>
      </div>
    </div>
  );
};

export default CallToActionSlide;
