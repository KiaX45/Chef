import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../logic/ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )

    const deleteFunction = (key) => {
        console.log(key)
        setIngredients(prevIngredients => {
           return prevIngredients.filter((ingredient, index) => index !== key)
        })

    }



    const [recipe, setRecipe] = React.useState("")

    const inputRef = React.useRef(null)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        inputRef.current.value = ""
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    deleteFunction={deleteFunction}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}