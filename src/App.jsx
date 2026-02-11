import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen flex">
      <NavBar />

      {/* flex justify-center items-center --> essa porra aqui deixa tudo no centro (horizontal e vertical) e tem que ter o h-screen para dizer que a altura e maxima */}
      <main className="flex-1 min-h-screen" >
        <Outlet />
      </main>
    </div>
  )
}

export default App