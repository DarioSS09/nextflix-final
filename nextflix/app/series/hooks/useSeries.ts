"use client";

import { useEffect, useState } from "react";
import { getSeries } from "../services/series.service";
import { Serie } from "../interfaces/serie.interface";

export const useSeries = () => {
  const [series, setSeries] = useState<Serie[]>([]);

  const fetchSeries = async () => {
    const data = await getSeries();
    setSeries(data);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return {
    series,
    refetch: fetchSeries,
  };
};