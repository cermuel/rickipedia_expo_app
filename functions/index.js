import axios from "axios";

export const getAllCharacters = (setData, url) => {
  axios
    .get(url)
    .then((res) => setData(res.data.results))
    .catch((err) => console.log(err));
};

export const getSingleCharacter = (setData, setError, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => setData(res.data))
    .catch((err) => setError(err));
};

export const getLocation = (url, setData, setError) => {
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => setError(err));
};

export const getEpisode = (url, setData, setError) => {
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => setError(err));
};

export const getResident = (url, setData, setError) => {
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => setError(err));
};

export const truncate = (str, length) => {
  return str?.length > length ? str.substring(0, length - 3) + "..." : str;
};

export const getAllLocations = (setData, url) => {
  axios
    .get(url)
    .then((res) => setData(res.data.results))
    .catch((err) => console.log(err));
};
export const getAllEpisodes = (setData, url) => {
  axios
    .get(url)
    .then((res) => setData(res.data.results))
    .catch((err) => console.log(err));
};
