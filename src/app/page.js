import Draw from "@/draw";
import { Inter } from "next/font/google";
import ScoreBoard from "./scoreboard";
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

const inter = Inter({ subsets: ["latin"] });

const league = [
  {
    matches: [
      {
        team1: "İbrahim",
        logo1: unitedLogo,
        // score1: 0,
        team2: "Enes",
        logo2: chealseaLogo,
        // score2: 3,
        hour: "15:30",
        date: "6 Temmuz",
      },
      {
        team1: "Emrah",
        logo1: realLogo,
        // score1: 0,
        team2: "Hasan",
        logo2: interLogo,
        // score2: 3,
        hour: "15:00",
        date: "6 Temmuz",
      },
      {
        team1: "Asım",
        logo1: romaLogo,
        // score1: 0,
        team2: "Erkan",
        logo2: barcaLogo,
        // score2: 3,
        hour: "14:30",
        date: "6 Temmuz",
      },
      {
        team1: "Can",
        logo1: bayernLogo,
        // score1: 0,
        team2: "Osman",
        logo2: juventusLogo,
        // score2: 3,
        hour: "14:00",
        date: "6 Temmuz",
      },
      {
        team1: "Göksu",
        logo1: cityLogo,
        // score1: 0,
        team2: "Uğur",
        logo2: psgLogo,
        // score2: 3,
        hour: "13:30",
        date: "6 Temmuz",
      },
      {
        team1: "Batuhan",
        logo1: liverpoolLogo,
        // score1: 0,
        team2: "Yüksel",
        logo2: sevillaLogo,
        // score2: 3,
        hour: "13:00",
        date: "6 Temmuz",
      },
    ]
  }
];

export default function Home() {
  return (
    <main>
      <ScoreBoard />
      <Draw league={league} />
    </main>
  );
}
