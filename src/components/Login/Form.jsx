import { Email, RemoveRedEye } from "@mui/icons-material";
import React, { useState } from "react";
import "./style/form.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [check, setCheck] = useState(false);
  const [exist, setExist] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !check) {
      setErr("Please fill in all inputs");
      setExist(true)
    } else if (password.length < 6) {
      setErr("Password should be 6 or more characters");
    } else {
      setEmail("");
      setPassword("");
      setCheck(false);
      setErr("");
    }
  };

  return (
    <div className="form__container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            checked={check}
            onClick={() => setCheck(!check)}
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        {exist && <p className="error">{err}</p>}
        <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
