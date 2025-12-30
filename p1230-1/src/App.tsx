import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      {/* 
        App역할 루트 컴포넌트 
        자식 컴포넌트 열거
      */}
      <h1>App 컴포넌트</h1>
      <Header />
      <hr/>
      <Body />
      <hr/>
      <Footer />
    </>
  )
}