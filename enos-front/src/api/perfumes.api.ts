import axios from "axios";
import { Perfume } from "../types";

const API_URL = "http://localhost:5000/api/perfumes";

export const getPerfumes = async (): Promise<Perfume[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPerfume = async (perfume: Perfume): Promise<Perfume> => {
  const response = await axios.post(API_URL, perfume);
  return response.data;
};

export const deletePerfume = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
