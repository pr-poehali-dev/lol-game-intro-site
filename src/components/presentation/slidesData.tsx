
import React from "react";
import { SlideProps } from "./types";
import IntroSlide from "./slides/Intro";
import AboutLolSlide from "./slides/AboutLol";
import MechanicsSlide from "./slides/Mechanics";
import ComparisonSlide from "./slides/Comparison";
import CallToActionSlide from "./slides/CallToAction";

// Слайды презентации
export const slidesData: SlideProps[] = [
  {
    title: "Погрузись в мир League of Legends",
    subtitle: "От шутера к стратегии",
    content: <IntroSlide />,
    background: "bg-gradient-to-b from-black to-red-950",
    icon: "GameController"
  },
  {
    title: "Что такое League of Legends?",
    content: <AboutLolSlide />,
    background: "bg-gradient-to-br from-black via-red-950/50 to-black",
    icon: "Info"
  },
  {
    title: "Основные механики",
    content: <MechanicsSlide />,
    background: "bg-gradient-to-tl from-black via-red-950/30 to-black",
    icon: "Cog"
  },
  {
    title: "Fortnite vs League of Legends",
    content: <ComparisonSlide />,
    background: "bg-gradient-to-br from-black via-red-950/40 to-black",
    icon: "ArrowRightLeft"
  },


  {
    title: "Готов расстворить заёб с Русами?",
    content: <CallToActionSlide />,
    background: "bg-gradient-to-br from-black via-red-950/40 to-black",
    icon: "Download"
  }


];
