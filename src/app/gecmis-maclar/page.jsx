import Draw from '@/draw'
import React from 'react'
import Link from 'next/link';


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

const league = [
  {
    matches: [
      {
        team1: "Can",
        logo1: bayernLogo,
        score1: 3,
        team2: "Batuhan",
        logo2: liverpoolLogo,
        score2: 1,
        hour: "13:00",
        date: "6 Haziran",
      },
      {
        team1: "Asım",
        logo1: romaLogo,
        score1: 1,
        team2: "Göksu",
        logo2: cityLogo,
        score2: 3,
        hour: "13:30",
        date: "6 Haziran",
      },
      {
        team1: "Emrah",
        logo1: realLogo,
        score1: 4,
        team2: "Yüksel",
        logo2: sevillaLogo,
        score2: 3,
        hour: "14:00",
        date: "6 Haziran",
      },
      {
        team1: "İbrahim",
        logo1: unitedLogo,
        score1: 0,
        team2: "Uğur",
        logo2: psgLogo,
        score2: 3,
        hour: "14:30",
        date: "6 Haziran",

      },
      {
        team1: "Enes",
        logo1: chealseaLogo,
        score1: 3,
        logo2: juventusLogo,
        team2: "Osman",
        score2: 1,
        hour: "15:00",
        date: "6 Haziran",

      },
      {
        team1: "Hasan",
        logo1: interLogo,
        score1: 2,
        team2: "Erkan",
        logo2: barcaLogo,
        score2: 3,
        hour: "15:30",
        date: "6 Haziran",
      },
      {
        team1: "Batuhan",
        logo1: liverpoolLogo,
        score1: 0,
        team2: "Erkan",
        logo2: barcaLogo,
        score2: 3,
        hour: "13:00",
        date: "8 Haziran",
      },
      {
        team1: "Osman",
        logo1: juventusLogo,
        score1: 0,
        team2: "Hasan",
        logo2: interLogo,
        score2: 3,
        hour: "13:30",
        date: "8 Haziran",
      },
      {
        team1: "Uğur",
        logo1: psgLogo,
        score1: 4,
        team2: "Enes",
        logo2: chealseaLogo,
        score2: 1,
        hour: "14:00",
        date: "8 Haziran",
      },
      {
        team1: "Yüksel",
        logo1: sevillaLogo,
        score1: 3,
        team2: "İbrahim",
        logo2: unitedLogo,
        score2: 0,
        hour: "14:30",
        date: "8 Haziran",
      },
      {
        team1: "Göksu",
        logo1: cityLogo,
        score1: 2,
        team2: "Emrah",
        logo2: realLogo,
        score2: 1,
        hour: "15:00",
        date: "8 Haziran",
      },
      {
        team1: "Can",
        logo1: bayernLogo,
        score1: 5,
        team2: "Asım",
        logo2: romaLogo,
        score2: 0,
        hour: "15:30",
        date: "8 Haziran",
      },
      {
        team1: "Asım",
        logo1: romaLogo,
        score1: 3,
        team2: "Batuhan",
        logo2: liverpoolLogo,
        score2: 0,
        hour: "13:00",
        date: "13 Haziran",
      },
      {
        team1: "Emrah",
        logo1: realLogo,
        score1: 3,
        team2: "Can",
        logo2: bayernLogo,
        score2: 0,
        hour: "13:30",
        date: "13 Haziran",
      },
      {
        team1: "İbrahim",
        logo1: unitedLogo,
        score1: 0,
        team2: "Göksu",
        logo2: cityLogo,
        score2: 3,
        hour: "14:00",
        date: "13 Haziran",
      },
      {
        team1: "Enes",
        logo1: chealseaLogo,
        score1: 1,
        team2: "Yüksel",
        logo2: sevillaLogo,
        score2: 0,
        hour: "14:30",
        date: "13 Haziran",
      },
      {
        team1: "Hasan",
        logo1: interLogo,
        score1: 3,
        team2: "Uğur",
        logo2: psgLogo,
        score2: 3,
        hour: "15:00",
        date: "13 Haziran",
      },
      {
        team1: "Erkan",
        logo1: barcaLogo,
        score1: 0,
        team2: "Osman",
        logo2: juventusLogo,
        score2: 0,
        hour: "15:30",
        date: "13 Haziran",
      },
      {
        team1: "Batuhan",
        logo1: liverpoolLogo,
        score1: 3,
        team2: "Osman",
        logo2: juventusLogo,
        score2: 2,
        hour: "13:00",
        date: "15 Haziran",
      },
      {
        team1: "Uğur",
        logo1: psgLogo,
        score1: 0,
        team2: "Erkan",
        logo2: barcaLogo,
        score2: 2,
        hour: "13:30",
        date: "15 Haziran",
      },
      {
        team1: "Yüksel",
        logo1: sevillaLogo,
        score1: 1,
        team2: "Hasan",
        logo2: interLogo,
        score2: 9,
        hour: "14:00",
        date: "15 Haziran",
      },
      {
        team1: "Göksu",
        logo1: cityLogo,
        score1: 3,
        team2: "Enes",
        logo2: chealseaLogo,
        score2: 0,
        hour: "14:30",
        date: "15 Haziran",
      },
      {
        team1: "Can",
        logo1: bayernLogo,
        score1: 3,
        team2: "İbrahim",
        logo2: unitedLogo,
        score2: 0,
        hour: "15:00",
        date: "15 Haziran",
      },
      {
        team1: "Asım",
        logo1: romaLogo,
        score1: 4,
        team2: "Emrah",
        logo2: realLogo,
        score2: 2,
        hour: "15:30",
        date: "15 Haziran",
      },
    ]
  },
]

function PreviousMatch() {
  return (
    <div className='flex flex-col items-center mt-4'>
      <Link className="text-[#7939E9] bg-white text-sm lg:text-lg font-bold flex justify-center items-center h-10 w-40 lg:px-4 rounded-lg" href='/'>Anasayfa</Link>
      <Draw league={league} />
    </div>
  )
}

export default PreviousMatch