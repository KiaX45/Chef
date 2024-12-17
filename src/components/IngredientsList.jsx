import Ingredient from "./Ingredient"
import Button from "./Button"
import img from "../images/cookingLogo.png"


export default function IngredientsList(props) {


   
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        //<li key={ingredient}>{ingredient}</li>
        <Ingredient key={index} id={index} ingredient={ingredient} deleteFunction={props.deleteFunction} />
    ))



    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <div className="ingredients-container" >
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            <img src={img} alt="logo del chef"  />
            </div>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <Button getRecipe={props.getRecipe}>Get a recipe </Button>
            </div>}
        </section>
    )
}