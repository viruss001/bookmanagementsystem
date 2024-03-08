import{Outlet} from 'react-router-dom'
import BookContextProvider from './context/BookContextProvider'
import Filter from './component/Filter'

function App() {
  

  return (
    <BookContextProvider>
    <div className="    text-white w-100  d-flex justify-content-center align-items-center" style={{height:"15vh",backgroundColor:"#212121"}}>
    
    <h1 ><b>Books</b></h1>

    </div>
    <div className='container d-flex justify-content-center mt-5'>
      <Filter/>
    </div>
    
    <Outlet/>
    </BookContextProvider>
  )
}

export default App
