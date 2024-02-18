import React from "react";
import Herocitation from "./Herocitation";
import Herothumbnails from "./Herothumails";

function Hero() {
  return (
    <section className="relative isolate grid grid-cols-1 lg:grid-cols-2 container mx-auto  ">
      <Herocitation />
      <Herothumbnails />
    </section>
  );
}

export default Hero;
