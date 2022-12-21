import React from "react";
import { Heading, Paragraph } from "../../components/typography/Typography";

const Form = ({ header, paragraph, children }) => {
  return (
    <form className="flex justify-center flex-col">
      <Heading text={header} size={"md"} classNames="text-center " />
      <Paragraph text={paragraph} size={"lg"} classNames="text-center " />
      {children}
    </form>
  );
};

export default Form;
