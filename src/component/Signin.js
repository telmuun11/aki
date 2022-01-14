import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../sass/sign.scss";

export function Signin() {
  return (
    <div className="signindiv flex column">
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
      <Button  variant="contained" className="buttonb">
        Hello World
      </Button>
    </div>
  );
}
