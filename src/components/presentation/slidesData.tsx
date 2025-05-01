
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { SlideProps } from "./types";

export const slidesData: SlideProps[] = [
  {
    title: "Погрузись в мир League of Legends",
    subtitle: "От шутера к стратегии",
    content: (
      <div className="flex flex-col items-center">
        <img 
          src="https://cdn.poehali.dev/files/97f40d06-851e-4ce0-943f-a2b11b570415.png" 
          alt="League of Legends vs Fortnite" 
          className="rounded-lg mb-8 max-w-md shadow-lg shadow-red-900/30" 
        />
        <p className="text-xl max-w-xl text-center">
          После Fortnite время открыть новый уровень игрового опыта, 
          где командная работа и стратегия определяют победителей
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="bg-red-700 hover:bg-red-800 px-6 py-6 text-lg flex items-center gap-2">
            <Icon name="ArrowRight" size={20} />
            Начать путешествие
          </Button>
        </div>
      </div>
    ),
    background: "bg-gradient-to-b from-black to-red-950",
    icon: "GameController"
  },
  {
    title: "Что такое League of Legends?",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 transform transition-all hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center mb-4">
              <Icon name="BookOpen" size={32} className="text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-red-400">Стратегическая глубина</h3>
            <p>В отличие от чистых шутеров, LoL сочетает в себе элементы стратегии, тактики и командной работы.</p>
          </div>
        </Card>
        
        <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 transform transition-all hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center mb-4">
              <Icon name="Users" size={32} className="text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-red-400">160+ уникальных чемпионов</h3>
            <p>Каждый чемпион имеет уникальные способности и стиль игры, позволяя найти персонажа под любой стиль.</p>
          </div>
        </Card>
        <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 transform transition-all hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center mb-4">
              <Icon name="Smile" size={32} className="text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-red-400">Растворение заёба</h3>
            <p>Игры идут просто, быстро и весело, позволяя отвлечься от повседневных проблем и получить массу удовольствия.</p>
          </div>
        </Card>
      </div>
    ),
    background: "bg-gradient-to-br from-black via-red-950/50 to-black",
    icon: "Info"
  },
  {
    title: "Основные механики",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6">
          <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Icon name="MapPin" size={24} />
            Роли и линии
          </h3>
          <p className="mb-4">В LoL каждый член команды занимает стратегическую позицию:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Shield" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Топ</span> — одиночная линия для дуэлей
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Trees" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Лес</span> — мобильный игрок, атакующий из засады
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Zap" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Мид</span> — центральная линия для быстрого доступа
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Target" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">АДК</span> — основной источник урона
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Heart" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Саппорт</span> — защищает команду и обеспечивает обзор
              </div>
            </li>
          </ul>
        </Card>

        <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6">
          <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Icon name="TrendingUp" size={24} />
            Экономика и развитие
          </h3>
          <p className="mb-4">В течение матча ваш чемпион становится сильнее несколькими способами:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Coins" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Золото</span> — добивая миньонов и врагов
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="ArrowUp" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Уровни</span> — улучшая способности по мере роста
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="ShoppingBag" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Предметы</span> — покупая усиления для чемпиона
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Crosshair" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Объекты</span> — контролируя нейтральные цели
              </div>
            </li>
            <li className="flex items-center gap-3 bg-red-950/20 p-3 rounded-md transition-all hover:bg-red-950/40">
              <Icon name="Swords" size={24} className="text-red-400" />
              <div>
                <span className="font-bold">Командные бои</span> — получая преимущество через взаимодействие
              </div>
            </li>
          </ul>
        </Card>
      </div>
    ),
    background: "bg-gradient-to-tl from-black via-red-950/30 to-black",
    icon: "Cog"
  },
  {
    title: "Fortnite vs League of Legends",
    content: (
      <div className="mt-6">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-900/80 to-red-950 rounded-bl-lg">
              <Icon name="Hammer" size={28} className="text-red-100" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-red-400">Fortnite</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Icon name="User" size={20} className="text-red-400" />
                <span>Одна игровая роль для всех игроков</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Dice" size={20} className="text-red-400" />
                <span>Случайное получение оружия и предметов</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Users" size={20} className="text-red-400" />
                <span>Матчи до 100 игроков каждый сам за себя</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="LayoutGrid" size={20} className="text-red-400" />
                <span>Менее структурированная киберспортивная сцена</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-black/40 border-red-900 backdrop-blur-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-700/80 to-red-950 rounded-bl-lg">
              <Icon name="Crown" size={28} className="text-red-100" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-red-400">League of Legends</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Icon name="UsersRound" size={20} className="text-red-400" />
                <span>5 уникальных ролей с разными задачами</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="BookMarked" size={20} className="text-red-400" />
                <span>Стратегический выбор предметов и развития</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="UserSquare2" size={20} className="text-red-400" />
                <span>Командные матчи 5v5 с распределением ролей</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Medal" size={20} className="text-red-400" />
                <span>Развитая киберспортивная сцена с миллионными призовыми</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    ),
    background: "bg-gradient-to-br from-black via-red-950/40 to-black",
    icon: "ArrowRightLeft"
  },
  {
    title: "Готов стать Призывателем?",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-red-900/30 flex items-center justify-center mb-6">
          <Icon name="FlameKindling" size={48} className="text-red-500" />
        </div>
        <p className="text-xl max-w-xl mb-8">
          Fortnite научил тебя быстрой реакции. Теперь пора применить эти навыки в мире, 
          где стратегия и командная работа определяют победителей.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2">
            <Icon name="Download" size={24} />
            Скачать бесплатно
          </Button>
          <Button variant="outline" className="border-red-700 text-red-400 hover:bg-red-950/30 px-8 py-6 text-lg rounded-md flex items-center gap-2">
            <Icon name="Youtube" size={24} />
            Смотреть трейлер
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Facebook" size={24} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Twitter" size={24} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Instagram" size={24} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Youtube" size={24} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Twitch" size={24} />
          </a>
        </div>
      </div>
    ),
    background: "bg-gradient-to-b from-black to-red-950",
    icon: "Download"
  }
];
