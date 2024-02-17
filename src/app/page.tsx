"use client";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { Icon } from "@iconify/react";
import icon180RingWithBg from "@iconify/icons-svg-spinners/180-ring-with-bg";

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.replace("/landing-page");
  }, []);
  return (
    <div className="w-full h-full grid justify-center items-center">
      <Icon icon={icon180RingWithBg} fontSize={40} className="text-[#155C9B]" />
    </div>
  );
}
