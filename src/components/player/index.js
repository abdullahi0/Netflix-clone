import React,{useState,useContext, createContext} from 'react'
import ReactDom from 'react-dom';
import {Container,Button, Overlay,Inner} from './styles/player';
export const PlayerContext = createContext();
export default function Player({children,...restProps}) {
    const [showPlayer,setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{showPlayer,setShowPlayer}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({src}){
    const {showPlayer,setShowPlayer} = useContext(PlayerContext);

    return showPlayer ? ReactDom.createPortal(
        <Overlay  onClick={() => setShowPlayer(false)}>
            <Inner >
                <video controls auto-play>
                    <source  src={src} />
                </video>
                
            </Inner>
           
        </Overlay>,
        document.body
    ):null;
};

Player.Button = function PlayerButton({children,...restProps}){
    const {showPlayer,setShowPlayer} = useContext(PlayerContext);
    return (
            <Button  onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps}>
                Play
            </Button>
    )
}


