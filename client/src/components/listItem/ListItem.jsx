import { useState } from "react"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"

import "./listItem.scss"

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="listItem"
      style={{left: isHovered && index * 225 - 50}} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/I_Love_Lucy_title.svg" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis est perspiciatis esse neque tempore eum pariatur dignissimos.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}

export default ListItem
