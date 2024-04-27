import Footer from "@/components/footer/footer";
import ResponsiveAppBar from "@/components/navbar/navbar";
import Slider from "@/components/slider/slider";
import ItemList from "./_ItemList";
import About from "./_about";

function Home() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Slider/>
      <ItemList/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
