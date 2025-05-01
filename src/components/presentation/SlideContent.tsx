
import React from "react";
import Icon from "@/components/ui/icon";
import { motion } from "@/components/ui/motion";
import { SlideProps } from "./types";

interface SlideContentProps {
  slide: SlideProps;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
}

const SlideContent: React.FC<SlideContentProps> = ({ 
  slide, 
  currentIndex, 
  totalSlides,
  onNext
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 h-full">
      <div className="max-w-5xl mx-auto w-full h-full flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-2 bg-red-950/30 px-4 py-2 rounded-full">
            <Icon name={slide.icon || "Info"} size={20} className="text-red-500" />
            <span className="text-red-400">Слайд {currentIndex + 1} из {totalSlides}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{slide.title}</h2>
          {slide.subtitle && (
            <p className="text-xl text-red-300">{slide.subtitle}</p>
          )}
        </div>
        
        <motion.div className="mt-4 flex-1 w-full flex items-center justify-center">
          {slide.content}
        </motion.div>
      </div>
    </div>
  );
};

export default SlideContent;
