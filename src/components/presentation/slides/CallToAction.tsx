
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h3 className="text-3xl font-bold text-red-300">Готовы начать игру?</h3>
        <Button 
          size="lg" 
          className="animate-pulse bg-red-600 hover:bg-red-700 hover:scale-105 transition-all text-white text-xl px-12 py-6"
          onClick={() => window.open("https://www.leagueoflegends.com/", "_blank")}
        >
          Начать играть сейчас
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
