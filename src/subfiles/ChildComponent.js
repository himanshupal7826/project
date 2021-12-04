import React, {Component} from "react";
import './ChildComponent.css' ;
function ChildComponent({ B,C}) {
    return (
       
        <div  className="table"> 
        <div className="table1">
            <tr>
                 <td><b>Currency</b></td>
                 
                 
             </tr>
         
           
            {C.map(c => (
            //    <tr>
            //      <tr>{c}</td>
            //      {/* <td>{B}</td> */}
                 
            //  </tr>
            <li>{c}</li>
             
            ))
           }
           </div>

<div>
           <tr>
                 <td><b>Value</b></td>
                 
                 
             </tr>
         
           
            {B.map(b => (
               
            <li>{b}</li>
            ))
           }
        </div>
        </div>
    );
}
export default ChildComponent