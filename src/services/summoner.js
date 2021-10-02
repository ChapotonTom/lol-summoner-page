import axios from "axios";

import { config } from "../config";

const baseUri = config.baseUri;

export function getSummonerBasicInfo(summonerName) {
  return axios
    .get(`${baseUri}/summoner/${summonerName}?hl=en`, {
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

export function getSummonerMostInfo(summonerName) {
  return axios
    .get(`${baseUri}/summoner/${summonerName}/mostInfo?hl=en`, {
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

export const summoner = {
  getSummonerBasicInfo,
  getSummonerMostInfo,
};
