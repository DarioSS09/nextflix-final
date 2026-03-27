"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as v from "valibot";
import { useState } from "react";
import { createSerie } from "../services/series.service";
import { serieSchema } from "../interfaces/serie.schema";

export default function SerieForm({ onCreated }: any) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    synopsis: "",
    image: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const result = v.safeParse(serieSchema, form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key as string;
        if (field) fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    await createSerie(form);
    onCreated();

    setForm({
      title: "",
      genre: "",
      synopsis: "",
      image: "",
    });

    setLoading(false);
  };

  return (
    <Dialog.Root>
      {/* BOTÓN */}
      <Dialog.Trigger asChild>
        <button
          style={{
            background: "#e50914",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 20,
          }}
        >
          ➕ Nueva Serie
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* OVERLAY */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 9998,
          }}
        />

        {/* MODAL */}
        <Dialog.Content
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#141414",
            color: "white",
            padding: 25,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 350,
            boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
            zIndex: 9999,
          }}
        >
          {/* TÍTULO (OBLIGATORIO RADIX) */}
          <Dialog.Title
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Crear Serie
          </Dialog.Title>

          {/* INPUTS */}
          {[
            { key: "title", placeholder: "Título" },
            { key: "genre", placeholder: "Género" },
            { key: "synopsis", placeholder: "Sinopsis" },
            { key: "image", placeholder: "URL Imagen" },
          ].map((field) => (
            <div key={field.key}>
              <input
                placeholder={field.placeholder}
                value={(form as any)[field.key]}
                onChange={(e) =>
                  setForm({ ...form, [field.key]: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 6,
                  border: errors[field.key]
                    ? "1px solid red"
                    : "1px solid #333",
                  background: "#1f1f1f",
                  color: "white",
                  outline: "none",
                }}
              />

              {errors[field.key] && (
                <span style={{ color: "#ff4d4d", fontSize: 12 }}>
                  {errors[field.key]}
                </span>
              )}
            </div>
          ))}

          {/* PREVIEW */}
          {form.image && (
            <img
              src={form.image}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          )}

          {/* BOTÓN */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              background: loading ? "#555" : "#e50914",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: 6,
              marginTop: 10,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}