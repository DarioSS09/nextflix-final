import { useEffect, useState } from "react";

interface About {
  title: string;
  description: string;
  version: string;
  author: string;
}

export const useAbout = () => {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const data: About = {
      title: "NextFLIX",
      description:
        "NextFLIX es una aplicación web para gestionar series. Permite agregar, visualizar y eliminar contenido de forma rápida y sencilla, simulando una plataforma tipo Netflix.",
      version: "1.0.0",
      author: "Rubén Darío",
    };

    setTimeout(() => {
      setAbout(data);
      setLoading(false);
    }, 500);
  }, []);

  return { about, loading };
};