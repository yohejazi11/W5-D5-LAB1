
import './App.css'
import Header from './component/header'
import Card from './component/Card'
import Crouser from './component/Crouser'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex flex-col justify-center items-center pt-16' >
        <div className="w-full flex justify-center gap-8 items-center " >
          <Crouser></Crouser>
          <img className=' w-[20vw] h-[40vh] border-stone-200		 border-4' src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        </div>
        <h1 className='self-center w-[80vw] border-b-4 pt-5	'>TOP CATEGORIES</h1>
        <div className='flex gap-4 flex-wrap justify-center mt-5' > 
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>

          </Card>
        </div>
        <div className='h-[30vh] w-[80vw] border-stone-200		 border-4 mt-6 mb-6'>
          <img className='w-full h-[30vh]'  src='https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        </div>
      </div>
    </>
  )
}

export default App
