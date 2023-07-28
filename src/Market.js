import './Market.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Modal from './Modal';
import FruitsPage from './FruitsPage';
import MeatsPage from './MeatsPage';
import SnacksPage from './SnacksPage';

const Market = () => {
    const [activeItem, setActiveItem] = useState({});

    const showModal = (name, category, quantity, image, price, desc) => {
        setActiveItem({name, category, quantity, image, price, desc});
    }
    const clearItem = () => {
        setActiveItem({});
    }
    return (
        <div className='Market'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><FruitsPage showmodal={showModal} /><MeatsPage showmodal={showModal} /><SnacksPage showmodal={showModal} /></>} />
                    <Route path="/fruits" element={<FruitsPage showmodal={showModal}/>} />
                    <Route path="/meats" element={<MeatsPage showmodal={showModal} />} />
                    <Route path="/snacks" element={<SnacksPage showmodal={showModal} />} />
                </Routes>
            </BrowserRouter>
            <Modal resetModal={clearItem} category={activeItem.category} name={activeItem.name} image={activeItem.image} price={activeItem.price} quantity={activeItem.quantity} details={activeItem.desc} />  
        </div>
    )
}

export default Market;