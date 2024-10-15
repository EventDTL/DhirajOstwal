import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import Youtube from "../components/home/Youtube";
import FollowUs from "../components/home/FollowUs";
import Achievements from "../components/home/Achievements";
import Award from "../components/home/Award"
import GalleryContainer from "./gallery/Gallery11"
import Employee from "../components/home/Employee"

export const generateMetadata = () => {
  return {
    title: "CA Dhiraj Ostwal",
    description:
      "We are the best CA firm in pune providing all services related to finance",
    keywords: [
      "CA dhiraj ostwal",
      "Best Ca firm in pune",
      "dhiraj ostwal",
      "Ca firm"
    ],
    canonical:
      "https://www.cadhirajostwal.com",
  };
};

export default function Home() {

  return (
    <div>
        <Carousel/>
        <About/>
        <Achievements/>
        <Youtube/> 
        <Employee/>
        <GalleryContainer/>  
        <Award/> 
        <FollowUs/>  
    </div>

  );
}
