import axios from "axios";

import { config } from "../config";

const baseUri = config.baseUri;

export function getSummonerMatches(summonerName) {
  return axios
    .get(`${baseUri}/summoner/${summonerName}/matches?hl=en`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

export function getSummonerMatchDetail(summonerName, gameId) {
  return axios
    .get(`${baseUri}/summoner/${summonerName}/matchDetail/${gameId}?hl=en`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

export const match = {
  getSummonerMatches,
  getSummonerMatchDetail,
};
