import { api } from "./api";

export const getPlayerInfo = async (clanTag: string) => {
  try {
    const response = await api.get(`/players/${encodeURIComponent(clanTag)}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações do jogador:", error);
    throw error;
  }
};
