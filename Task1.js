import React, { useState } from "react";

function Task1() {
  const [tasklist, settasklist] = useState([]);
  const handleadd = () => {
    settasklist([...tasklist, ""]);
  };
  const [finallist,setfinallist]= useState([])
  const handleremove= (i)=>{
    console.log(i);
    tasklist.splice(i,1)
    settasklist([...tasklist])
  };
  const handlelistchange = (e,i)=>{
    tasklist[i]=e.target.value
    settasklist([...tasklist])

  }
  const handlesubmit =() =>{
    setfinallist(tasklist)
    settasklist([]);
  }
  return (
    <div className="container w-25">
      <button
        className="btn btn-sm btn-outline-primary my-3"
        onClick={() => handleadd()}
      >
        Add +
      </button>
      {
        finallist.length>0 ? <div>
            <ul>
                {
                    finallist.map((e)=>{
                        return <li>{e}</li>
                    })
                }
            </ul>
        </div> :     <div className=" my-4">
        {tasklist.map((list,i) => {
          return (
            <div className="d-flex my-1 ">
              <input type="email" class="form-control mx-1" value={list} onChange={(e)=>handlelistchange(e,i)}/>
              <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={()=>handleremove(i)}>
                X
              </button>
            </div>
          );
        })}
      </div>
      }
  
      {
        tasklist.length!==0 && <button className="btn btn-sm btn-outline-primary my-3" onClick={()=>handlesubmit()}>Submit</button>
      }
      
    </div>
  );
}

export default Task1;
