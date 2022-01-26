import { Link } from "react-router-dom";
import { Signinc } from "../component/Signinc";
import { useEffect, useState } from "react";
import "../sass/sign.scss";
export function Signin() {

  return (
    <div className="flex row">
      <Signinc  />
      <img className= "rbig"  src="https://firebasestorage.googleapis.com/v0/b/akii-dc633.appspot.com/o/assets%2Fsignin.png?alt=media&token=b0314db1-9cf3-4826-9302-aee44f19e7b6" />
    </div>
  );
}
