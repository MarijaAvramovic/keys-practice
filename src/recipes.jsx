import { recipes } from './data.js';

export default function RecipeList() {
    
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => 
        <Recipe {...recipe} key={recipe.id} />
      )}

    </div>
  );
}

function Recipe({ id, name, ingredients}) {
    return(
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </div>
    );
}