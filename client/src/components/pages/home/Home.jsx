import "./home.scss"
import Navbar from "../../navbar/Navbar"
import Featured from "../../featured/Featured"
import List from "../../list/List"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
