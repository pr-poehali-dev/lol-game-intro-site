
import React from "react";
import { SlideProps } from "./types";
import { cn } from "@/lib/utils";

interface SlideContentProps {
  slide: SlideProps;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
}

const SlideContent: React.FC<SlideContentProps> = ({ 
  slide, 
  onNext
}) => {
  // Клонируем контент и передаем ему функцию onNext
  const contentWithProps = React.isValidElement(slide.content) 
    ? React.cloneElement(slide.content, { onNext }) 
    : slide.content;

  return (
    <div className={cn(
      "flex-1 flex flex-col items-center justify-center px-4 py-12", 
      "transition-all duration-500"
    )}>
      <div className="max-w-3xl w-full h-full flex flex-col items-center justify-center">
        {slide.subtitle && (
          <p className="text-red-400/70 text-base mb-2">{slide.subtitle}</p>
        )}
        
        <div className="text-white min-h-[300px] w-full flex flex-col items-center justify-center">
          {contentWithProps}
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
