"use client";
import IconifyIcon from "@app/components/ui/IconifyIcon";
import { Button } from "@app/app/components/form-components/button";
import React from "react";
import Link from "next/link";

function Herocitation() {
  return (
    <div className=" mx-auto flex items-center py-[4rem]">
      <nav className="  flex flex-col ">
        <h1 className="tracking-[-0.075rem] drop-shadow-sm lg:drop-shadow  text-[3rem] text-[#222142] font-semibold leading-[4rem]">
          Ghana Revenue Authority
        </h1>
        <h1 className=" tracking-tight drop-shadow-sm lg:drop-shadow text-2xl lg:text-[2rem] text-gray-500 font-semibold leading-[4rem]">
          Voluntary Disclosure Portal
        </h1>
        <p className=" mt-[1.5rem] max-w-[32rem] drop-shadow-sm lg:drop-shadow text-[#4B5565] text-sm leading-[1.875rem] font-normal self-stretch">
          The programme is an opportunity to encourage individuals and businesses to come forward voluntarily and disclose any unreported or underreported information related to their financial activities outside Ghana. By participating in this programme, you can enjoy several benefits.
        </p>
        <div className="pt-14 mx-auto lg:m-auto">
          <Link className=" flex items-center gap-2 !rounded-lg bg-sky-700 w-max px-3 py-2 text-white" href="/portal/disclosures/new-application/" >
            Apply Now
            <IconifyIcon icon="tdesign:chevron-right" className="bg-transparent" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Herocitation;
