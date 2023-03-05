import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme ,DarkTheme } from "./Components/Themes"
import GlobalStyle from "./globalStyle"
import Main from './Components/Main'
import AboutPage from './Components/AboutPage'
import BlogPage from './Components/BlogPage'
import MySkillsPage from './Components/MySkillsPage'
import WorkPage from './Components/WorkPage'
import { AnimatePresence } from "framer-motion"
import SoundBar from "./SubComponents/SoundBar"
function App() {
  const location =useLocation()
  return <>

    <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
    <SoundBar />
<AnimatePresence exitBeforeEnter>
<Switch location={location} key={location.pathname} >
        <Route exact path='/' component={Main}/>
        <Route exact path='/About' component={AboutPage}/>
        <Route exact path='/Work' component={WorkPage}/>
        <Route exact path='/MySkills' component={MySkillsPage}/>
        <Route exact path='/Blog' component={BlogPage}/>
      </Switch>
</AnimatePresence>
      
    </ThemeProvider>

    
    </>
    
}

export default App

