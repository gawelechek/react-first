import "./App.css";
// если мы экспортируем каждую функцию отдельно, в index.js мы по сути достаем из объекта ключи, типа App(весь файл).AppFoo(функция)
// но мы можем воспользоваться деструктуризацию и прописать import { AppFoo } from './App'
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
export const AppFoo = () => {
  return (
    <div>
      <Header />
      {/* СОЗДАЕМ ОТДЕЛЬНО КОМПОНЕНТЫ В ПАПКЕ COMPONENTS (СОЗДАЛИ HEADER), это называется декомпозиция*/}
      {/* доп инфа в products.jsx и card */}
      {/* SPA - Single Page Application - показ определенных компонентов */}
      {/* жизненные циклы компонентов : инициализация(создание) - mounting(показ) - update(побочный, доп кнопки, которые вызовут изменение компонента) - unmounting(смерт) */}
      <Hero />
     <Products/>
    </div>
  );
};
 