import AboutSection from "../../components/AboutSection/AboutSection"
import Banner from "../../components/Banner/Banner"
import Clients from "../../components/Clients/Clients"
import Landing from "../../components/Landing/Landing"
import Services from "../../components/Services/Services"

const Home = () => {
  return (
    <div className="home-body">
      <Landing/>
      <AboutSection/>
      <Banner/>
      <Services/>
      <Clients/>
      
    </div>
  )
}

export default Home
