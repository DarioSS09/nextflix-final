"use client";

import AboutCard from "./components/AboutCard";
import { useAbout } from "./hooks/useAbout";

export default function AboutPage() {
  const { about, loading } = useAbout();

  if (loading) {
    return <p style={{ color: "white" }}>Cargando...</p>;
  }

  if (!about) {
    return <p style={{ color: "red" }}>Error al cargar</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <AboutCard
        title={about.title}
        description={about.description}
        version={about.version}
        author={about.author}
      />
    </div>
  );
}