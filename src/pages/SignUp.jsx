import React, { useState } from "react";
import Checkbox from "../components/form/Checkbox";
import Input from "../components/form/Input";
import Form from "../layouts/form/Form";
import Button from "../components/button/Button";
// import coat_left from "../assets/coat_left.png"
// import coat_right from "../assets/coat_right.png"

const SignUp = () => {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [address, set_address] = useState("");
  const [phone_number, set_phone_number] = useState("");
  const [term_condition, set_terms_condition] = useState(false);

  return (
    <main className="h-full bg-[url('/src/assets/coat_left.png')] bg-no-repeat bg-[left_center]">
      <div className="bg-[url('/src/assets/coat_right.png')] bg-no-repeat bg-[right_center]">
        <Form header={"Sign Up"} paragraph={"Stop spending, Start investing"}>
          <Input
            label={"First Name"}
            placeholder="Enter your first name"
            type={"text"}
            required={true}
            value={first_name}
            onValuechange={set_first_name}
          />

          <Input
            label={"Last Name"}
            placeholder="Enter your last name"
            type={"text"}
            required={true}
            value={last_name}
            onValuechange={set_last_name}
          />

          <Input
            label={"Email"}
            placeholder="Enter your email"
            type={"email"}
            required={true}
            value={email}
            onValuechange={set_email}
          />

          <Input
            label={"Address"}
            placeholder="Enter your Address"
            type={"address"}
            required={true}
            value={address}
            onValuechange={set_address}
          />

          <Input
            label={"Phone Number"}
            placeholder="Enter your phone number"
            type={"tel"}
            value={phone_number}
            onValuechange={set_phone_number}
          />
          <Checkbox
            value={term_condition}
            onValuechange={set_terms_condition}
          />
          <Button
            type={"primary"}
            text="Sign up"
            width={"w-full md:w-[450px]"}
            rounded={true}
            classNames="m-auto mt-8 mb-5 text-lg"
          />
        </Form>
      </div>
    </main>
  );
};

export default SignUp;
