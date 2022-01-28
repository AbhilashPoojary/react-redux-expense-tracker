import React from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions";
import { v4 as uuidv4 } from "uuid";

export default function AddEntry({
  editedItem,
  formdata,
  setFormdata,
  edit,
  setEdit,
}) {
  const changeData = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const addEntries = (e) => {
    e.preventDefault();
    if (formdata.expense === "" || formdata.amount === "") {
      alert("please enter the details in the form");
      return;
    }
    dispatch(addEntry(formdata));
    setFormdata({
      expense: "",
      amount: "",
      id: uuidv4(),
    });
    setEdit(false);
  };
  return (
    <form onSubmit={addEntries}>
      <div className='input-group '>
        <input
          className='form-control me-2'
          type='text'
          name='expense'
          value={formdata.expense}
          onChange={(e) => changeData(e)}
        />

        <input
          className='form-control me-2'
          type='number'
          name='amount'
          value={formdata.amount}
          onChange={(e) => changeData(e)}
        />

        <button type='submit' className='btn btn-success'>
          {edit ? "UPDATE" : "ADD"}
        </button>
      </div>
    </form>
  );
}
