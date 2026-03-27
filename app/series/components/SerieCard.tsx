"use client";

import { Serie } from "../interfaces/serie.interface";

export default function SerieCard({
  serie,
  onDelete,
}: {
  serie: Serie;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="card">
      {/* IMAGEN: Altura fija para que todas las fotos midan lo mismo */}
      <div className="image-container">
        <img
          src={serie.image || "https://via.placeholder.com/300x200?text=Sin+Imagen"}
          alt={serie.title}
          className="card-img"
        />
      </div>

      {/* CONTENIDO: Flexbox para alinear el botón al fondo */}
      <div className="card-content">
        <h3 className="card-title">{serie.title || "Sin título"}</h3>

        <p className="card-genre">{serie.genre || "Sin género"}</p>

        <p className="card-synopsis">
          {serie.synopsis || "Sin descripción"}
        </p>

        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(serie.id);
          }}
        >
          🗑 Eliminar
        </button>
      </div>

      <style jsx>{`
        /* LA TARJETA: Tamaño fijo para que todas sean clones */
        .card {
          background: #141414;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          transition: transform 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 450px; /* Altura total idéntica */
          width: 100%;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.8);
        }

        .image-container {
          width: 100%;
          height: 180px; /* Imagen siempre de 180px */
          flex-shrink: 0;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1; /* Ocupa el resto de la tarjeta */
        }

        .card-title {
          margin: 0;
          color: white;
          font-size: 18px;
          font-weight: bold;
          height: 44px; /* Espacio para 2 líneas */
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .card-genre {
          color: #e50914;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
        }

        .card-synopsis {
          font-size: 13px;
          color: #ccc;
          margin: 0;
          line-height: 1.4;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Máximo 3 líneas */
          -webkit-box-orient: vertical;
          flex-grow: 1; /* Empuja el botón hacia abajo */
        }

        .delete-btn {
          background: #e50914;
          border: none;
          padding: 10px;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          font-weight: bold;
          margin-top: auto; /* Se pega al fondo de la tarjeta */
          transition: background 0.2s;
        }

        .delete-btn:hover {
          background: #ff1f2a;
        }

        /* RESPONSIVE: Esto debe ir en el contenedor padre de las cartas, 
           pero para que funcione aquí, lo aplicamos al componente */
        @media (max-width: 600px) {
          .card { height: 400px; }
          .image-container { height: 150px; }
          .card-title { font-size: 16px; }
        }
      `}</style>
    </div>
  );
}