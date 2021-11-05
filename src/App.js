import {useContext} from "react";
import {AuthContext} from "./store/authContext";
import Header from "./components/Header";
import BackgroundBanner from "./components/BackgroundBanner";
import NewsLists from "./components/NewsLists";
import Error from "./components/Error";



function App() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Header/>
      <div className="container pt-5">
        {ctx.error && <Error/>}
        {!ctx.error && !ctx.isLoggedIn && <BackgroundBanner/>}
        {!ctx.error && ctx.isLoggedIn && <NewsLists/>}
      </div>
    </div>
  );
}

export default App;