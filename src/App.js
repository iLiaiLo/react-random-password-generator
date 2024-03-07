import React, { useEffect } from "react";
import { useState } from "react";


function App() {

  const [password,setPassword]=useState("");
  const [inputType,setinputType]=useState("");
  const [Text,setText]=useState("See password")
  const [flag,setFlag]=useState(false);

  useEffect(()=>{
    if(!flag){
      setText("See password")
      setinputType("password")
    }
    else{
      setText("Hide password")
      setinputType("text")
    }
  },[flag])

  let string="1234567890-=+*&^%$#@!()_qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,./{}[]?><';";

  function getRandomPassword(){
    let randomPass="";
    for(let i=0;i<=Math.floor((Math.random()*11)+6);i++){
      randomPass+=string[Math.floor(Math.random()*string.length)]
    }
    setPassword(randomPass)
  }

  function ChangeContent(){
    setFlag(p=>!p)
  }

  return (
    <div>

    <div style={{display:"flex",width:"400px",height:"300px",flexDirection:"column",justifyContent:"space-between",background:"tomato"}}>
      <input type={inputType} style={{padding:"30px",fontSize:"25px"}} value={password} maxLength={Math.floor((Math.random()*11) + 6)}  />
      <button style={{padding:"30px",fontSize:"25px"}} onClick={getRandomPassword}>Get random password</button>
      <button style={{padding:"30px" ,fontSize:"25px"}} onClick={ChangeContent}>{Text}</button>
    </div>

  </div>

  );
}

export default App;
