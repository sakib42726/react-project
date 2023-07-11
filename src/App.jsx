import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";


const App = () => {
  
  const HeaderData = {
    title: 'React',
    home: 'Home',
    about: 'About',
    service: 'Service',
    contact: 'Contact'
  }
  return (
    <div>
      <Header header={HeaderData}/>
      <Content />
      <Footer />
    </div>
  );
};

export default App;
