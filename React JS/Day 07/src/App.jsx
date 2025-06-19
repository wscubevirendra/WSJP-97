import React, { useRef, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const inpRef = useRef();

  function inputHandler() {
    if (inpRef.current.value === "") return alert("Input value is empty");
    setItems([...items, inpRef.current.value]);
    inpRef.current.value = "";
  }

  function removeHandler(index) {
    const newData = items.filter((data, i) => i !== index);
    setItems(newData);
  }

  return (
    <div className='container'>
      <div className="input-group mb-3">
        <input
          ref={inpRef}
          type="text"
          className="form-control"
          placeholder="Add List..."
          aria-label="Add Item"
          aria-describedby="basic-addon1"
        />
        <span onClick={inputHandler} className="input-group-text" id="basic-addon1" style={{ cursor: "pointer" }}>
          Add
        </span>
      </div>
      <Mylist items={items} removeHandler={removeHandler} />
    </div>
  );
}

function Mylist(props) {

  return (
    <ul className="list-group">
      {
        props.items.length === 0 ?
          <h1 className="text-center">List is Empty</h1>
          :
          props.items.map((data, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {data}
              <span
                onClick={() => props.removeHandler(index)}
                style={{ cursor: "pointer" }}
                className="badge text-bg-primary rounded-pill"
              >
                Delete
              </span>
            </li>
          ))


      }
    </ul>
  );
}
