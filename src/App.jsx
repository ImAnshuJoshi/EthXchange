import {Navbar , Welcome , Footer , Loader , Services , Transactions} from './components/index'

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>  
      Hello world!
    </h1>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default App
