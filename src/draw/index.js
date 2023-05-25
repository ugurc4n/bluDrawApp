"use client";
import React from "react";
import { useState } from "react";
import "./match.module.css";
import Image from "next/image";
import logo from "../app/assets/inter.png";

function Draw() {
  const league = {
    date: { data: "17 Mayıs" },
    matches: [
      {
        team1: "Ugur",
        team2: "Hasan",
        date: "5 Mayis",
        hour: "11:30",
      },
      {
        team1: "Hasan",
        team2: "Hasan",
        date: "5 Mayis",
        hour: "13:50",
        win: "team2",
        score: "1-4",
      },
      {
        team1: "Ali",
        team2: "Hasan",
        date: "5 Mayis",
        hour: "12:45",
        win: "team1",
        score: "11-2",
      },
      {
        team1: "Tunc",
        team2: "Ahmet",
        date: "5 Mayis",
        hour: "12:15",
        win: "team1",
        score: "5-0",
      },
      {
        team1: "Ugur",
        team2: "Hasan",
        date: "5 Mayis",
        hour: "11:30",
      },
      {
        team1: "Hasan",
        team2: "Hasan",
        date: "5 Mayis",
        hour: "11:45",
        win: "team2",
        score: "1-4",
      },
    ],
  };

  return (
    <div className="mb-16 mt-16">
      <div className="border-b-[1px]">
        <div className="mx-9 text-white font-bold text-2xl mb-4">
          {league.date.data}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 content-center">
          {league.matches.map((item, id) => (
            <div
              className="w-[350px] lg:w-[680px] my-0 mx-auto flex items-center justify-center h-[112px] text-white bg-gradient-to-r bg-repeat from-indigo-800 to-violet-600 border-[1px] border-solid border-gray-200 rounded-md"
              key={id}
            >
              <div className="inner flex">
                <div className="team1 flex items-center">
                  <div className="text-xl">{item.team1}</div>
                  <div className="logo ml-3">
                    <Image src={logo} width={32} height={32} />
                  </div>
                </div>
                <div className="date flex items-center mx-4">{item.hour}</div>
                <div className="team2 flex items-center">
                  <div className="logo mr-3">
                    <Image src={logo} width={32} height={32} />
                  </div>
                  <div className="text-xl">{item.team2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Draw;
