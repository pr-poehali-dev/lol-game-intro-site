
import React from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ComparisonSlide: React.FC = () => {
  const fortniteFeatures = [
    { icon: "User", text: "Одна игровая роль для всех игроков" },
    { icon: "Dice", text: "Случайное получение оружия и предметов" },
    { icon: "Users", text: "Матчи до 100 игроков каждый сам за себя" },
    { icon: "LayoutGrid", text: "Менее структурированная киберспортивная сцена" }
  ];

  const lolFeatures = [
    { icon: "UsersRound", text: "5 уникальных ролей с разными задачами" },
    { icon: "BookMarked", text: "Стратегический выбор предметов и развития" },
    { icon: "UserSquare2", text: "Командные матчи 5v5 с распределением ролей" },
    { icon: "Medal", text: "Развитая киберспортивная сцена с миллионными призовыми" }
  ];

  return (
    <div className="mt-6">
      <MasteryCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GameCard 
          title="Fortnite"
          icon="Hammer"
          features={fortniteFeatures}
          gradientFrom="red-900/80"
          gradientTo="red-950"
        />
        <GameCard 
          title="League of Legends"
          icon="Crown"
          features={lolFeatures}
          gradientFrom="red-700/80"
          gradientTo="red-950"
        />
      </div>
    </div>
  );
};

const MasteryCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8 border border-red-900">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
          <Icon name="Trophy" size={24} />
          От случайности к мастерству
        </h3>
        <p className="text-lg">
          Fortnite часто полагается на случайный лут и позиционирование зоны. 
          В League of Legends твоё мастерство, знание игры и командная работа —
          главные факторы победы. Здесь каждая победа заслужена.
        </p>
      </div>
    </div>
  );
};

interface GameCardProps {
  title: string;
  icon: string;
  features: { icon: string; text: string }[];
  gradientFrom: string;
  gradientTo: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, icon, features, gradientFrom, gradientTo }) => {
  return (
    <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-bl-lg`}>
        <Icon name={icon} size={28} className="text-red-100" />
      </div>
      <h3 className="text-xl font-bold mb-6 text-red-400">{title}</h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Icon name={feature.icon} size={20} className="text-red-400" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ComparisonSlide;
