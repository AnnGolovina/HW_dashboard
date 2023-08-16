import React, { useState } from "react";
import { FlexColumn } from "../shared/Flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  //  console.log(formData);
  const [_, setLokalStorageFormData] = useLocalStorage("userData");

  const onSubmit = () => {
    setLokalStorageFormData(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <FlexColumn
      width="280px"
      height="350px"
      alignItems="center"
      border="2px solid #7ba24d"
      borderRadius="10px"
      background="#e9f4dc"
    >
      <h1>Authorization</h1>
      <input className="input-class"
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input className="input-class"
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <button onClick={onSubmit}>Submit</button>
    </FlexColumn>
  );
};
