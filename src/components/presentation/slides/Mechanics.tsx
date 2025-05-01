
import React from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MechanicsSlide: React.FC = () => {
  const roles = [
    { icon: "Shield", name: "Топ", description: "одиночная линия для дуэлей" },
    { icon: "Trees", name: "Лес", description: "мобильный игрок, атакующий из засады" },
    { icon: "Zap", name: "Мид", description: "центральная линия для быстрого доступа" },
    { icon: "Target", name: "АДК", description: "основной источник урона" },
    { icon: "Heart", name: "Саппорт", description: "защищает команду и обеспечивает обзор" }
  ];
  
  const economy = [
    { icon: "Coins", name: "Золото", description: "добивая миньонов и врагов" },
    { icon: "ArrowUp", name: "Уровни", description: "улучшая способности по мере роста" },
    { icon: "ShoppingBag", name: "Предметы", description: "покупая усиления для чемпиона" },
    { icon: "Crosshair", name: "Объекты", description: "контролируя нейтральные цели" },
    { icon: "Swords", name: "Командные бои", description: "получая преимущество через взаимодействие" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      <RolesCard roles={roles} />
      <EconomyCard economy={economy} />
    </div>
  );
};

interface ListItemProps {
  icon: string;
  name: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, name, description }) => {
  return (
    <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
      <Icon name={icon} size={24} className="text-red-400" />
      <div>
        <span className="font-bold">{name}</span> — {description}
      </div>
    </li>
  );
};

interface RolesCardProps {
  roles: ListItemProps[];
}

const RolesCard: React.FC<RolesCardProps> = ({ roles }) => {
  return (
    <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6">
      <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-2">
        <Icon name="MapPin" size={24} />
        Роли и линии
      </h3>
      <p className="mb-4">В LoL каждый член команды занимает стратегическую позицию:</p>
      <ul className="space-y-3">
        {roles.map((role, index) => (
          <ListItem key={index} icon={role.icon} name={role.name} description={role.description} />
        ))}
      </ul>
    </Card>
  );
};

interface EconomyCardProps {
  economy: ListItemProps[];
}

const EconomyCard: React.FC<EconomyCardProps> = ({ economy }) => {
  return (
    <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6">
      <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-2">
        <Icon name="TrendingUp" size={24} />
        Экономика и развитие
      </h3>
      <p className="mb-4">В течение матча ваш чемпион становится сильнее несколькими способами:</p>
      <ul className="space-y-3">
        {economy.map((item, index) => (
          <ListItem key={index} icon={item.icon} name={item.name} description={item.description} />
        ))}
      </ul>
    </Card>
  );
};

export default MechanicsSlide;
