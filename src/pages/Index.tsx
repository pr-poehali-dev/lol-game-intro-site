
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "@/components/ui/motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Навигация */}
      <nav className="bg-blue-950/80 backdrop-blur-sm border-b border-blue-800/50 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-amber-400">League of Legends</h1>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-amber-400 transition-colors">Об игре</a>
          <a href="#mechanics" className="hover:text-amber-400 transition-colors">Механики</a>
          <a href="#comparison" className="hover:text-amber-400 transition-colors">Сравнение с Fortnite</a>
        </div>
      </nav>

      {/* Герой-секция */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-amber-400">Погрузитесь в мир League of Legends</h1>
          <p className="text-xl mb-8">Стратегия, команда и мастерство — всё, что нужно для победы</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-md">
            Начать путешествие
          </Button>
        </div>
      </div>

      {/* Об игре */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-400">Что такое League of Legends?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">Стратегическая глубина</CardTitle>
              </CardHeader>
              <CardContent>
                <p>В отличие от чистых шутеров, LoL сочетает в себе элементы стратегии, тактики и командной работы на совершенно новом уровне.</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">160+ уникальных чемпионов</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Каждый чемпион имеет уникальные способности и стиль игры, позволяя найти персонажа под любой игровой стиль.</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">Глобальное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Миллионы игроков, профессиональные турниры с огромными призовыми фондами и развитая киберспортивная сцена.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Игровые механики */}
      <section id="mechanics" className="py-20 px-6 bg-blue-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-400">Основные механики</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">Роли и линии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">В отличие от Fortnite, где все игроки выполняют одинаковую роль, в LoL каждый член команды занимает стратегическую позицию:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Топ — одиночная линия для дуэлей</li>
                  <li>Лес — мобильный игрок, атакующий из засады</li>
                  <li>Мид — центральная линия для быстрого доступа</li>
                  <li>Адк — основной источник урона</li>
                  <li>Саппорт — защищает команду и обеспечивает обзор</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">Экономика и развитие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">В течение матча ваш чемпион становится сильнее несколькими способами:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Добивая миньонов для получения золота</li>
                  <li>Улучшая способности по мере роста уровня</li>
                  <li>Покупая предметы, усиливающие характеристики</li>
                  <li>Получая контроль над нейтральными целями</li>
                  <li>Участвуя в командных боях для получения преимущества</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Сравнение с Fortnite */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-400">Почему League of Legends после Fortnite?</h2>
          
          <div className="relative overflow-hidden bg-blue-900/40 backdrop-blur-sm rounded-xl p-8 mb-12 border border-blue-700">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">От случайности к мастерству</h3>
              <p className="text-lg">
                Fortnite часто полагается на случайный лут и позиционирование зоны. 
                В League of Legends твоё мастерство, знание игры и командная работа —
                главные факторы победы. Здесь каждая победа заслужена, а не получена случайно.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">В Fortnite</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>• Одна игровая роль для всех игроков</p>
                <p>• Случайное получение оружия и предметов</p>
                <p>• Матчи до 100 игроков каждый сам за себя</p>
                <p>• Менее структурированная киберспортивная сцена</p>
                <p>• Требуется быстрая реакция и меткость</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/40 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-400">В League of Legends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>• 5 уникальных ролей с разными задачами</p>
                <p>• Стратегический выбор предметов и развития</p>
                <p>• Командные матчи 5v5 с чётким распределением обязанностей</p>
                <p>• Развитая киберспортивная сцена с миллионными призовыми</p>
                <p>• Требуется стратегическое мышление и командная работа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-900 to-blue-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-amber-400">Готов стать Призывателем?</h2>
          <p className="text-xl mb-8">
            Fortnite научил тебя быстрой реакции. Теперь пора применить эти навыки в мире, 
            где стратегия и командная работа определяют победителей.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-md">
            Скачать бесплатно
          </Button>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-blue-950 text-center py-8 text-blue-400 text-sm">
        <p>League of Legends и все связанные с ней материалы являются собственностью Riot Games, Inc.</p>
        <p className="mt-2">Этот сайт создан в ознакомительных целях и не аффилирован с Riot Games.</p>
      </footer>
    </div>
  );
};

export default Index;
