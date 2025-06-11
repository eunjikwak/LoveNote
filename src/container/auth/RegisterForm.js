import AuthFrom from "../../components/auth/AuthForm";
import { useState } from "react";
const RegisterForm = () => {
  const [error, setError] = useState(null);
  const form = {
    username: "",
    password: "",
  };
  return (
    <AuthFrom
      type="register"
      form={form}
      onChange={null}
      onSubmit={null}
      error={error}
    />
  );
};

export default RegisterForm;
