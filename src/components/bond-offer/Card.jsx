import React from "react";
import { Heading, Paragraph } from "../typography/Typography";
import { v4 as uuidv4 } from "uuid";
import coat from "../../assets/coat-full.png";
import Button from "../button/Button";

const Card = ({ data }) => {
  return (
    <section className="w-full md:w-[48.5%] lg:w-[24%] xl:w[23.5%] border border-light_green rounded-lg lg:mt-4 p-5">
      <section className="flex justify-between">
        <img src={coat} alt="nigeria coat of arm" className="w-12 h-12" />
        <div className="p-[8px] rounded-3xl w-fit bg-[#C1EED6] text-[#8A8584] text-[10px] self-start">
          FGN Savings Bond
        </div>
      </section>
      <section className="mt-5">
        <Heading
          text={"730 days Savings Bond"}
          size="sm"
          classNames={"text-center"}
        />
        <Paragraph
          text={"Due October 12, 2024"}
          classNames="text-center"
          size={"sm"}
        />
      </section>
      <section className="flex justify-between mt-3">
        <div className="text-[#8A8584] flex flex-col gap-3">
          {data.map(({ title }) => (
            <div key={uuidv4()}>{title}</div>
          ))}
        </div>
        <div className="text-[#1d1c1c] font-medium flex flex-col gap-3">
          {data.map(({ value }) => (
            <div key={uuidv4()} className="text-right">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="flex gap-5 items-center justify-center mt-8">
        <Button
          text={"Add to cart"}
          rounded={true}
          width={"w-[150px]"}
          classNames="bg-[#417B13] text-white text-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-heart cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
      </section>
    </section>
  );
};

export default Card;
