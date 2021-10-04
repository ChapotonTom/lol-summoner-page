import React, { useEffect, useState } from "react";
import "../summonerGamesList.css";

import iconBuildVictory from "../../../../../../../../../assets/images/icon-build-victory.png";
import iconBuildDefeat from "../../../../../../../../../assets/images/icon-build-defeat.png";
import iconWardVictory from "../../../../../../../../../assets/images/icon-ward-blue@2x.png";

import iconWardDefeat from "../../../../../../../../../assets/images/icon-ward-red@2x.png";

const insertEmptyItems = (items) => {
  const emptyItem = { imageUrl: false };
  const formattedItems = items;
  formattedItems.splice(2, 0, emptyItem);
  while (formattedItems.length < 7) {
    formattedItems.push(emptyItem);
  }
  return formattedItems;
};

const getEmptyItemBackground = (isWin, needRenew) => {
  if (needRenew) return "#979797";
  else if (isWin) return "#7aa5c3";
  else return "#cb9e9a";
};

const displayItems = (items, displayBuildIcon, needRenew, isWin) => {
  const emptyItemBackground = getEmptyItemBackground(isWin, needRenew);

  return (
    <div className="container game-inventory-items-line-container">
      {items.map((item, index) => {
        if (item.imageUrl) {
          return (
            <img
              key={item.imageUrl + index}
              alt="item"
              src={item.imageUrl}
              className="game-inventory-item-picture"
            />
          );
        } else {
          return (
            <div
              className="game-inventory-item-picture"
              style={{ backgroundColor: emptyItemBackground }}
            ></div>
          );
        }
      })}
      {displayBuildIcon && !needRenew && (
        <img
          alt="item"
          src={isWin ? iconBuildVictory : iconBuildDefeat}
          className="game-inventory-item-picture"
        />
      )}
    </div>
  );
};

export const GameInventory = (props) => {
  const { items, wards, isWin, needRenew } = props;

  const [formattedItems, setFormattedItems] = useState([]);
  const totalWards = wards.sightWardsBought + wards.visionWardsBought;

  useEffect(() => {
    setFormattedItems(insertEmptyItems(items));
  }, [items]);

  console.log(wards);
  return (
    <div className="column py-1 ml-5 mr-0 pr-0 is-2">
      <div className="container mt-2">
        <div className="game-inventory-items-container">
          {displayItems(formattedItems.slice(0, 4), false, needRenew, isWin)}
          {displayItems(formattedItems.slice(4, 7), true, needRenew, isWin)}
        </div>
        {totalWards > 0 && !needRenew && (
          <div className="mt-2 game-inventory-ward">
            <img
              alt="ward"
              src={isWin ? iconWardVictory : iconWardDefeat}
              className="game-inventory-ward-picture"
            />
            <div className="game-inventory-ward-str">
              Control Ward {totalWards}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameInventory;
