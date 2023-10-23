import React from "react";
import "./App.css";
import RatesList from "./Components/RatesList";

function App() {
  const rates = [
    {
      id: 1,
      ratename: "Стартовый",
      profits: [
        "Безлимитный ВПН",
        "Работает на всех устройствах",
        "1 подключение одновременно",
      ],
      price: "3 дня бесплатно",
    },
    {
      id: 2,
      ratename: "Базовый",
      profits: [
        "Безлимитный ВПН",
        "Работает на всех устройствах",
        "3 подключения одновременно",
      ],
      price: "299р/месяц",
    },
    {
      id: 3,
      ratename: "Спецпредложение (скидка 70%)",
      profits: [
        "Безлимитный ВПН",
        "Работает на всех устройствах",
        "10 подключений одновременно",
      ],
      price: "1999р/год",
    },
  ];

  return (
    <div className="wrapper">
      <RatesList rates={rates} />
    </div>
  );
}

export default App;
