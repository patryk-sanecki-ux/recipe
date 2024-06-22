import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api/api';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
      <div>
        <CssBaseline />
        <Header />
        <Container>
          <SearchBar onSearch={handleSearch} />
          <RecipeList recipes={recipes} />
        </Container>
      </div>
  );
};

export default App;
