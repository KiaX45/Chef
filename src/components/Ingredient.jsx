
import { Trash2 } from 'lucide-react'
import styles from '../styles/Ingredient.module.css'


const Ingredient = ({ ingredient, deleteFunction, id }) => {
    return (
        <div className={styles.container}>
        <li className={styles.item}>
            <span className={styles.ingredientName}>{ingredient}</span>
            <button
                onClick={() => deleteFunction(id)}
                className={styles.deleteButton}
            >
                <Trash2 className={styles.trashIcon} />
            </button>
        </li>
        </div>
    )
}


export default Ingredient;