import AboutStudio from "../components/AboutStudio/AboutStudio";
import Feedback from "../components/Feedback/Feedback";
import FirstLesson from "../components/FirstLesson/FirstLesson";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import Map from "../components/Map/Map";
import Pricing from "../components/Pricing/Pricing";
import Teacher from "../components/Teacher/Teacher";


const HomeScreen = () => {
    return(
        <div className='g-wrapperScreens'>
            <Header />
            <MainPage />
            <AboutStudio />
            <Teacher />
            <Pricing />
            <FirstLesson />
            <Feedback />
            <Map />
            <Footer />
        </div>
    )
}

export default HomeScreen