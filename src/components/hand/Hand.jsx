import "./hand.css";
import hand from "../../assets/hand.png";

const Hand = () => {
  return (
    <div className="w-full lg:-ml-40 lg:relative lg:h-full">
      <div className="hidden lg:block absolute lg:left-[150px] xl:left-[250px] h-[300px] w-[500px] blob bg-[#9AF493]"></div>
      <img
        src={hand}
        alt="a hand holding a phone"
        className="lg:absolute lg:-mt-20 lg:top-0 m-auto lg:m-0 h-auto lg:h-full w-full object-cover"
      />
    </div>
  );
};

export default Hand;
