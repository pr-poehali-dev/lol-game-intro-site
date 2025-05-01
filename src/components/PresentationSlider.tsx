
import { useState, useEffect } from "react";
import { motion } from "@/components/ui/motion";
import SlideContent from "./presentation/SlideContent";
import SlideControls from "./presentation/SlideControls";
import Header from "./presentation/Header";
import { slidesData } from "./presentation/slidesData";

const PresentationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (index: number) => {
    if (index < 0) {
      index = slidesData.length - 1;
    } else if (index >= slidesData.length) {
      index = 0;
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleSlideChange(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        handleSlideChange(currentSlide - 1);
      }
    };
    
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [currentSlide]);

  return (
    <div 
      className={`min-h-screen flex flex-col ${slidesData[currentSlide].background} transition-colors duration-700`}
    >
      <div className="flex-1 flex flex-col">
        <Header 
          currentSlide={currentSlide} 
          totalSlides={slidesData.length} 
          onSlideChange={handleSlideChange} 
        />
        
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <SlideContent 
            slide={slidesData[currentSlide]} 
            currentIndex={currentSlide} 
            totalSlides={slidesData.length}
            onNext={() => handleSlideChange(currentSlide + 1)}
          />
        </div>
      </div>
      
      <SlideControls 
        currentSlide={currentSlide} 
        totalSlides={slidesData.length} 
        onPrevious={() => handleSlideChange(currentSlide - 1)} 
        onNext={() => handleSlideChange(currentSlide + 1)} 
      />
    </div>
  );
};

export default PresentationSlider;
