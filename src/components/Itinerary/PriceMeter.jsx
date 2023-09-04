// eslint-disable-next-line no-unused-vars
import React from "react";

const PriceMeter = ({ price }) => {
  // price range: from 1 to 5

  const pathToImg = "/images/icons/";
  const dimensions = "w-[20px] h-[40px]";
  const numberOfIterations = 5;
  const amountofDollars = Array.from(
    { length: numberOfIterations },
    (_, index) => {
      let typeOfBill =
        price > index
          ? "money-dollar-green-30x60px.svg"
          : "money-dollar-gray-30x60px.svg";
      return (
        <li key={index}>
          <img
            className={"gap-2" + dimensions}
            src={pathToImg + typeOfBill}
            alt={"dollar bill"}
          />
        </li>
      );
    }
  );

  return (
    <div className="flex gap-3 self-center">
      <ul className="flex gap-2">{amountofDollars.map((item) => item)}</ul>
    </div>
  );
};

export default PriceMeter;
