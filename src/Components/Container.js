import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../style.css'

const getLocalItems = () =>{
    let list = localStorage.getItem('lists')
    // console.log(list);

    if(list) return JSON.parse(localStorage.getItem('lists'));
    else return [];  
}

const Container = ({authorize}) => {
    const [val,setVal] = useState("");
    const[arr,setArr] = useState(getLocalItems());    
    const insertItem = () => {
        let newList = [...arr,val];
        setArr(newList);
    }

    const deleteItem = (index) =>{
        let alteredList = arr.filter((elem,id) =>{
            return id != index;
        });
        setArr(alteredList);
    }

    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(arr))
    },[arr]);
    
    if(!authorize) return <Navigate to="/" />
    return (
            <>
                <div className="main_div">
                    <div className="center_div">
                      <div className="img_styl">
                          <img src="images/1.png" alt="todo"  />
                      </div>
                        <label htmlFor="text">
                            <input type="text" name="text" id="text" onChange={(e) =>setVal(e.target.value)}  />
                                <img src="images/plus.png" alt="plus"  onClick={insertItem}/>
                        </label>
                        <div className="items">
                        {
                            arr.map((val,index) =>{
                                return (
                                    <>
                                    <ol key={index}>
                                      <li>{val}  
                                          <img src="images/delete.png" alt="delete" onClick={()=> deleteItem(index)}/>
                                       </li>
                                  </ol>
                                    </>
                                )
                            })
                        }
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Container