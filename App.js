import { Fragment, useReducer, useContext} from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Home from "./Pages/Home";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import Product from "./Pages/Product";
import Modal from "./components/UI/Modal";
import Cart from "./components/Layout/Cart/Cart";
import Menu from "./components/Layout/Menu/Menu";
import CheckoutPage from "./Pages/CheckoutPage";
import CheckoutModal from "./components/Layout/Checkout Modal/CheckoutModal";
import Context from "./store/context";


const reducerInitialState = {
  isModalOpen:false,
  isMenuOpen:false,
  isCartOpen:false
}

function modalReducer (state , action) {
  let menuOpen ; 
  let cartOpen ;
  let modalOpen ;

  if (action.type === 'menu') {
    modalOpen = action.menuState ; 
    menuOpen = action.menuState ;
    cartOpen = false ;
    
    return {
      isModalOpen:modalOpen,
      isMenuOpen:menuOpen,
      isCartOpen:cartOpen
    }
  } ;

  if (action.type === 'open-cart') {
    modalOpen = true ; 
    menuOpen = false ;
    cartOpen = true ;
    
    return {
      isModalOpen:modalOpen,
      isMenuOpen:menuOpen,
      isCartOpen:cartOpen
    }
  };

  if (action.type === 'close-cart') {
    modalOpen = false ; 
    menuOpen = false ;
    cartOpen = false;
    
    return {
      isModalOpen:modalOpen,
      isMenuOpen:menuOpen,
      isCartOpen:cartOpen
    }
  };

  if (action.type === 'close-modal') {
    modalOpen = false ; 
    menuOpen = false ;
    cartOpen = false;
    
    const websiteBody = document.querySelector('body');
    websiteBody.style.overflowY = 'scroll';
    return {
      isModalOpen:modalOpen,
      isMenuOpen:menuOpen,
      isCartOpen:cartOpen
    }
  }

}
function App() {
  const [currentModalState, dispatchModalState] = useReducer(modalReducer, reducerInitialState); 
    
  function ModalStateHandler () {
    dispatchModalState({type:'close-modal'})
  }
  function cartStateHandler (cartState) {
    dispatchModalState({type:cartState})
  }
  function menuStateHandler (type, menuState) {
    dispatchModalState({type , menuState})
  }
  
  const ctx = useContext(Context);
  return (
    <Fragment>
      <Header cartStateHandler = {cartStateHandler} menuStateHandler = {menuStateHandler} isMenuOpen = {currentModalState.isMenuOpen} />
      {currentModalState.isModalOpen ? <Modal isMenuOpen = {currentModalState.isMenuOpen} isCartOpen = {currentModalState.isCartOpen} ModalStateHandler = {ModalStateHandler} /> : '' }
      <Menu menuStateHandler = {menuStateHandler} isMenuOpen = {currentModalState.isMenuOpen} />
      {currentModalState.isCartOpen ? <Cart /> : '' }
      {ctx.checkoutModalOpen && <CheckoutModal />}
      <Main>
        <Routes>
          <Route path="/" element= {<Navigate to ='home' />} />
          <Route path="home" element = { <Home /> }/>
          <Route path="/headphones" element = { <CategoryPage /> }/>
          <Route path="/speakers" element = { <CategoryPage /> }/>
          <Route path="/earphones" element = { <CategoryPage /> }/>
          <Route path="/product/:productname" element = {<Product />} />
          <Route path="/checkout" element= {<CheckoutPage />} />
        </Routes>
      </Main>
    </Fragment>
  );
}

export default App;
