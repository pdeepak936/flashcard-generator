import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { localCard } from '../redux/actions/card'
import FlashCardCarousel from '../components/FlashCardCarousel'
import CreateFlashCard from '../pages/CreateFlashCard'
import MyFlashCard from '../pages/MyFlashCard'
import FlashCardDetails from '../pages/FlashCardDetails'


const Main = () => {
    const dispatch = useDispatch();

   // This function is used for getting data from local storage on load
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('card'))
        if (localData)
            dispatch(localCard(localData))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='bg-red-50'>
            <Routes>
                <Route path={'/'} element={< CreateFlashCard/>} />
                <Route path={'/card'} element={<MyFlashCard />} />
                <Route path='/card/:id' element={<FlashCardDetails />}>
                    <Route path={':index'} element={<FlashCardCarousel />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Main