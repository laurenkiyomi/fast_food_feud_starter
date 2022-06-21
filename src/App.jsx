import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import CategoriesColumn from "./components/CategoriesColumn"
import RestaurantsRow from "./components/RestaurantsRow"
import MenuDisplay from "./components/MenuDisplay"
import DataSource from "./components/DataSource"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  // constants!
  const [selectedCategory, setCategory] = React.useState("")
  const [selectedRestaurant, setRestaurant] = React.useState("")
  const [selectedMenuItem, setMenuItem] = React.useState(null)
  const [instruction, setInstruction] = React.useState(appInfo.instructions.start)

  const currentMenuItems = data.filter((item) => {
    return item.food_category === selectedCategory && item.restaurant === selectedRestaurant
  })
    

  const selectCategory = (category) => {
    if (selectedRestaurant === "") {
      setInstruction(appInfo.instructions.onlyCategory)
    }

    else {
      setInstruction(appInfo.instructions.noSelectedItem)
    }
    setMenuItem(null)
    setCategory(category)

  }

  const selectRestaurant = (restaurant) => {
    if (selectedCategory === "") {
      setInstruction(appInfo.instructions.onlyRestaurant)
    }

    else {
      setInstruction(appInfo.instructions.noSelectedItem)
    }
    setMenuItem(null)
    setRestaurant(restaurant)
  }

  const selectMenuItem = (menuItem) => {
    setInstruction(appInfo.instructions.allSelected)
    setMenuItem(menuItem)
  }

  const deselectMenuItem = () => {
    setInstruction(appInfo.instructions.noSelectedItem)
    setMenuItem(null)
  }

  const deselectRestaurant = () => {
    deselectMenuItem()
    if (selectedCategory === "") {
      setInstruction(appInfo.instructions.start)
    }

    else {
      setInstruction(appInfo.instructions.noSelectedItem)
    }

    setRestaurant("")
  }

  const deselectCategory = () => {
    deselectMenuItem()
    if (selectedRestaurant === "") {
      setInstruction(appInfo.instructions.start)
    }

    else {
      setInstruction(appInfo.instructions.noSelectedItem)
    }

    setCategory("")
  }

  return (
    <main className="App">
      <CategoriesColumn selectCategory={selectCategory} categories={categories} selectedCategory={selectedCategory}/>
      <div className="container">
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        <RestaurantsRow selectRestaurant={selectRestaurant} restaurants={restaurants} selectedRestaurant={selectedRestaurant} />
        <Instructions instructions={instruction}/>
        <MenuDisplay selectMenuItem={selectMenuItem} currentMenuItems={currentMenuItems} selectedMenuItem={selectedMenuItem}/>
        <DataSource appInfo={appInfo}/>
      </div>
    </main>
  )
}

export default App
