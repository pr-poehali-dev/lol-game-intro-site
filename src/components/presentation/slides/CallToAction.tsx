
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToActionSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <Button 
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2"
        onClick={() => window.open('https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip', '_blank')}
      >
        <Icon name="Download" size={24} />
        Скачать бесплатно
      </Button>
    </div>
  );
};

export default CallToActionSlide;
