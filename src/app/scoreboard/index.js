import React from "react";
import champLogo from "../assets/champleague.png";
import Image from "next/image";
import juventusLogo from "../assets/juventus.png";
import realLogo from "../assets/real.png";
import barcaLogo from "../assets/barca.png";
import bayernLogo from "../assets/bayern.png";
import cityLogo from "../assets/city.png";
import liverpoolLogo from "../assets/liverpool.png";
import romaLogo from "../assets/roma.png";
import psgLogo from "../assets/psg.png";
import sevillaLogo from "../assets/sevilla.png";
import interLogo from "../assets/inter.png";
import chealseaLogo from "../assets/chelsea.png";
import unitedLogo from "../assets/united.png";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Asım",
    point: 6,
    goal: -2,
    win: 2,
    lose: 2,
    equal: 0,
    teamLogo: romaLogo,
  },
  {
    id: 2,
    name: "Batuhan",
    point: 0,
    goal: -9,
    win: 0,
    lose: 4,
    equal: 0,
    teamLogo: liverpoolLogo,
  },
  {
    id: 3,
    name: "Can",
    point: 9,
    goal: 7,
    win: 3,
    lose: 1,
    equal: 0,
    teamLogo: bayernLogo,
  },
  {
    id: 4,
    name: "Enes",
    point: 9,
    goal: 3,
    win: 3,
    lose: 1,
    equal: 0,
    teamLogo: chealseaLogo,
  },
  {
    id: 5,
    name: "Erkan",
    point: 10,
    goal: 6,
    win: 3,
    lose: 0,
    equal: 1,
    teamLogo: barcaLogo,
  },
  {
    id: 6,
    name: "Emrah",
    point: 6,
    goal: 1,
    win: 2,
    lose: 2,
    equal: 0,
    teamLogo: realLogo,
  },
  {
    id: 7,
    name: "Göksu",
    point: 9,
    goal: 3,
    win: 3,
    lose: 1,
    equal: 0,
    teamLogo: cityLogo,
  },
  {
    id: 8,
    name: "Hasan",
    point: 7,
    goal: 10,
    win: 2,
    lose: 1,
    equal: 1,
    teamLogo: interLogo,
  },
  {
    id: 9,
    name: "İbrahim",
    point: 0,
    goal: -12,
    win: 0,
    lose: 4,
    equal: 0,
    teamLogo: unitedLogo,
  },
  {
    id: 10,
    name: "Osman",
    point: 4,
    goal: -4,
    win: 1,
    lose: 2,
    equal: 1,
    teamLogo: juventusLogo,
  },
  {
    id: 11,
    name: "Uğur",
    point: 7,
    goal: 4,
    win: 2,
    lose: 1,
    equal: 1,
    teamLogo: psgLogo,
  },
  {
    id: 12,
    name: "Yüksel",
    point: 3,
    goal: -7,
    win: 1,
    lose: 3,
    equal: 0,
    teamLogo: sevillaLogo,
  },

];

const teams = data.sort((a, b) => {
  if (b.point === a.point) {
    return b.goal - a.goal
  }
  return b.point - a.point
})


function ScoreBoard() {
  return (
    <div className="main mt-4">
      <div className="head border-[#3B82F6] border-b-[1px]">
        <div className="flex mx-9 py-6 justify-between items-center">
          <div className="flex items-center">
            <div className="logo">
              <Image alt="logo" className="fill-white" src={champLogo} width={60} height={60} />
            </div>
            <div className="season ml-4">
              <p className="text-white text-2xl">
                <span className="text-[#3B82F6] font-extrabold">Blu</span>League
              </p>
              <p className="text-[#BC6BBC]">Sezon 1</p>
            </div>
          </div>
          <Link className="text-[#7939E9] bg-white text-sm lg:text-lg font-bold flex justify-center items-center h-10 px-1 lg:px-4 rounded-lg" href='/gecmis-maclar'>Geçmiş Maçlar</Link>
        </div>
      </div>

      <div className="scoredetail border-b-[1px] border-[#3B82F6] py-5">
        <div className="mx-9 flex justify-between">
          <div className="users text-white">Oyuncular</div>
          <div className="details text-white flex justify-between text-lg lg:text-2xl w-28 lg:w-56">
            <div className="w-7 flex justify-center">AV</div>
            <div className="w-7 flex justify-center">G</div>
            <div className="w-7 flex justify-center">M</div>
            <div className="w-7 flex justify-center">B</div>
            <div className="w-7 flex justify-center">P</div>
          </div>
        </div>
      </div>
      <div className="teams ">
        {teams.map((item, index) => (
          <div className=" border-b-[1px] border-[#BC6BBC]" key={item.id}>
            <div className="mx-9 text-white py-5 flex justify-between">
              <div className="flex items-center justify-around gap-4">
                <div className="text-2xl w-5 flex justify-center items-center">{index += 1}</div>
                <Image alt="logo1" src={item.teamLogo} width={32} height={32} />
                <div className="text-2xl">{item.name}</div>
              </div>
              <div className="flex justify-between text-lg lg:text-2xl w-28 lg:w-56">
                <div className="w-7 flex justify-center">{item.goal}</div>
                <div className="w-7 flex justify-center">{item.win}</div>
                <div className="w-7 flex justify-center">{item.lose}</div>
                <div className="w-7 flex justify-center">{item.equal}</div>
                <div className="w-7 flex justify-center text-emerald-500 ">{item.point}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
