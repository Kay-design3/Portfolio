import './App.css'
import Navbar from './components/Navbar/navbar' 
import Home from './components/Home/home'
import Skill from './components/Skillset/skill'
import Projects from './components/Projects/projects'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Skill/>
      <Projects/>
    </>
  )
}

export default App
