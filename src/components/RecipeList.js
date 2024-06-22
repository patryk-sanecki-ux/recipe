import React from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';

const RecipeList = ({ recipes }) => {
    const [selectedRecipe, setSelectedRecipe] = React.useState(null);

    const handleClick = (recipe) => setSelectedRecipe(recipe);

    const handleClose = () => setSelectedRecipe(null);

    return (
        <>
            <Grid container justifyContent="center">
                {recipes.map(({ recipe }) => (
                    <RecipeCard key={recipe.uri} recipe={recipe} onClick={() => handleClick(recipe)} />
                ))}
            </Grid>
            {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={handleClose} />}
        </>
    );
};

export default RecipeList;
