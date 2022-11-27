import React from "react";
import { useParams } from "react-router-dom";
import { useVerifyEmailQuery } from "../../api/authApi";
import Login from "./Login";

export default function VerifyEmail() {
  const { token } = useParams();
  console.log(token);
  const { data, isSuccess } = useVerifyEmailQuery(token);
  console.log(data, isSuccess);

  if (isSuccess) {
    return (
      <Login
        verifiedText="visible"
        color="green"
        textVerify="Sucessfully verified your email. Please Login"
      />
    );
  } else {
    return (
      <Login
        verifiedText="visible"
        color="pink"
        textVerify="Failed to verify your email"
      />
    );
  }
}
