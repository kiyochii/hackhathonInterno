import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showItems, setShowItems] = useState(false); // Estado para controlar a visibilidade da lista
  const items = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Conteúdo começa no topo
      alignItems: "center", // Centraliza horizontalmente
      paddingTop: "100px", // Ajusta a posição verticalmente
      minHeight: "100vh", // Garante que o div ocupe a altura da tela
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
        onFocus={() => setShowItems(true)} // Mostrar itens ao focar no campo
        onBlur={() => setTimeout(() => setShowItems(false), 100)} // Ocultar itens ao desfocar o campo (com um pequeno atraso para evitar fechar antes de clicar)
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
