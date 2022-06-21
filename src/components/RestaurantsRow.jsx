import * as React from "react"
import Chip from "./Chip/Chip"

export function RestaurantsRow({ selectRestaurant, restaurants, selectedRestaurant}) {
    return (
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant) => {
              return (
                <Chip key={restaurant} label={restaurant} onClick={() => selectRestaurant(restaurant)}
                isActive = {selectedRestaurant === restaurant} />)
            })}
          </div>
        </div>
    )
}

export default RestaurantsRow