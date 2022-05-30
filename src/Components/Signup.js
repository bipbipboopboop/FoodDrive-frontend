import React from "react";
import useSignUp from "../Services/Signup";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background-color: #d30000;
  text-transform: uppercase;
  color: white;
  border-radius: 30px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  font-size: 16px;
  text-align: center;
  border: 0px;
`;

const Signup = () => {
  const { useName, useEmail, usePassword, useConfirmPassword, handleSubmit } =
    useSignUp();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <form>
            <h1>Sign Up</h1>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={useName[0]}
                onChange={(e) => useName[1](e.target.value)}
              />
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={useEmail[0]}
                onChange={(e) => useEmail[1](e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={usePassword[0]}
                onChange={(e) => usePassword[1](e.target.value)}
              />
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={useConfirmPassword[0]}
                onChange={(e) => useConfirmPassword[1](e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
