import {useState} from 'react'
import './ListItem.scss';
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined} from '@mui/icons-material'


export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
        <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
            <img src="https://thumbnails.moviemania.io/desktop/movie/335984/74945c/1016x574.jpg" alt="" />
            
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>

                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>2021</span>
                        </div>

                        <div className="desc">
                            lorem ipsum dolor sit amet, consectet lorem ipsum d lorem ipsum dolor sit amet, consectet
                        </div>

                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

// 1:09:55