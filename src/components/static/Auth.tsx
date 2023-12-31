import React, { useContext, useRef, useState } from "react";
import { FlexColumn } from "../shared/Flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../contexts/DashboardContext";
import { AuthForm } from "../shared/Auth.styled";
import { styled } from "styled-components";

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setLocalStorageFormData] = useLocalStorage("userData");

  const navigate = useNavigate();

  const { setUser } = useContext(DashboardContext)!;

  const StyleAuthForm = styled(AuthForm)``;

  const elInput = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.innerText = "Press";
    }}

  const handleMouseLeave = () => {
      if (buttonRef.current) {
        buttonRef.current.innerText = "Submit";
      }}

  const onSubmit = () => {
    //check password and email

    if (formData.email === "admin" && formData.password === "admin") {
      setLocalStorageFormData(formData);
      setUser(formData);
      navigate("/dashboard");
    } else {
      alert("Wrong data");
    }

    elInput.current?.focus();
    setFormData({ email: "", password: "" });
  };

  return (
    <FlexColumn
      width="100%"
      height="100vh"
      background="url('/assets/footer_img.png')"
      bacgroundSize="cover"
    >
      <AuthForm>
        <h1>Login</h1>
        <input
          className="input-class"
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          //ref={elInput}
          className="input-class"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button onClick={onSubmit} ref={buttonRef}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>Submit</button>
      </AuthForm>
    </FlexColumn>
  );
};
