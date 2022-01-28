import React, { Fragment, useState } from "react";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll } from "./actions";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formdata, setFormdata] = useState({
    expense: "",
    amount: "",
    id: uuidv4(),
  });
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const editEntry = (id, index) => {
    const uniqueItem = data.filter((unique) => unique.id === id);
    const objuniqueItem = Object.assign({}, ...uniqueItem);
    setFormdata(objuniqueItem);
    setEdit(true);
  };
  const totalAmount = Math.floor(
    data.reduce(function (accumulator, item) {
      return accumulator + parseInt(item.amount);
    }, 0)
  );
  return (
    <div className='top-div'>
      <section className='p-3 card'>
        <h3 className='text-center'>Expense Tracker</h3>
        <AddEntry
          formdata={formdata}
          setFormdata={setFormdata}
          edit={edit}
          setEdit={setEdit}
        />
        {data.length > 0 ? (
          <EntryList
            editEntry={editEntry}
            setEdit={setEdit}
            edit={edit}
            formdata={formdata}
          />
        ) : (
          <h3 className='text-center mt-3'>No records to show</h3>
        )}
        {data.length > 0 && (
          <>
            <h4 className='text-center'>Total: {totalAmount}</h4>
            <button
              className='btn btn-danger'
              onClick={() => dispatch(deleteAll())}
              disabled={edit}
            >
              Delete All
            </button>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
