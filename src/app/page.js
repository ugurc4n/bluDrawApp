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
        team1: "Batuhan",
        logo1: liverpoolLogo,
        // score1: 3,
        team2: "Ugur",
        logo2: psgLogo,
        // score2: 0,
        hour: "13:00",
        date: "22 Haziran",
      },
      {
        team1: "Yüksel",
        logo1: sevillaLogo,
        // score1: 3,
        team2: "Osman",
        logo2: juventusLogo,
        // score2: 0,
        hour: "13:30",
        date: "22 Haziran",
      },
      {
        team1: "Göksu",
        logo1: cityLogo,
        // score1: 3,
        team2: "Erkan",
        logo2: barcaLogo,
        // score2: 0,
        hour: "14:00",
        date: "22 Haziran",
      },
      {
        team1: "Can",
        logo1: bayernLogo,
        // score1: 3,
        team2: "Hasan",
        logo2: interLogo,
        // score2: 0,
        hour: "14:30",
        date: "22 Haziran",
      },
      {
        team1: "Asım",
        logo1: romaLogo,
        // score1: 3,
        team2: "Enes",
        logo2: chealseaLogo,
        // score2: 0,
        hour: "14:30",
        date: "22 Haziran",
      },
      {
        team1: "Emrah",
        logo1: realLogo,
        // score1: 3,
        team2: "İbrahim",
        logo2: unitedLogo,
        // score2: 0,
        hour: "15:00",
        date: "22 Haziran",
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
