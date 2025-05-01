
import React from "react";
import Icon from "@/components/ui/icon";
import SlideNavigation from "./SlideNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentSlide, 
  totalSlides, 
  onSlideChange 
}) => {
  const isMobile = useIsMobile();

  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Icon name="Sword" size={24} className="text-red-600" />
        <h1 className="text-2xl font-bold text-red-600">League of Legends</h1>
      </div>
      
      {!isMobile && (
        <SlideNavigation 
          slides={totalSlides} 
          currentSlide={currentSlide} 
          onSlideChange={onSlideChange} 
        />
      )}
    </header>
  );
};

export default Header;
