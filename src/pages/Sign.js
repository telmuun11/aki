import { Link } from "react-router-dom";
import { Signin } from "../component/Signin";
import { useEffect, useState } from "react";
import "../sass/sign.scss";
export function Sign() {
  
const [bool, setBool] = useState(1);

  useEffect(() => {
console.log(bool)
  }, [bool]);
  return (
    <div className="flex row">
      <Signin  setBool={setBool } bool={bool}/>
      <img className={bool ? "rbig" : "trans"} src="https://firebasestorage.googleapis.com/v0/b/akii-dc633.appspot.com/o/assets%2Fsignin.png?alt=media&token=b0314db1-9cf3-4826-9302-aee44f19e7b6" />
    </div>
  );
}
