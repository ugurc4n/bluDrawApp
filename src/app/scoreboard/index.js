import React from "react";
import champLogo from "../assets/champleague.png";
import Image from "next/image";
// import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Asım",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 2,
    name: "Batuhan",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 3,
    name: "Can",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 4,
    name: "Enes",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 5,
    name: "Erkan",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 6,
    name: "Emrah",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 7,
    name: "Göksu",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 8,
    name: "Hasan",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 9,
    name: "İbrahim",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 10,
    name: "Osman",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 11,
    name: "Uğur",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },
  {
    id: 12,
    name: "Yüksel",
    point: 0,
    goal: 0,
    win: 0,
    lose: 0,
    equal: 0,
  },

];

function ScoreBoard() {
  return (
    <div className="main mt-4">
      <div className="head border-[#3B82F6] border-b-[1px]">
        <div className="flex mx-9 py-6 justify-between">
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
          {/* <Link className="text-[#7939E9] bg-white font-bold flex justify-center items-center h-12 px-14 rounded-lg" href='/maclar'>Geçmiş Maçlar</Link> */}
        </div>
      </div>

      <div className="scoredetail border-b-[1px] border-[#3B82F6] py-5">
        <div className="mx-9 flex justify-between">
          <div className="users text-white">Oyuncular</div>
          <div className="details text-white flex text-xl">
            <p className="pr-5">OM</p>
            <p className="pr-5">G</p>
            <p className="pr-5">M</p>
            <p className="pr-5">B</p>
            <p>P</p>
          </div>
        </div>
      </div>
      <div className="teams ">
        {teams.map((item) => (
          <div className=" border-b-[1px] border-[#BC6BBC]" key={item.id}>
            <div className="mx-9 text-white py-5 flex justify-between">
              <div className="flex items-center justify-around gap-4">
                <div className="text-2xl w-5 flex justify-center items-center">{item.id}</div>
                <div className="text-2xl">{item.name}</div>
              </div>
              <div className="flex text-2xl">
                <p className="pr-5">{item.point}</p>
                <p className="pr-5">{item.goal}</p>
                <p className="pr-5">{item.win}</p>
                <p className="pr-5">{item.lose}</p>
                <p className=" text-emerald-500">{item.equal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
