import {proxy} from 'valtio';
//questo file serve per poter usare valtio
//è tipo come usare context

const store = proxy({
    intro:true,
    //per capire se siamo nella home page
    color:'#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;