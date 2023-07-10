"use client";
import React from "react";
import Image from "next/image";

function Draw({ league }) {
  return (
    <div>
      <div className="mb-16 mt-16">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 content-center">
            {league.map((item) => item.matches.reverse().map((data, index) => (
              <div
                className="w-[350px] md:relative lg:w-[580px] my-0 mx-auto flex items-center justify-around gap-20 lg:gap-40 h-[112px] text-white bg-gradient-to-r bg-repeat from-indigo-800 to-violet-600 border-[1px] border-solid border-gray-200 rounded-md"
                key={index}
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

                {data?.score1 || data?.score1 === 0 ? (
                  <>
                    <div className="flex justify-center text-xl gap-y-4 items-center flex-col">
                      <div>{data.score1}</div>
                      <div>{data.score2}</div>
                    </div>
                    <div className="absolute text-[#ff4d4f] font-medium top-unset lg:top-0 right-28 lg:right-60 flex gap-4 text-lg lg:text-xl">
                      <div>{data.date}</div>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-center text-xl gap-y-4 items-center flex-col">
                    <div>{data.date}</div>
                    <div>{data.hour}</div>
                    {data.cancel && (
                      <div>İptal Edildi</div>
                    )}
                  </div>
                )}
              </div>
            ))
            )}
          </div >
        </div>
      </div>
    </div>
  );
}

export default Draw;
