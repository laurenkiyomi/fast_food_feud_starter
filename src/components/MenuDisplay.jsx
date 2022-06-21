import * as React from "react"
import Chip from "./Chip/Chip"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel"

export function MenuDisplay({selectMenuItem, currentMenuItems, selectedMenuItem}) {
    return (
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((menuItem) => {
              return (
                <Chip key={menuItem.item_name} label={menuItem.item_name} onClick={() => selectMenuItem(menuItem)}
                isActive = {selectedMenuItem === menuItem}/>)
            })}  
          </div> 

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
           {selectedMenuItem ? <NutritionalLabel item={selectedMenuItem}/> : null}
          </div>
        </div>      
    )
}

export default MenuDisplay

