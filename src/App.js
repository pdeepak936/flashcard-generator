import React from 'react'
import Navbar from './components/Navbar'
import Main from './Routes/Main'
import Header from './components/Header'

const App = () => {
    return (
        <div className='bg-red-50 w-full h-full'>
            <Header/>
            <Navbar />
            <Main />
        </div>
    )
}

export default App