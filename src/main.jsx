import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, PackingList, DrinkList, List} from './App.jsx'
import { Lista  } from './practice.jsx'
import RecipeList from './recipes.jsx'
import Color from './colorstate.jsx'
import Gallery from './sculpture.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
  <Color />
   <RecipeList />
   <Lista />
    <PackingList />
    <DrinkList />
    <List />
  </StrictMode>,
)
