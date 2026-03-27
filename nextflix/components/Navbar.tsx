"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "black",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #222"
    }}>
      
      {/* LOGO */}
      <h1 style={{
        color: "red",
        fontSize: "1.5rem"
      }}>
        🎬 NextFLIX
      </h1>

      {/* LINKS */}
      <div style={{
        display: "flex",
        gap: "20px"
      }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </Link>

        <Link href="/series" style={{ color: "white", textDecoration: "none" }}>
          Series
        </Link>

        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
      </div>

    </nav>
  );
}