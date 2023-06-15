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
        team1: "Emrah",
        logo1: realLogo,
        // score1: 3,
        team2: "Batuhan",
        logo2: liverpoolLogo,
        // score2: 1,
        hour: "13:00",
        date: "20 Haziran",
      },
      {
        team1: "İbrahim",
        logo1: unitedLogo,
        // score1: 3,
        team2: "Asım",
        logo2: romaLogo,
        // score2: 1,
        hour: "13:30",
        date: "20 Haziran",
      },
      {
        team1: "Enes",
        logo1: chealseaLogo,
        // score1: 3,
        team2: "Can",
        logo2: bayernLogo,
        // score2: 1,
        hour: "14:00",
        date: "20 Haziran",
      },
      {
        team1: "Hasan",
        logo1: interLogo,
        // score1: 3,
        team2: "Göksu",
        logo2: cityLogo,
        // score2: 1,
        hour: "14:30",
        date: "20 Haziran",
      },
      {
        team1: "Erkan",
        logo1: barcaLogo,
        // score1: 3,
        team2: "Yüksel",
        logo2: sevillaLogo,
        // score2: 1,
        hour: "15:00",
        date: "20 Haziran",
      },
      {
        team1: "Osman",
        logo1: juventusLogo,
        // score1: 3,
        team2: "Uğur",
        logo2: psgLogo,
        // score2: 1,
        hour: "15:30",
        date: "20 Haziran",
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
