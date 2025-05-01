
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const IntroSlide: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="https://cdn.poehali.dev/files/97f40d06-851e-4ce0-943f-a2b11b570415.png" 
        alt="League of Legends vs Fortnite" 
        className="rounded-lg mb-8 max-w-md shadow-lg shadow-red-900/30" 
      />
      <p className="text-xl max-w-xl text-center">
        После Fortnite время открыть новый уровень игрового опыта, 
        где командная работа и стратегия определяют победителей
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={onNext} className="bg-red-700 hover:bg-red-800 px-6 py-6 text-lg flex items-center gap-2">
          <Icon name="ArrowRight" size={20} />
          Начать путешествие
        </Button>
      </div>
    </div>
  );
};

export default IntroSlide;
