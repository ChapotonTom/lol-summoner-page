import axios from "axios";

export function getItemInformation() {
  return axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/item.json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

export const item = {
  getItemInformation,
};
