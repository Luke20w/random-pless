import { useState } from "react";
import Button from "./components/Button";

import pless1 from "./assets/Slide2.jpeg";
import pless2 from "./assets/Slide3.jpeg";
import pless3 from "./assets/Slide4.jpeg";
import pless4 from "./assets/Slide5.jpeg";
import pless5 from "./assets/Slide6.jpeg";
import pless6 from "./assets/Slide7.jpeg";
import pless7 from "./assets/Slide8.jpeg";
import pless8 from "./assets/Slide9.jpeg";
import pless9 from "./assets/Slide10.jpeg";
import pless10 from "./assets/Slide11.jpeg";
import pless11 from "./assets/Slide12.jpeg";
import pless12 from "./assets/Slide13.jpeg";
import pless13 from "./assets/Slide14.jpeg";
import pless14 from "./assets/Slide15.jpeg";
import pless15 from "./assets/Slide16.jpeg";
import pless16 from "./assets/Slide17.jpeg";
import pless17 from "./assets/Slide18.jpeg";
import pless18 from "./assets/Slide19.jpeg";
import pless19 from "./assets/Slide20.jpeg";
import pless20 from "./assets/Slide21.jpeg";
import pless21 from "./assets/Slide22.jpeg";

export default function App() {
  const plesses = [
    pless1,
    pless2,
    pless3,
    pless4,
    pless5,
    pless6,
    pless7,
    pless8,
    pless9,
    pless10,
    pless11,
    pless12,
    pless13,
    pless14,
    pless15,
    pless16,
    pless17,
    pless18,
    pless19,
    pless20,
    pless21,
  ];

  const [plessIndex, setPlessIndex] = useState(Math.floor(Math.random() * plesses.length));

  function randomizePless() {
    setPlessIndex(Math.floor(Math.random() * plesses.length));
  }

  return (
    <div className="flex items-center justify-center py-10 px-5 flex-col gap-10">
      <p className="font-black text-5xl">Welcome to The Faces of Pless (Site)!</p>
      <p className="text-lg font-medium">Here you can see all the many beautiful faces of Will Pless</p>
      <Button onClick={randomizePless}>Get a random Pless!</Button>
      <img src={plesses[plessIndex]} alt="" />
    </div>
  );
}
