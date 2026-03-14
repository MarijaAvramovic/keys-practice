import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, PackingList, DrinkList, List} from './App.jsx'
import { Lista  } from './practice.jsx'
import RecipeList from './recipes.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <RecipeList />
   <Lista />
    <PackingList />
    <DrinkList />
    <List />
  </StrictMode>,
)
