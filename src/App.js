import Card from "./components/Card";
import React from "react";

export default function App() {
  const fruits = [
    {
      id: "122",
      name: "🍌 Banana",
      color: "yellow",
    },

    {
      id: "123",
      name: "🍇 Grape",
      color: "red",
    },

    {
      id: "124",
      name: "🍉 Watermelon",
      color: "green",
    },

    {
      id: "125",
      name: "🍓 Strawberry",
      color: "red",
    },

    {
      id: "126",
      name: "🥝 Kiwi",
      color: "brown",
    }
  ];

  return (

    <ul className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card
              name={fruit.name}
              color={fruit.color}
            />
          </li>
        );
      }
      )}
    </ul>
  );
}


