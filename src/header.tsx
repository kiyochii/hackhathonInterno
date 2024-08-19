// components/Header.tsx
import Link from "next/link";
import styles from "./styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={centerStyle}>
        <ConnectButton />
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  
  display: "flex",
  justifyContent: "center",
  position: "absolute", 
  left: "20px",         
  top: "20px",          
  
  
};

const centerStyle: React.CSSProperties = {
  textAlign: "center", // Centraliza o conteúdo dentro da div
};

export default Header;
