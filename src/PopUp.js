import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import phoneImg from './images/phone.svg'
const PopUp = () => {
    const { popup, ClosePop } = useGlobalContext();
    return (
        <div className={` ${popup ? ' pop popup' : 'popup'}`}>
            <div className='ig'>
                <iframe src="https://framer.com/embed/Get-Started--2seGpvSgK61RbFHapYg2/eSElIqfoE?highlights=0" allowfullscreen></iframe>
            </div>
            <button className='close-btn' onClick={ClosePop}>
                <FaTimes />
            </button>

        </div>
    )
}

export default PopUp
