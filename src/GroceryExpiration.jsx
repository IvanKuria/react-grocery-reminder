import React, { useState } from 'react'

function GroceryExpiration() {

    const [groceryItemList, setGroceryItemList] = useState([])
    const [newGroceryItem , setNewGrcoeryItem] = useState("")
    const [newDate, setNewDate] = useState("")    

    // 1. need a function that will retrieve user input(grocery item)
    function retrieveGroceryItem(event){
        setNewGrcoeryItem(event.target.value)
    }

    // 2. need a function that will retrieve user date input(MM/DD/YYYY)
    function retrieveDate(event){
        setNewDate(event.target.value)
    }

    // 3. need a function that will add the user input to the array of items
    function addGroceryItem(){
        setGroceryItemList(g => [...g, {name: newGroceryItem, date: newDate}])
        setNewGrcoeryItem("")
        setNewDate("")
    }

    // 4. need a function that can delete an item from the list
    function deleteGroceryItem(index){
        const updateGroceryItems = groceryItemList.filter((_, i) => i !== index)
        setGroceryItemList(updateGroceryItems)

    }

    // 5. need a function that will retrieve the date from the user

  return (
    <>
        <div className="elements-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter grocery item"
                    onChange={retrieveGroceryItem}
                    value={newGroceryItem.charAt(0).toUpperCase() + newGroceryItem.slice(1)}>  
                </input>
                <input
                    type="text"
                    placeholder="Date(MM/DD/YYYY)"
                    onChange={retrieveDate}
                    value={newDate}>  
                </input>
                <button 
                    onClick={addGroceryItem}
                    className="add-button">
                    Add
                </button>
            </div>
            <ol>
                {groceryItemList.map((groceryItem, index) => 
                    <li key={index}>
                        {groceryItem.name} {groceryItem.date}
                        <button 
                            onClick={() => {deleteGroceryItem(index)}}
                            className="delete-button">
                            Delete
                        </button>
                        </li>
                    )}
            </ol>
        </div>
    </>
    
  )
}

export default GroceryExpiration