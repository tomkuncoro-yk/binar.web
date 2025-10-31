import { Outlet } from 'react-router-dom'
import './index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TopBar } from './components/TopBar'

function App() {
  return (
    <div className="min-h-dvh flex flex-col font-[Inter,system-ui,ui-sans-serif]">
      <TopBar />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
