import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';


//step 2 UloadPage Router 만들기
//null   Anyone Can go inside
//true   only logged in user can go inside, 업로드 할 수 있게, 아니면 false
//false  logged in user can't go inside
// 세번째 인자 true 경우 admin만 가능

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login/" component={Auth(LoginPage, false)} />
          <Route exact path="/register/" component={Auth(RegisterPage, false)} />
        
          <Route exact path="/product/upload/" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId/" component={Auth(DetailProductPage, null)} />
          {/* :productId 는 각image의 id 가 dynamic하게 변경 , null : 아무나 들어갈수있게, true: 로그인된 사람만 가능*/}
        
          <Route exact path="/user/cart/" component={Auth(CartPage, true)} />
          <Route exact path="/history/" component={Auth(HistoryPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
