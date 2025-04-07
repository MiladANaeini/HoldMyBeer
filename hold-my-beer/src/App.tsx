
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'

function App() {

  return (
    <>
       <BrowserRouter>
          <Layout />
        </BrowserRouter>
    </>
  )
}

export default App
