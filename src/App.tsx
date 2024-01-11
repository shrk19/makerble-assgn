import './App.css'
import Footer from './components/shared/Footer'
import LayoutLeft from './components/shared/LayoutLeft'
import LayoutMiddle from './components/shared/LayoutMiddle'
import LayoutRight from './components/shared/LayoutRight'
import Navbar from './components/shared/Navbar'


function App() {

  return (
    <>
    <Navbar/>
    <div className='min-h-screen h-fit flex flex-col md:flex-row '>
      <LayoutLeft/> <LayoutMiddle/> <LayoutRight/> 
    </div>
    <Footer/>
    </>
    
  )
}

export default App
