import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../sass/sign.scss";



export function Signin({setBool , bool }) {
  return (
    <div className={bool ? "signindiv flex column" : "algabol"}>
        <img
        className="imag i1"
        src="https://firebasestorage.googleapis.com/v0/b/akii-dc633.appspot.com/o/assets%2FGroup%2021.png?alt=media&token=1f2beae5-64aa-4bb8-a3a7-f553dfd819a2"
        alt=""
      />
      <p className="topsign">Sign up</p>
      <div className=" sign2 flex column">
        <TextField
          className="textfield1"
          id="outlined-uncontrolled"
          label="Email"
          defaultValue="foo"
        />

        <TextField
          className="textfield1"
          id="outlined-uncontrolled"
          label="Password"
          defaultValue="foo"
        />
      </div>
      <Button onClick={()=>setBool(0)}>Primary</Button>

      <Button
        sx={{ marginLeft: "20%" }}
        variant="contained"
        className="buttonb"
      >
        Hello World
      </Button>
      <img
        className="imag"
        src="https://firebasestorage.googleapis.com/v0/b/akii-dc633.appspot.com/o/assets%2FGroup%2021.png?alt=media&token=1f2beae5-64aa-4bb8-a3a7-f553dfd819a2"
        alt=""
      />
    </div>
  );
}
