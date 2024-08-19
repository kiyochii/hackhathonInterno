import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showItems, setShowItems] = useState(false); 
  const items = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // pra começa no topo
      alignItems: "center", 
      paddingTop: "100px", 
      }}
    >
      <Link href="/vendor">
        <button>Sou um vendedor</button>
      </Link>

      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowItems(true)} 
        onBlur={() => setTimeout(() => setShowItems(false), 100)} //tem q ter esse tempo para nn bugar
        style={{ margin: "20px 0", padding: "10px", width: "200px" }}
      />

      {showItems && (
        <div style={{ border: "1px solid #ccc", width: "200px" }}>
          {filteredItems.map((item, index) => (
            <div key={index} style={{ padding: "5px", cursor: "pointer" }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
