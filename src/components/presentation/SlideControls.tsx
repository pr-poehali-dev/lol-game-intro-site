
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const SlideControls: React.FC<SlideControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-t border-red-900/20">
      <Button 
        variant="outline"
        onClick={onPrevious}
        className="border-red-800/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-700"
        style={{
          backgroundColor: "transparent",
          borderColor: "rgba(153, 27, 27, 0.3)",
          color: "rgb(248, 113, 113)",
          boxShadow: "none"
        }}
      >
        <Icon name="ArrowLeft" className="mr-2" size={18} />
        Назад
      </Button>
      
      <div className="text-red-400/70 text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      <Button 
        variant="outline"
        onClick={onNext}
        className="border-red-800/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-700"
        style={{
          backgroundColor: "transparent",
          borderColor: "rgba(153, 27, 27, 0.3)",
          color: "rgb(248, 113, 113)",
          boxShadow: "none"
        }}
      >
        Далее
        <Icon name="ArrowRight" className="ml-2" size={18} />
      </Button>
    </div>
  );
};

export default SlideControls;
