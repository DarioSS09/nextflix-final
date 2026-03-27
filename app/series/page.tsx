"use client";

import { useSeries } from "./hooks/useSeries";
import { deleteSerie } from "./services/series.service";
import SerieCard from "./components/SerieCard";
import SerieForm from "./components/SerieForm";

export default function SeriesPage() {
  const { series, refetch } = useSeries();

  const handleDelete = async (id: string) => {
    await deleteSerie(id);
    refetch();
  };

  return (
    <main style={{
      padding: 20,
      background: "black",
      minHeight: "100vh",
      color: "white"
    }}>
      <h1>🎬 Series</h1>

      <SerieForm onCreated={refetch} />

      <div style={{
        marginTop: 20,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }}>
        {series.map((serie) => (
          <SerieCard
            key={serie.id}
            serie={serie}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}