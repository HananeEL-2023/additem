import { prettyDOM } from "@testing-library/react";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  const [result, setResult] = useState("");

  const handleAddingItem = (e) => {
    e.preventDefault();
    setListItem([...listItem, item]);
  };

  const handleChange = (e) => {
    setItemSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = listItem.includes(itemSearch);
    console.log({ listItem, itemSearch });
    if (search) {
      setResult("Yes");
    } else {
      setResult("No");
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={handleAddingItem}>Add item</button>
      <h1>List of items : </h1>
      <ul>
        {listItem.map((item, itemkey) => (
          <li key={itemkey}>{item}</li>
        ))}
      </ul>

      <input type="text" onChange={handleChange} value={itemSearch} />
      <button onClick={handleSearch}>Search</button>
      <h1>{result}</h1>
    </>
  );
}
