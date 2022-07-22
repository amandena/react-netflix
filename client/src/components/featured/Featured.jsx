import { PlayArrow, InfoOutlined } from '@material-ui/icons'

import './featured.scss'

const Featured = ({ type }) => {
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
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Pizza_%2848496390846%29.jpg" alt="" />
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/The-matrix-logo.svg" alt="" />
        <span className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati libero dignissimos asperiores assumenda voluptate impedit aut unde ab eveniet, ipsam quasi suscipit. Commodi, ab! Totam veritatis quis accusamus nemo.
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

export default Featured
