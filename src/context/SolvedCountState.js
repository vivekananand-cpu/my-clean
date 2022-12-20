
import { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllQuetions, getSolvedQuetions, getUserPoints } from "../helper/coreApiCalls";
import { SolvedCountContext } from "./SolvedCountContext";

export const SolvedCountState = (props) =>{
  const [solved,setSolved] = useState([]);
  const [all,setAll] = useState([]);
  const [points,setPoints] = useState(0);
  const {user , token} = isAuthenticated();
  
  const getAll = () =>{
    getAllQuetions()
    .then((data=>{
      if(data.error){
        alert(data.error);
      }else{
        setAll(data);
      }
    }))
  };

  const getSolved = () =>{
    getSolvedQuetions(user._id,token)
    .then((data=>{
      if(data.error){
        alert(data.error);
      }else{
        setSolved(data);
      }
    }))
  };

  const getPoints = () =>{
    getUserPoints(user._id,token)
    .then(data=>{
      if(data.error){
        alert(data.error);
      }else{
        setPoints(data);
       
      }
    })
  }

  useEffect(()=>{
    if(isAuthenticated()){
      getAll();
      getSolved();
      getPoints();
    }
   
  },[]);

    return (
        <SolvedCountContext.Provider value={{solved,setSolved,all,setAll,points,setPoints}}>
            {props.children}
        </SolvedCountContext.Provider>
    )
}