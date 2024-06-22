import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import styled from 'styled-components';

const IngredientList = styled(List)`
  max-height: 150px;
  overflow: auto;
  margin-bottom: 20px;
`;

const NutritionalTable = styled(Table)`
  margin-top: 20px;
`;

const NutritionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const NutritionLabel = styled(Typography)`
  font-weight: bold;
`;

const NutritionValue = styled(Typography)`
  font-size: 24px;
  color: #333;
`;

const DietLabels = styled(Typography)`
  margin-top: 10px;
  color: #777;
  text-align: center;
`;

const NutrientBarContainer = styled.div`
  display: flex;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  background-color: #ddd;
  margin-bottom: 8px;
`;

const NutrientBar = styled.div`
  height: 100%;
`;

const FatBar = styled(NutrientBar)`
  background-color: #FF5722;
  width: ${({value}) => value}%;
`;

const ProteinBar = styled(NutrientBar)`
  background-color: #8BC34A;
  width: ${({value}) => value}%;
`;

const CarbBar = styled(NutrientBar)`
  background-color: #FFEB3B;
  width: ${({value}) => value}%;
`;

const RecipeDetails = ({recipe, onClose}) => {
  const servings = recipe.yield || 1;
  const caloriesPerServing = (recipe.calories / servings).toFixed(2);
  const {FAT, PROCNT, CHOCDF} = recipe.totalNutrients;

  const fatPerServing = FAT.quantity.toFixed(2);
  const proteinPerServing = PROCNT.quantity.toFixed(2);
  const carbsPerServing = CHOCDF.quantity.toFixed(2);

  const fatDVPercentage = recipe.totalDaily.FAT.quantity.toFixed(1);
  const proteinDVPercentage = recipe.totalDaily.PROCNT.quantity.toFixed(1);
  const carbsDVPercentage = recipe.totalDaily.CHOCDF.quantity.toFixed(1);

  return (
      <Dialog open={!!recipe} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>{recipe.label}</DialogTitle>
        <DialogContent>
          <img src={recipe.image} alt={recipe.label}
               style={{width: '100%', marginBottom: '20px'}}/>

          <Typography variant="h6" component="div" gutterBottom>
            Ingredients ({recipe.ingredientLines.length})
          </Typography>
          <IngredientList>
            {recipe.ingredientLines.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ingredient}/>
                </ListItem>
            ))}
          </IngredientList>

          <Button
              variant="contained"
              color="primary"
              onClick={() => window.open(recipe.url, '_blank')}
              style={{marginBottom: '20px'}}
          >
            Instructions
          </Button>

          <NutritionInfo>
            <NutritionLabel variant="h6">Nutrition</NutritionLabel>
            <NutritionValue
                variant="h4">{caloriesPerServing} Calories</NutritionValue>
            <Typography variant="body2">Calories per serving</Typography>
            <Typography variant="body2">{(100 * caloriesPerServing
                / 2000).toFixed(2)}% Daily Value*</Typography>
            <Typography variant="body2">Servings: {servings}</Typography>
            <DietLabels variant="body2">
              {recipe.dietLabels.join(', ')}
            </DietLabels>
          </NutritionInfo>

          <div>
            <Typography variant="body2" color="text.secondary">
              Fat: {fatPerServing}g ({fatDVPercentage}% DV)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Protein: {proteinPerServing}g ({proteinDVPercentage}% DV)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Carbohydrates: {carbsPerServing}g ({carbsDVPercentage}% DV)
            </Typography>
            <NutrientBarContainer>
              <FatBar value={fatDVPercentage}/>
              <ProteinBar value={proteinDVPercentage}/>
              <CarbBar value={carbsDVPercentage}/>
            </NutrientBarContainer>
          </div>

          <NutritionalTable component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>Nutrient</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipe.totalNutrients && Object.keys(recipe.totalNutrients).map(
                  (key) => (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                          {recipe.totalNutrients[key].label}
                        </TableCell>
                        <TableCell align="right">
                          {parseFloat(
                              recipe.totalNutrients[key].quantity).toFixed(
                              2)} {recipe.totalNutrients[key].unit}
                        </TableCell>
                      </TableRow>
                  ))}
            </TableBody>
          </NutritionalTable>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default RecipeDetails;
