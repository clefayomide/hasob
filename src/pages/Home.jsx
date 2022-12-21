import React from "react";
import Button from "../components/button/Button";
import Hand from "../components/hand/Hand";
import { Heading, Paragraph } from "../components/typography/Typography";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <main className="h-full">
      <div className="flex justify-between mt-3">
        <div className="w-10 h-4 bg-stone-500 -ml-5"></div>
        <div className="w-10 h-4 bg-[#b9f0ac] -mr-5"></div>
      </div>
      <section className="flex flex-col-reverse lg:flex-row gap-10 lg:h-full">
        <div className="lg:mt-10 w-full lg:w-[35%]">
          <Heading
            text={"Subscribe to FGN Saving Bond"}
            size={"md"}
            classNames={"leading-[40px]"}
          />
          <Paragraph
          size={"xl"}
            text={"Loan and get paid with interest"}
            classNames={""}
          />
          <div className="mt-12 flex gap-5 items-center">
            <Button
              width={"w-36"}
              classNames={"bg-[#417B14] text-white"}
              text={"Get Started"}
              icon={[
                <svg
                  key={uuidv4()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>,
              ]}
            />
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-play-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
              <div className="text-stone-700 text-lg">See Video</div>
            </div>
          </div>
        </div>
        <Hand />
      </section>
    </main>
  );
};

export default Home;
