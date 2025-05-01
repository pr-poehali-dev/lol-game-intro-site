
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SlideNavigationProps {
  slides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  slides,
  currentSlide,
  onSlideChange
}) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onSlideChange(currentSlide - 1)}
        className="text-red-400 hover:text-red-500 hover:bg-red-950/30"
      >
        <Icon name="ChevronLeft" size={24} />
      </Button>
      
      <div className="flex items-center gap-1">
        {Array.from({ length: slides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all ${
              currentSlide === index 
                ? "bg-red-600 w-4" 
                : "bg-red-900/50 hover:bg-red-800/80"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onSlideChange(currentSlide + 1)}
        className="text-red-400 hover:text-red-500 hover:bg-red-950/30"
      >
        <Icon name="ChevronRight" size={24} />
      </Button>
    </div>
  );
};

export default SlideNavigation;
