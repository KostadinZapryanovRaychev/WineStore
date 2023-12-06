import { deleteFetch, getFetch, patchFetch, postFetch, putFetch } from "../utils/fetch";

export const createWine = async (wineData) => {
  try {
    const formData = new FormData();
    Object.entries(wineData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return await postFetch("/wines", formData);
  } catch (error) {
    throw new Error("Error creating wine");
  }
};

export const getAllWines = async () => {
  try {
    return await getFetch("/wines");
  } catch (error) {
    throw new Error("Error fetching all wines");
  }
};

export const getWine = async (wineId) => {
  try {
    return await getFetch(`/wines/${wineId}`);
  } catch (error) {
    throw new Error("Error fetching wine");
  }
};

export const updateWine = async (wineId, wineData) => {
  try {
    return await putFetch(`/wines/${wineId}`, wineData);
  } catch (error) {
    throw new Error("Error updating wine");
  }
};

export const patchWine = async (wineId, wineData) => {
  try {
    return await patchFetch(`/wines/${wineId}`, wineData);
  } catch (error) {
    throw new Error("Error patching wine");
  }
};

export const deleteWine = async (wineId) => {
  try {
    return await deleteFetch(`/wines/${wineId}`);
  } catch (error) {
    throw new Error("Error deleting wine");
  }
};
