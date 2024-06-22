import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 16px;
`;

const CalorieInfo = styled(Typography)`
  font-weight: bold;
  color: green;
`;

const IngredientInfo = styled(Typography)`
  font-weight: bold;
  color: green;
`;

const RecipeCard = ({ recipe, onClick }) => {
  const servings = recipe.yield || 1;
  const caloriesPerServing = (recipe.calories / servings).toFixed(2);

  return (
      <StyledCard>
        <CardMedia
            component="img"
            height="140"
            image={recipe.image}
            alt={recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.label}
          </Typography>
          <CalorieInfo variant="body2">
            {caloriesPerServing} CALORIES
          </CalorieInfo>
          <IngredientInfo variant="body2">
            {recipe.ingredientLines.length} INGREDIENTS
          </IngredientInfo>
          <Typography variant="body2" color="text.secondary">
            {recipe.source}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onClick}>
            View Recipe
          </Button>
        </CardActions>
      </StyledCard>
  );
}

export default RecipeCard;
