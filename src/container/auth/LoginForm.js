import AuthFrom from "../../components/auth/AuthForm";

const LoginForm = () => {
  const form = {
    username: "",
    password: "",
  };
  return (
    <AuthFrom
      type="login"
      form={form}
      onChange={null}
      onSubmit={null}
      error={null}
    />
  );
};

export default LoginForm;
