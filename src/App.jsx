import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Divider from './components/Divider.jsx'
import Aboutme from './components/Aboutme.jsx'  
import Tabs from './components/Tabs.jsx'
import Infoicon from './assets/icon/information-button.png'


function App() {

  return (
    <>

    <body className='overflow-x-hidden bg-[#ecf0ff] text-black antialiased'>
      <Navbar />
      <Header />
      <Divider id='about' title="About me" icon={Infoicon} />
      <Aboutme />
      <Tabs />

    </body>
    
    </>
  )
}

export default App
