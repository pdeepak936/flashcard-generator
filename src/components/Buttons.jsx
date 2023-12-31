import React, { useState } from 'react';
import jsPDF from 'jspdf';
import flashCard from '../image/flashCard.jpeg';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const Buttons = ({ groupId, cardId, cardData }) => {

    const [showModal, setShowModal] = useState(false);//state for showing modal
    const cardRef = useSelector(state => state.cardRef) //acquiring the card's reference to print
    // function to transform cards into downloadable PDFs
    const pdfGenerate = () => {
        const cardDoc = new jsPDF('landscape', 'px', 'a4', 'false' );
        cardData[groupId].card[cardId].image
            ? cardDoc.addImage(cardData[groupId].card[cardId].image, 'PNG', 20, 90, 300, 250)
            : cardDoc.addImage(flashCard, 'PNG', 20, 90, 300, 250 )
        let textlines = cardDoc.splitTextToSize(cardData[groupId].card[cardId].defination, 250);
        cardDoc.text(350, 110, textlines)
        cardDoc.text(300, 40, cardData[groupId].card[cardId].term)
        cardDoc.save(`${cardData[groupId].card[cardId].term}.pdf`)
        alert("File Downloaded")
    }


    // function for printing a card's contents as a PDF

    const printCard = useReactToPrint({
        content: () => cardRef.current,
        documentTitle: cardData[groupId].card[cardId].term,
    })

    //function to toggle the modal
    const handleClose = (e) => {
        if (e.target.id === 'dismiss' || e.target.id === 'dismiss-x') {
            setShowModal(false)
        }
    }

    return (
        <div>
            <div className='md:absolute xl:relative md:left-10 md:bottom-0  grid justify-center items-center'>
                <div className=' flex flex-col space-y-4 font-semibold '>
                    <button
                        onClick={() => setShowModal(true)}
                         className='hover:bg-blue-500 rounded-md border-black-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-black-400 ' >Share</button>
                    <button
                        onClick={pdfGenerate}
                        className='hover:bg-blue-500 rounded-md border-black-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-black-400 '>Download</button>
                    <button
                        onClick={printCard}
                        className='hover:bg-blue-500 rounded-md border-black-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-black-400 '>Print</button>
                </div>
            </div>
            <Modal groupId={groupId} cardId={cardId} visible={showModal} handleClose={handleClose} />
        </div>
    )
}

export default Buttons;