import React, { useState } from "react";

function Hooks() {
  const [amount, setamount] = useState(0);
  const [show, setshow] = useState(false)
  return (
    <>
      <div className="container mt-5">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => setamount(amount - 5)}
          disabled={amount <= 0}
        >
          -
        </button>
        <span className="mx-3">{amount}</span>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => setamount(amount + 5)}
          disabled={amount >= 50}
        >
          +
        </button>
      </div>
      <div className="container mt-5">
        <button className={show? "btn btn-sm btn-danger" : "btn btn-sm btn-primary"} onClick={()=>setshow(!show)}>{show? "Hide" : "show"}</button>
        {
          show ?  <p className="m-3">
          Bootstrap utilizes Sass for a modular and customizable architecture.
          Import only the components you need, enable global options like
          gradients and shadows
        </p> :""
        }
       
      </div>
    </>
  );
}

export default Hooks;
