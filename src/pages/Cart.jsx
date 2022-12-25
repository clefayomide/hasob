import Button from "../components/button/Button";
import Card from "../components/cart/Card";
import { Heading, Paragraph } from "../components/typography/Typography";

const Cart = () => {
  return (
    <main className="mt-5 2xl:w-[1500px] 2xl:m-auto">
      <section className="">
        <section className="w-full flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[56%] flex flex-col gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="w-full mt-8 lg:mt-0 lg:w-[42%]">
            <div className="border border-light_green p-3 self-start ">
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-5 lg:gap-10 items-center">
                    <div className="flex gap-3 items-center">
                      <Heading
                        text={"Fees + Taxes"}
                        classNames="text-sm lg:text-base"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                    <Paragraph text={"N2.09"} />
                  </div>
                </div>
                <div>
                  <Heading text={"Total Buy"} classNames="text-right" />
                  <Paragraph
                    text={"N600,000.00"}
                    classNames="text-right font-bold"
                  />
                </div>
              </div>
              <Paragraph
                text={
                  "This is a 730 days Savings Bond, you have a fixed income"
                }
                size="sm"
                classNames=" font-normal mt-5"
              />
            </div>
            <div className="flex justify-end mt-5">
              <Button
                text={"Check Out"}
                width="w-full lg:w-[150px]"
                classNames={"bg-green-600 text-white"}
                rounded={true}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cart;
