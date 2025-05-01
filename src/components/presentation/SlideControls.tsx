
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
    <div className="py-6 px-8 flex justify-between items-center border-t border-red-900/30">
      <Button 
        variant="outline" 
        onClick={onPrevious}
        className="border-red-900 text-red-400 hover:text-red-300 hover:bg-red-950/40 hover:border-red-800 flex items-center gap-2"
      >
        <Icon name="ArrowLeft" size={18} />
        Назад
      </Button>
      
      <div className="text-red-400">
        <span className="text-red-600 font-bold">{currentSlide + 1}</span> из {totalSlides}
      </div>
      
      <Button 
        variant="outline" 
        onClick={onNext}
        className="border-red-900 text-red-400 hover:text-red-300 hover:bg-red-950/40 hover:border-red-800 flex items-center gap-2"
      >
        Далее
        <Icon name="ArrowRight" size={18} />
      </Button>
    </div>
  );
};

export default SlideControls;
