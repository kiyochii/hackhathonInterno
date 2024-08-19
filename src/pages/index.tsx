import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/vendor">
        <button> Sou um vendedor</button>
      </Link>
      <div>henrique</div>
      <div>dan</div>
    </div>
  );
};

export default Home;
