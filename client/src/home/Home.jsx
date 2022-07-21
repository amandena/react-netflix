import "./home.scss"
import Navbar from "../components/navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img style={{width: "100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Pizza_%2848496390846%29.jpg" alt="" />
    </div>
  )
}

export default Home
