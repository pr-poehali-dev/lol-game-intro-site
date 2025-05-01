
import React from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutLolSlide: React.FC = () => {
  const features = [
    {
      icon: "BookOpen",
      title: "Стратегическая глубина",
      description: "В отличие от чистых шутеров, LoL сочетает в себе элементы стратегии, тактики и командной работы."
    },
    {
      icon: "Users",
      title: "160+ уникальных чемпионов",
      description: "Каждый чемпион имеет уникальные способности и стиль игры, позволяя найти персонажа под любой стиль."
    },
    {
      icon: "Smile",
      title: "Растворение заёба",
      description: "Игры идут просто, быстро и весело, позволяя отвлечься от повседневных проблем и получить массу удовольствия."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon} 
          title={feature.title} 
          description={feature.description} 
        />
      ))}
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 transform transition-all hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center mb-4">
          <Icon name={icon} size={32} className="text-red-500" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-red-400">{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default AboutLolSlide;
