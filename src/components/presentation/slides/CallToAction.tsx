
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToActionSlide: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Button 
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-xl rounded-md flex items-center gap-2 shadow-lg"
        onClick={() => window.open('https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip', '_blank')}
      >
        <Icon name="Download" size={24} />
        Скачать бесплатно
      </Button>
    </div>
  );
};

export default CallToActionSlide;
