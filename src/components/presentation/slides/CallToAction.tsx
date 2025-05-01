
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h3 className="text-3xl font-bold text-red-300">Готовы начать игру?</h3>
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all text-white text-xl px-12 py-6"
          onClick={() => window.location.href = "https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip"}
        >
          <Icon name="Download" className="mr-2" />
          Скачать игру
        </Button>
        <p className="mt-2 text-gray-300 text-sm">Установщик для Mac (1.5 GB)</p>
      </div>
    </div>
  );
};

export default CallToAction;
