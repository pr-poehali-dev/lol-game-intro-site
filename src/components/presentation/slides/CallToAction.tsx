
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">

        <div className="text-center space-y-8">
          {/* Удаляем дублирующий заголовок, он уже есть в slidesData */}

          size="lg" 
          className="bg-red-600 hover:bg-red-700 transition-all text-white text-xl px-12 py-6"
          onClick={() => window.location.href = "https://lol.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.ru.zip"}
        >
          <Icon name="Download" className="mr-2" />
          Скачать игру
        </Button>
        <p className="mt-2 text-gray-300 text-sm">Установщик для Mac (65 MB)</p>
      </div>
    </div>
  );
};

export default CallToAction;
