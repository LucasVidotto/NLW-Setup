import { Header } from './Components/Header'
import { SummeryTable } from './Components/SummaryTable'
import './Styles/global.css'

export function App() {


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      
      <Header />
      <SummeryTable />

      </div>
    </div>
  )
}


