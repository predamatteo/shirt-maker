import { useEffect, useState } from "react"
import React from 'react'
import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config/config';
import state from "../store";
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { CustomButton, AIPicker, ColorPicker, FilePicker, Tab } from '../components'

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('')
  const [prompt, setPrompt] = useState('')//per l'AI
  const [generatingImg, setGeneratingImg] = useState(false)
  const [activeEditorTab, setActiveEditorTab] = useState('')
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  //show tab content depending on the activeTab 
  const generateTabContent = () => {
    switch(activeEditorTab){
      case 'colorpicker':
          return <ColorPicker/>
      case 'filepicker':
          return <FilePicker/>
      case 'aipicker':
          return <AIPicker/>
      default:
          null;
    }
  }
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 left z-10"{...slideAnimation('left')}>
            {/*tab e tab container */}
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {setActiveEditorTab(tab.name)}} />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          {/*Go Back Button*/}
          <motion.div className="absolute z-20 top-5 right-5" {...fadeAnimation}>
            <CustomButton type="filled" title="Go Back" handleClick={() => state.intro = true} customStyles='w-foit px-4 py-2.5 font-bold text-sm' />
          </motion.div>
          {/* extra feature */}
          <motion.div className="filtertabs-container" {...slideAnimation('up')}>
            {FilterTabs.map((tab) => (
              <Tab key={tab.name} tab={tab} handleClick={() => { }} isFilerTab isActiveTab=""/>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Customizer