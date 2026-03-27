import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"
    }}>

      {/* LOGO */}
      <h1 style={{
        fontSize: "3rem",
        color: "red",
        marginBottom: "20px"
      }}>
        🎬 NextFLIX
      </h1>

      {/* TITULO */}
      <h2 style={{
        fontSize: "2rem",
        maxWidth: "600px"
      }}>
        Gestiona tus series favoritas en un solo lugar
      </h2>

      {/* DESCRIPCIÓN */}
      <p style={{
        marginTop: "15px",
        maxWidth: "500px",
        color: "#ccc"
      }}>
        Crea, organiza y elimina series fácilmente.
        NextFLIX te permite administrar tu colección
        de contenido de forma rápida y moderna.
      </p>

      {/* BOTONES */}
      <div style={{
        marginTop: "30px",
        display: "flex",
        gap: "20px"
      }}>
        <Link href="/series">
          <button style={{
            padding: "12px 25px",
            background: "red",
            border: "none",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px"
          }}>
            Ver Series
          </button>
        </Link>

        <Link href="/about">
          <button style={{
            padding: "12px 25px",
            background: "#333",
            border: "none",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px"
          }}>
            Sobre el proyecto
          </button>
        </Link>
      </div>

      {/* SECCIÓN EXTRA */}
      <div style={{
        marginTop: "60px",
        maxWidth: "700px"
      }}>
        <h3 style={{ marginBottom: "10px" }}>
          ¿Qué puedes hacer?
        </h3>

        <ul style={{
          listStyle: "none",
          padding: 0,
          color: "#aaa"
        }}>
          <li>✔ Añadir nuevas series</li>
          <li>✔ Ver todas tus series</li>
          <li>✔ Eliminar series fácilmente</li>
        </ul>
      </div>

    </main>
  );
}