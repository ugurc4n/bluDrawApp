"use client";
import React from "react";
import Image from "next/image";
import juventusLogo from "../app/assets/juventus.png";
import realLogo from "../app/assets/real.png";
import barcaLogo from "../app/assets/barca.png";
import bayernLogo from "../app/assets/bayern.png";
import cityLogo from "../app/assets/city.png";
import liverpoolLogo from "../app/assets/liverpool.png";
import romaLogo from "../app/assets/roma.png";
import psgLogo from "../app/assets/psg.png";
import sevillaLogo from "../app/assets/sevilla.png";
import interLogo from "../app/assets/inter.png";
import chealseaLogo from "../app/assets/chelsea.png";
import unitedLogo from "../app/assets/united.png";



function Draw() {
  const league = [
    {
      date: "6 Haziran",
      matches: [
        {
          team1: "Can",
          logo1: bayernLogo,
          // score1: 1,
          team2: "Batuhan",
          logo2: liverpoolLogo,
          // score2: 3,
          hour: "13:00",
        },
        {
          team1: "Asım",
          logo1: romaLogo,
          // score1: 1,
          team2: "Göksu",
          logo2: cityLogo,
          // score2: 3,
          hour: "13:30",
        },
        {
          team1: "Emrah",
          logo1: realLogo,
          // score1: 1,
          team2: "Yüksel",
          logo2: sevillaLogo,
          // score2: 1,
          hour: "14:00",
        },
        {
          team1: "İbrahim",
          logo1: unitedLogo,
          // score1: 1,
          team2: "Uğur",
          logo2: psgLogo,
          // score2: 1,
          hour: "14:30",
        },
        {
          team1: "Enes",
          logo1: chealseaLogo,
          // score1: 1,
          team2: "Osman",
          logo2: juventusLogo,
          // score2: 1,
          hour: "15:00",
        },
        {
          team1: "Hasan",
          logo1: interLogo,
          // score1: 1,
          team2: "Erkan",
          logo2: barcaLogo,
          // score2: 1,
          hour: "15:30",
        },
      ]
    },
  ];

  console.log(league);

  return (
    <div>
      <div className="mb-16 mt-16">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 content-center">
            {league.map((item) => item.matches.map((data, id) => (
              <div
                className="w-[350px] md:relative lg:w-[580px] my-0 mx-auto flex items-center justify-around gap-6 lg:gap-40 h-[112px] text-white bg-gradient-to-r bg-repeat from-indigo-800 to-violet-600 border-[1px] border-solid border-gray-200 rounded-md"
                key={id}
              >

                <div className="flex flex-col items-start justify-center ">
                  <div className="flex justify-center items-center">
                    <Image alt="logo1" src={data.logo1} width={32} height={32} />
                    <div className="ml-2 text-xl font-medium">
                      {data.team1}
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-4 text-lg md:text-xl font-medium">
                    <Image alt="logo2" src={data.logo2} width={32} height={32} />
                    <div className="ml-2 text-xl font-medium">
                      {data.team2}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center text-xl gap-y-4 items-center flex-col">
                  {data?.score1 ? (
                    <>
                      <div>{data.score1}</div>
                      <div>{data.score2}</div>
                    </>

                  ) : (
                    <>
                      <div>{item.date}</div>
                      <div>{data.hour}</div>
                    </>
                  )}
                </div>
              </div>
            ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draw;
