import { useState } from "react";

interface Props {
  items: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ items, onDelete }: Props) => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredItems =
    categoryFilter === "All"
      ? items
      : items.filter((item) => categoryFilter === item.category);

  const total = filteredItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="mt-5">
      <select
        id="categoryFilter"
        className="form-select mb-3"
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="All">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      {filteredItems.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>€{item.amount}.00</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>€{total}.00</th>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ExpenseList;
