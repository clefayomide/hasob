import React from "react";
import Card from "../components/bond-offer/Card";

const Bond = () => {
  const card_data = [
    {
      title: "Minimum",
      value: "5000",
    },
    {
      title: "% Per Year",
      value: "11.382%",
    },
    {
      title: "Interest",
      value: "Quarterly",
    },
    {
      title: "Opening",
      value: "Oct/04/2022",
    },
    {
      title: "Closing Date",
      value: "Oct/07/2022",
    },
    {
      title: "Settlement",
      value: "Oct/12/2022",
    },
  ];
  return (
    <main className="2xl:w-[1500px] 2xl:m-auto flex flex-wrap gap-5 lg:gap-0 justify-between mt-5 md:mt-10">
      <Card data={card_data} />
      <Card data={card_data} />
      <Card data={card_data} />
      <Card data={card_data} />
    </main>
  );
};

export default Bond;
