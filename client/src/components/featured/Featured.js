import './Featured.scss'
import {PlayArrow, InfoOutlined} from '@mui/icons-material'


export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img width="100%" src={require('../../images/m2.jpg')} alt="Blade Runner 2049" />

            <div className="info">
                 <img src={require('../../images/matrix.png')} alt="matrix" />
                 <span className="desc">
                     lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit dolor sit amet lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit dolor sit amet
                     lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit dolor sit amet
                 </span>

                 <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                 </div>
            </div>
        </div>
    )
}
