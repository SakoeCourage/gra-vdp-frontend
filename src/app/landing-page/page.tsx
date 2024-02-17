import Hero from "@app/components/landingPage/partials/home/Hero";
import SectionDescription from "@app/components/landingPage/partials/home/SectionDescription";
import ServiceSection from "@app/components/landingPage/partials/home/ServiceSection";
import React from "react";

function Page() {
  return (
    <div className="bg-white">
      <Hero />
      <SectionDescription />
      <ServiceSection />
      {/* <Homeservicessection />
      <Homenewssection /> */}
    </div>
  );
}

export default Page;
