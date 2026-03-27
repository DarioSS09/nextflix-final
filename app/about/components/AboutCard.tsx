"use client";

export default function AboutCard({
  title,
  description,
  version,
  author,
}: {
  title: string;
  description: string;
  version: string;
  author: string;
}) {
  return (
    <div
      style={{
        background: "#141414",
        padding: 20,
        borderRadius: 14,
        boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
        maxWidth: 600,
        margin: "40px auto",
        color: "white",
      }}
    >
      <h2 style={{ color: "#e50914", marginBottom: 10 }}>{title}</h2>

      <p style={{ marginBottom: 20, lineHeight: 1.6 }}>{description}</p>

      <hr style={{ borderColor: "#333", marginBottom: 15 }} />

      <p>
        <b>Versión:</b> {version}
      </p>
      <p>
        <b>Autor:</b> {author}
      </p>
    </div>
  );
}