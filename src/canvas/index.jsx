import { Canvas } from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt';
import  Backdrop  from './Backdrop';
import CameraRig from './CameraRig'


const CanvasModel = () => {
  return (
    /*all'interno di canvas non è possibile utilizzare div o altr elementi non facenti parti dell'albero della librerie THREE */
    <Canvas 
    shadows 
    className="w-full max-w-full h-full transition-all ease-in" 
    camera={{position:[0,0,0],fov: 25}} 
    gl={{preserveDrawingBuffer: true}}>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      <CameraRig>

        <Backdrop/>

        <Center>
          <Shirt/>
        </Center>

      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel