import React from "react";
import {useState,useEffect} from "react";
import ChildComponent from "./ChildComponent";
import './exchange.css';
 

function Exchange(){
    
    // const [curr,setCurr] = useState([]);
    const [c,setC] = useState([]);
    const [b,setB] = useState([]);

      
    useEffect(() => {
        const getCountriesData = async () => {
          const aurl =`https://v1.nocodeapi.com/pal_himanshu/cx/svHtUOOcKGpkWSvi/rates`;
           
        
         await fetch(aurl)
             .then((response) =>
             response.json())
             .then((data) => {
                
             
            //  setCurr(data.rates);
              
             const c=(Object.keys(data.rates));
             setC(c);
             const b=(Object.values(data.rates));
             setB(b);

             });
            // console.log(data.rates);
        };
        getCountriesData();
      }, []);

       
       
      return (
<div> <h3>Exchange rates over USD</h3>
        <div className="table">
           
          {
             
            // curr.map((cuu)=>{
                
            //    <li>{cuu}</li>
            // }

            // )
            //  this.props.curr.map((item, i) => {
            //     return <li key={i}>{item}
            //      </li>
            //   })
             
            <ChildComponent   B={b} C={c}/>

          }
            
          
             
             
         </div>
         </div>
    );
        }
    

export default Exchange;