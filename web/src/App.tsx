
import './Styles/global.css'
import logoImage from './assets/logo.svg'
export function App() {


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logoImage} alt="Imagem Logo" />
        <button type="button">Novo habito</button>
      </div>

      </div>
    </div>
  )
}


