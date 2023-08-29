import React from "react";
import { styled } from "styled-components";
import { Flex, FlexColumn } from "./Flex";



export const AuthForm = styled(FlexColumn)`
	  width: 280px;
	  height: 350px;
	  align-items: center;
	  justify-content: center;
	  border: 2px solid #707070;
	  background: #ccc7c78f;
	  font-family: "Acme", "Catamaran", "Chakra Petch", "Montserrat", sans-serif;
	  margin: 10% auto;

	  h1 {
		color: #4a4a49;
	  }

	  input {
	width: 80%;
    height: 40px;
    margin: 20px auto;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    border: 1px solid #385418;
    background-color: #fffafaac;
	  }

	  input::placeholder {
		
    padding: 5px;
    font-size: 18px;
    color: #868686;
	font-family: "Acme", "Catamaran", "Chakra Petch", "Montserrat", sans-serif;
	  }

	  button {
	font-family: "Acme", "Catamaran", "Chakra Petch", "Montserrat", sans-serif;
	font-size: 20px;
	margin: 30px auto 20px ;
	width: 65%;
	height: 40px;
	background-color: #0000009e;
	border-radius: 5px;
	color: white;
  }



`;