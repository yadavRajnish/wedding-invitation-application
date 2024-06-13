import Footer from "./Component/Footer";
import Form from "./Component/Form";
import Note from "./Component/Note";
// import ScrollTop from "./Component/ScrollTop";
import FirstPage from "./Pages/FirstPage";
// import ForthPage from "./Pages/ForthPage";
import Location from "./Pages/Location";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
// import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App text-center">
      {/* <MainPage/> */}
      {/* <ScrollTop> */}
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      {/* <ForthPage/> */}
      <Location/>
      <Form/>
      <Note/>
      <Footer/>
      {/* </ScrollTop> */}
    </div>
  );
}

export default App;
