import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mods = [
    {
      id: 1,
      title: "Fendt 1000 Vario",
      description:
        "Мощный трактор с реалистичной физикой и детализированной кабиной",
      category: "Техника",
      rating: 4.8,
      downloads: 15420,
      image: "/img/6b59c699-fd6f-4d15-b0e2-8c93c3f37967.jpg",
      compatibility: "FS25",
    },
    {
      id: 2,
      title: "Русские поля",
      description: "Большая карта с полями и деревнями в российском стиле",
      category: "Карты",
      rating: 4.6,
      downloads: 8930,
      image: "/img/34893ce9-af86-4728-ad87-faf4670a1e8d.jpg",
      compatibility: "FS25",
    },
    {
      id: 3,
      title: "Pack комбайнов",
      description: "Набор из 5 реалистичных комбайнов с различными жатками",
      category: "Техника",
      rating: 4.7,
      downloads: 12150,
      image: "/img/6b59c699-fd6f-4d15-b0e2-8c93c3f37967.jpg",
      compatibility: "FS25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Tractor" size={32} className="text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">FS2025 Моды</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Моды техники
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Моды карт
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Инструкции
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                О проекте
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Upload" size={16} className="mr-2" />
              Добавить мод
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Лучшие моды для Farming Simulator 2025
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Скачивайте проверенные моды техники и карт с рейтингами и отзывами
            сообщества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Поиск модов..." className="text-black" />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              <Icon name="Search" size={16} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <h3 className="text-lg font-semibold text-gray-900">Фильтры:</h3>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="техника">Техника</SelectItem>
                <SelectItem value="карты">Карты</SelectItem>
                <SelectItem value="инструменты">Инструменты</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Совместимость" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fs25">FS25</SelectItem>
                <SelectItem value="fs22">FS22</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Рейтинг" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 звезд</SelectItem>
                <SelectItem value="4">4+ звезд</SelectItem>
                <SelectItem value="3">3+ звезд</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Сбросить
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Mods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Популярные моды
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mods.map((mod) => (
              <Card
                key={mod.id}
                className="hover:shadow-lg transition-shadow duration-300 hover-scale"
              >
                <div className="relative">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    {mod.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{mod.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-sm font-semibold">
                        {mod.rating}
                      </span>
                    </div>
                  </div>
                  <CardDescription>{mod.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Icon name="Download" size={14} />
                        <span>{mod.downloads.toLocaleString()}</span>
                      </div>
                      <Badge variant="outline">{mod.compatibility}</Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                2,547
              </div>
              <div className="text-gray-300">Активных модов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">156K</div>
              <div className="text-gray-300">Скачиваний</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                8,934
              </div>
              <div className="text-gray-300">Пользователей</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Tractor" size={24} className="text-green-600" />
              <span className="text-gray-900 font-semibold">FS2025 Моды</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-green-600 transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
