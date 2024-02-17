"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@app/components/ui/Button";
import Build from "@app/asessts/building.jpg";
import IconifyIcon from "@app/components/ui/IconifyIcon";
import Link from "next/link";

interface IServiceCard {
  title: string,
  caption: string,
  action: string,
  link: string,
  icon: string
}

const ServiceCard: React.FC<IServiceCard> = (props) => {
  const { title, caption, action, link, icon } = props
  return <div className="  relative rounded-lg p-4 isolate border border-gray-400 flex flex-col gap-6 overflow-hidden ">
    <IconifyIcon className="w-[4rem] h-[4rem] mx-auto text-[var(--primary-blue)]" fontSize={"6rem"} icon={icon} />
    <nav className=" mx-auto text-gray-600 font-semibold text-2xl">
      {title}
    </nav>
    <nav className=" text-gray-500 tracking-wider text-center">
      {caption}
    </nav>
    <Link href={link} className="flex mx-auto items-center gap-1 rounded-full p-1 px-3 border-gray-500/65 text-sm border w-max">
      {action} <IconifyIcon className="bg-transparent" icon="mdi:chevron-right" />
    </Link>

  </div>
}
const ServiceSection = () => {
  return (
    <div className=" bg-[#f0f9ff] pb-10">

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            title="How To Apply?"
            action="Learn More"
            link="/"
            caption="Lorem ipsuonsdf  sandfa df osoe a idf aif aifa oewif"
            icon="fe:question"
          />
          <ServiceCard
            title="When To Apply?"
            action="Learn More"
            link="/"
            caption="Lorem ipsuonsdf  sandfa df osoe a idf aif aifa oewif"
            icon="ri:time-line"
          />
          <ServiceCard
            title="Who Can Apply?"
            action="Learn More"
            link="/"
            caption="Lorem ipsuonsdf  sandfa df osoe a idf aif aifa oewif"
            icon="fluent:person-32-regular"
          />
          <ServiceCard
            title="Decision Making"
            action="Learn More"
            link="/"
            caption="Lorem ipsuonsdf  sandfa df osoe a idf aif aifa oewif"
            icon="uim:process"
          />
        </div>
      </div>
    </div>

  );
};

export default ServiceSection;
