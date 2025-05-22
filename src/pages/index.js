import SajuTable from "@/components/SajuTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-[448px] relative bg-[#F3F2EF]">
        <div className="relative mb-[114px]">
          <div className="absolute w-full h-[261px] bg-gradient-to-b from-transparent from-[25.16%] to-black -rotate-180" />
          <Image
            className="w-full"
            src="/Image1.png"
            alt="logo"
            width={448}
            height={100}
          />
          <div className="absolute w-full h-[195px] bottom-0 bg-gradient-to-b from-transparent from-[25.16%] to-[#F3F2EF] -scale-x-100" />
          <div className="relative">
            <div className="absolute -bottom-[94px] left-6 w-[217px] h-[139px]">
              <Image
                className="w-full h-full object-none"
                src="/SpeechBubble1.png"
                alt="말풍선"
                width={215}
                height={139}
              />
              <p className="absolute bottom-0 my-5.5 mx-10 text-center">
                이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
              </p>
            </div>
          </div>
        </div>
        <Image
          className="w-full pr-6 mb-10"
          src="/Image2.png"
          alt="logo"
          width={448}
          height={100}
        />
        <div className="relative">
          <div className="relative">
            <div className="absolute -top-[104px] left-6 w-[241px] h-[141px]">
              <Image
                className="w-full h-full object-none"
                src="/SpeechBubble2.png"
                alt="말풍선"
                width={215}
                height={139}
              />
              <p className="absolute top-0 my-[34px] mx-[34px] text-center">
                제가 OO님의 사주를 보기 쉽게 표로 정리했어요
              </p>
            </div>
          </div>
          <Image
            className="w-full"
            src="/Image3.png"
            alt="logo"
            width={448}
            height={100}
          />
          <div className="absolute w-full h-[118px] bottom-0 bg-gradient-to-b from-transparent from-[25.16%] to-[#F3F2EF] -scale-x-100" />
        </div>
        <SajuTable />
      </div>
    </main>
  );
}
