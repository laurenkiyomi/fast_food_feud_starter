import * as React from "react"
import Chip from "./Chip/Chip"

export function CategoriesColumn({selectCategory, categories, selectedCategory}) {
    return (
        <div className="CategoriesColumn col">
            <div className="categories options">
                <h2 className="title">Categories</h2>
                {categories.map((category) => {
                return(
                <Chip key={category} label={category} onClick={() => selectCategory(category)} 
                isActive = {selectedCategory === category}/>)
                })}
            </div>
        </div>
    )
}

export default CategoriesColumn