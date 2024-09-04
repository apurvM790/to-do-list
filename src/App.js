import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Body />
      </div>
      <Footer className="mt-auto"/>
  </div>
}

export default App;
