import React from "react";
import { useAppSelector } from "../hooks/redux";

export function FavouritePage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    <p className="text-center">No items.</p>;
  }

  return (
    <div className="flex justify-center items-center">
      <ul className="list-none">
        {favourites.map((f) => (
          <li key={f} className="m-2 border-2 rounded">
            <a href={f} target="_blank" rel="noreferrer">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
