import {useRef, useState} from 'react'
import './List.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'

export default function List() {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50 // bize pozisyonunu veriyor
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>

            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick('left')} 
                style={{display: !isMoved && 'none'}}
                />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}