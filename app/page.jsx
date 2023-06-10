"use client";

import { Carousel } from "@mantine/carousel";

const page = () => {
  return (
    <div className="">
      <div className=" gradient w-full h-screen">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-center items-end  flex-col">
            <div className="space-y-5 text-center">
              <p className=" uppercase font-loryena text-light-yellow text-xl tracking-[10px]">
                hotel
              </p>
              <h1 className="font-Montel uppercase text-5xl sm:text-7xl text-light-yellow leading-10">
                jc hotel prestige
              </h1>
              <p className=" uppercase font-loryena text-light-yellow text-xl tracking-[10px]">
                bastos
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex items-center justify-center">
          <img
            className="mx-auto animate-bounce"
            src="assets/icons/keyboard_arrow_down.svg"
            alt=""
          />
        </div>
      </div>
      <section className="max-w-7xl mx-auto relative mt-40 px-7">
        <div className="grid place-content-centers place-items-center space-y-5">
          <div className="dot flex">
            <img src="assets/icons/isolation_mode.svg" alt="iso" />
          </div>
          <h2 className="  font-PlayfairDisplay uppercase text-4xl sm:text-5xl md:text-6xl text-jet text-center">
            BIENVENUE SUR LE SITE DE L'HOTEL JC PRESTIGE
          </h2>
        </div>
        {/* carousel */}
        <div className="carousel">
          <Carousel
            withIndicators
            height={500}
            slideSize="33.333333%"
            slideGap="md"
            loop
            withControls={false}
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-guest-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-underguest bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-guest-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-[456px] w-[350px] ">
              <div className=" bg-underguest bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default page;
