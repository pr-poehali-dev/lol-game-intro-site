
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useIsMobile } from "@/hooks/use-mobile";

const IntroSlide: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col items-center px-4">
      <img 
        src="https://cdn.poehali.dev/files/97f40d06-851e-4ce0-943f-a2b11b570415.png" 
        alt="League of Legends vs Fortnite" 
        className="rounded-lg mb-6 max-w-full w-auto h-auto shadow-lg shadow-red-900/30" 
        style={{ maxWidth: isMobile ? "90%" : "md" }}
      />
      <p className="text-base md:text-xl max-w-xl text-center">
        После Fortnite время открыть новый уровень игрового опыта, 
        где командная работа и стратегия определяют победителей
      </p>
      <div className="mt-6 md:mt-8 flex gap-4">
        <Button 
          onClick={onNext} 
          className="bg-red-700 hover:bg-red-800 px-4 md:px-6 py-4 md:py-6 text-sm md:text-lg flex items-center gap-2"
        >
          <Icon name="ArrowRight" size={isMobile ? 16 : 20} />
          Начать путешествие
        </Button>
      </div>
    </div>
  );
};

export default IntroSlide;
