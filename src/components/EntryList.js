import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry } from "../actions";

export default function EntryList({ editEntry, formdata }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const entries = data?.map((list, index) => {
    const disabledEditbtn = formdata.id === list.id;
    const fLCapital = list.expense.replace(/(^|\s)\S/g, (letter) =>
      letter.toUpperCase()
    );
    return (
      <div key={list.id} className='list mb-2 text-center'>
        <span className='pe-2'>{fLCapital}</span>
        <span className='pe-2 fw-bold'>₹{list.amount || ""}</span>
        {/* <button
          className='btn btn-primary me-2 custom-btn'
          id={list.id}
          onClick={() => editEntry(list.id, index)}
        >
          Edit
        </button> */}
        <i
          className='far fa-edit btn btn-primary me-2 custom-btn'
          id={list.id}
          onClick={() => editEntry(list.id, index)}
        ></i>
        {/* <button
          className='btn btn-danger me-2 custom-btn'
          onClick={() => dispatch(deleteEntry(list.id))}
          disabled={disabledEditbtn}
        >
          Delete
        </button> */}

        <i
          className='btn btn-danger me-2 custom-btn fas fa-trash-alt'
          onClick={() => dispatch(deleteEntry(list.id))}
          disabled={disabledEditbtn}
        ></i>
      </div>
    );
  });
  return <section className='mt-2'>{entries}</section>;
}
