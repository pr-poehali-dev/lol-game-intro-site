
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "@/components/ui/motion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-950 text-white">
      {/* Навигация */}
      <nav className="bg-black/80 backdrop-blur-sm border-b border-red-900/50 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-red-600">League of Legends</h1>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Icon name="Info" size={18} className="text-red-500" />
            Об игре
          </a>
          <a href="#mechanics" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Icon name="Gamepad2" size={18} className="text-red-500" />
            Механики
          </a>
          <a href="#comparison" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Icon name="BarChart3" size={18} className="text-red-500" />
            Сравнение с Fortnite
          </a>
        </div>
      </nav>

      {/* Герой-секция */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-red-600">Погрузитесь в мир League of Legends</h1>
          <p className="text-xl mb-8">Стратегия, команда и мастерство — всё, что нужно для победы</p>
          <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2">
            <Icon name="Sword" size={24} />
            Начать путешествие
          </Button>
        </div>
      </div>

      {/* Об игре */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3">
            <Icon name="Trophy" size={32} className="text-red-500" />
            Что такое League of Legends?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="BookOpen" size={20} />
                  Стратегическая глубина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>В отличие от чистых шутеров, LoL сочетает в себе элементы стратегии, тактики и командной работы на совершенно новом уровне.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  160+ уникальных чемпионов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Каждый чемпион имеет уникальные способности и стиль игры, позволяя найти персонажа под любой игровой стиль.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="Globe" size={20} />
                  Глобальное сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Миллионы игроков, профессиональные турниры с огромными призовыми фондами и развитая киберспортивная сцена.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Игровые механики */}
      <section id="mechanics" className="py-20 px-6 bg-red-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3">
            <Icon name="Cog" size={32} className="text-red-500" />
            Основные механики
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Роли и линии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">В отличие от Fortnite, где все игроки выполняют одинаковую роль, в LoL каждый член команды занимает стратегическую позицию:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Shield" size={16} className="text-red-400" />
                    Топ — одиночная линия для дуэлей
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Trees" size={16} className="text-red-400" />
                    Лес — мобильный игрок, атакующий из засады
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-red-400" />
                    Мид — центральная линия для быстрого доступа
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Target" size={16} className="text-red-400" />
                    Адк — основной источник урона
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Heart" size={16} className="text-red-400" />
                    Саппорт — защищает команду и обеспечивает обзор
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Экономика и развитие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">В течение матча ваш чемпион становится сильнее несколькими способами:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Coins" size={16} className="text-red-400" />
                    Добивая миньонов для получения золота
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="ArrowUp" size={16} className="text-red-400" />
                    Улучшая способности по мере роста уровня
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="ShoppingBag" size={16} className="text-red-400" />
                    Покупая предметы, усиливающие характеристики
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Crosshair" size={16} className="text-red-400" />
                    Получая контроль над нейтральными целями
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Swords" size={16} className="text-red-400" />
                    Участвуя в командных боях для получения преимущества
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Сравнение с Fortnite */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3">
            <Icon name="ArrowRightLeft" size={32} className="text-red-500" />
            Почему League of Legends после Fortnite?
          </h2>
          
          <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12 border border-red-900">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
                <Icon name="Trophy" size={24} />
                От случайности к мастерству
              </h3>
              <p className="text-lg">
                Fortnite часто полагается на случайный лут и позиционирование зоны. 
                В League of Legends твоё мастерство, знание игры и командная работа —
                главные факторы победы. Здесь каждая победа заслужена, а не получена случайно.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="Hammer" size={20} />
                  В Fortnite
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center gap-2">
                  <Icon name="User" size={16} className="text-red-400" />
                  Одна игровая роль для всех игроков
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Dice" size={16} className="text-red-400" />
                  Случайное получение оружия и предметов
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-red-400" />
                  Матчи до 100 игроков каждый сам за себя
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="LayoutGrid" size={16} className="text-red-400" />
                  Менее структурированная киберспортивная сцена
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MousePointerClick" size={16} className="text-red-400" />
                  Требуется быстрая реакция и меткость
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-900 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <Icon name="Crown" size={20} />
                  В League of Legends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center gap-2">
                  <Icon name="UsersRound" size={16} className="text-red-400" />
                  5 уникальных ролей с разными задачами
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="BookMarked" size={16} className="text-red-400" />
                  Стратегический выбор предметов и развития
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="UserSquare2" size={16} className="text-red-400" />
                  Командные матчи 5v5 с чётким распределением обязанностей
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Medal" size={16} className="text-red-400" />
                  Развитая киберспортивная сцена с миллионными призовыми
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Brain" size={16} className="text-red-400" />
                  Требуется стратегическое мышление и командная работа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-red-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-red-600 flex items-center justify-center gap-3">
            <Icon name="FlameKindling" size={32} className="text-red-500" />
            Готов стать Призывателем?
          </h2>
          <p className="text-xl mb-8">
            Fortnite научил тебя быстрой реакции. Теперь пора применить эти навыки в мире, 
            где стратегия и командная работа определяют победителей.
          </p>
          <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2">
            <Icon name="Download" size={24} />
            Скачать бесплатно
          </Button>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-black text-center py-8 text-gray-400 text-sm">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Facebook" size={20} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Twitter" size={20} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Instagram" size={20} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Youtube" size={20} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Icon name="Twitch" size={20} />
          </a>
        </div>
        <p>League of Legends и все связанные с ней материалы являются собственностью Riot Games, Inc.</p>
        <p className="mt-2">Этот сайт создан в ознакомительных целях и не аффилирован с Riot Games.</p>
      </footer>
    </div>
  );
};

export default Index;
