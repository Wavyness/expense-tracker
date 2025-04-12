import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => id !== item.id));
  };

  const addItem = (item: {
    description: string;
    amount: number;
    category: string;
  }) => {
    let newId = items.length + 1;
    for (let i = 1; i < items.length + 1; i++) {
      if (!items.some((item) => item.id === i)) {
        newId = i;
        break;
      }
    }

    const id = newId;
    const newItem = { ...item, id };

    setItems([...items, newItem]);
    console.log(newItem);
  };

  return (
    <div>
      <Form onSubmit={addItem}></Form>
      <ExpensesList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
