import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["greek-ext"],
  weight: "500",
});

const page = () => {
  return (
    <div>
      <h3>Fonts</h3>
      <p>This text is having normal font</p>
      <p className={roboto.className}>This text is having roboto font</p>
    </div>
  );
};

export default page;
