
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from 'react-hot-toast'
import MediaIcons from './Components/MediaIcons'


function App() {
return(
  <>
  <div>
  
  <Navbar/>
  <MediaIcons />
  <Home/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
  </div>
  <Toaster/>

 
  </>
)
}

export default App
