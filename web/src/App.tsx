import './Styles/global.css'
import './Components/lib/dayjs'
import { Header } from './Components/Header'
import { SummeryTable } from './Components/SummaryTable'


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


