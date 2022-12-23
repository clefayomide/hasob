import React, { useState } from "react";
import Input from "../components/form/Input";
import Form from "../layouts/form/Form";
import Button from "../components/button/Button";

const Login = () => {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  return (
    <main className="h-full md:mt-12 lg:mt-0 bg-[url('/src/assets/coat_left.png')] bg-no-repeat bg-[left_center]">
      <div className="bg-[url('/src/assets/coat_right.png')] bg-no-repeat bg-[right_center]">
        <Form header={"Login"} paragraph={"Stop spending, Start investing"}>
          <Input
            label={"Email"}
            placeholder="Enter your email"
            type={"text"}
            required={true}
            value={email}
            onValuechange={set_email}
          />

          <Input
            label={"Password"}
            placeholder="Enter your password"
            type={"password"}
            required={true}
            value={password}
            onValuechange={set_password}
          />
          <Button
            type={"primary"}
            text="Login"
            width={"w-full md:w-[450px]"}
            rounded={true}
            classNames="m-auto mt-8 mb-5 text-lg"
          />
        </Form>
      </div>
    </main>
  );
};

export default Login;
