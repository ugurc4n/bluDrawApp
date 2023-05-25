import Draw from "@/draw";
import { Inter } from "next/font/google";
import ScoreBoard from "./scoreboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ScoreBoard />
      <Draw />
    </main>
  );
}
