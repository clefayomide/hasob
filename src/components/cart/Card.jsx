import React from "react";
import Automatic from "./button/Automatic";
import Delete from "./button/Delete";
import Checkbox from "../form/Checkbox";
import { useState } from "react";
import logo from "../../assets/coat-full.png";
import Counter from "./Counter";

const Card = () => {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <section className=" flex flex-col gap-5 lg:gap-10 lg:flex-row  justify-between border border-light_green p-3">
      <section className="lg:w-[40%] flex gap-4 items-center ">
        <div className="w-[5%]"> 
          <Checkbox value={checkBox} onValuechange={setCheckBox} />
        </div>
        <div className="ml-5">
          <img src={logo} alt="coat of arm" className="w-12 h-12 object-contain" />
        </div>
        <p className="font-semibold">730 days Savings Bond</p>
      </section>

      <section className="lg:w-[56%] flex lg:gap-14 flex-col-reverse lg:flex-row gap-5">
        <section className="flex justify-end lg:justify-start gap-3 lg:gap-5 items-center">
          <Automatic />
          <Delete />
        </section>

        <section>
          <Counter />
        </section>
      </section>
    </section>
  );
};

export default Card;
