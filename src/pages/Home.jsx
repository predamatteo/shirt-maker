import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headTextAnimation, headContentAnimation, slideAnimation } from '../config/motion';
import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);
    //facciamo uno snapshot dello state corrente
    return (
        <div>Home</div>
    )
}

export default Home