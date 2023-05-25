import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

const teams = [
  {
    id: 1,
    name: "Ugur",
    point: 12,
    goal: 4,
    win: 5,
    lose: 7,
    equal: 2,
  },
  {
    id: 2,
    name: "Ahmet",
    point: 12,
    goal: 4,
    win: 5,
    lose: 7,
    equal: 2,
  },
  {
    id: 3,
    name: "Enes",
    point: 12,
    goal: 4,
    win: 5,
    lose: 7,
    equal: 2,
  },
  {
    id: 4,
    name: "Hasan",
    point: 12,
    goal: 4,
    win: 5,
    lose: 7,
    equal: 2,
  },
  {
    id: 5,
    name: "Tunc",
    point: 12,
    goal: 4,
    win: 5,
    lose: 7,
    equal: 2,
  },
];

function ScoreBoard() {
  return (
    <div className="main mt-4">
      <div className="head border-[#3B82F6] border-b-[1px]">
        <div className="flex mx-9 py-6 ">
          <div className="logo">
            <Image className="!fill-white" src={logo} />
          </div>
          <div className="season ml-4">
            <p className="text-white text-2xl">
              <span className="text-[#3B82F6] font-extrabold">Blu</span>League
            </p>
            <p className="text-[#BC6BBC]">Sezon 1</p>
          </div>
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
              <div className="flex items-center">
                <div className="mr-6 text-2xl">{item.id}</div>
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
