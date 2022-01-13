import './ListItem.scss';
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined} from '@mui/icons-material'

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://thumbnails.moviemania.io/desktop/movie/335984/74945c/1016x574.jpg" alt="" />

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownAltOutlined />
                </div>
            </div>
        </div>
    )
}

// 1:09:55