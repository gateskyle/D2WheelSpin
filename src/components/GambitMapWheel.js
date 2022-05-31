import React, { useState } from 'react'
import WheelComponent from 'react-wheel-of-prizes'
import './Gambit.css'
import EmeraldCoast from '../images/EmeraldCoast.jpg'
import DeepSix from '../images/DeepSix.jpg'
import LegionFolly from '../images/LegionsFolly.jpg'
import NewArcadia from '../images/NewArcadia.jpg'


const GambitWheelFunction = () => {

    const [winnerText, setWinnerText] = useState('');
    
    const segments = [
        'Emerald Coast',
        'Legions Folly',
        'Deep Six',
        'New Arcadia'
    ]
    const segColors = [
        '#34A24F',
        '#34A24F',
        '#34A24F',
        '#34A24F'
    ]

    const onFinished = (winner) => {
        console.log(winner)
        setWinnerText(winner)
    }

    const mapRender = (map) => {
        if (map === 'Emerald Coast') {
            return EmeraldCoast
        } else if (map === 'Legions Folly') {
            return LegionFolly
        } else if (map === 'Deep Six') {
            return DeepSix
        } else if (map === 'New Arcadia') {
            return NewArcadia
        }
    }

  return (
    <div>
        <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment= ''
            onFinished={(winningSegment) => onFinished(winningSegment)}
            primaryColor='white'
            contrastColor='black'
            buttonText='Spin'
            isOnlyOnce={false}
            size={250}
            upDuration={100}
            downDuration={500}
            fontFamily='Arial'
        />
        <img id='mapImage' alt={winnerText} src={mapRender(winnerText)}/>
    </div>
  )
}

export default GambitWheelFunction;