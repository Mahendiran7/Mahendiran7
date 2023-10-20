import React from "react";
import { Link, Outlet } from "react-router-dom";

function Number() {
  return (
    <>
      <div className="m-5">
        <Link to={"run"}>
            <button className="btn btn-sm btn-primary">Run</button>

        </Link>
      </div>
      <Outlet/>
    </>
  );
}

export default Number;
