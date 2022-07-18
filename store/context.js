import React, {useReducer} from "react";


const Context = React.createContext({
    cartQuantity:0,
    cartProducts:[],
    cartTotalPrice:0,
    checkoutModalOpen:false,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    checkoutStateHandler: () => {},
    clearCart: () => {}

});

const initialCartState =  {
    cartQuantity:0,
    cartProducts:[],
    cartTotalPrice:0,
    checkoutModalOpen:false,
}

function cartReducer (state, action) {
    if (action.type === 'ADD') {
        const newCartQauntity = state.cartQuantity + action.item.quantity ; 
        const indexOfExistingItem = state.cartProducts.findIndex( item => item.product.id === action.item.product.id ) ;
        let updatedItems;
        let cartTotalPrice = 0;
        if (indexOfExistingItem >= 0 ) {
            const updatedItem = {...state.cartProducts[indexOfExistingItem], quantity:state.cartProducts[indexOfExistingItem].quantity + action.item.quantity ,
                itemTotalPrice: state.cartProducts[indexOfExistingItem].itemTotalPrice + action.item.itemTotalPrice
            }
            updatedItems = [...state.cartProducts];
            updatedItems[indexOfExistingItem] = updatedItem;
            updatedItems.forEach( item => {
                cartTotalPrice += item.itemTotalPrice;
            } )
        }
        else {
            updatedItems = state.cartProducts.concat(action.item);
            updatedItems.forEach( item => {
                cartTotalPrice += item.itemTotalPrice;
            } )
        }
        
        return {
            cartQuantity:newCartQauntity,
            cartProducts:updatedItems,
            cartTotalPrice
        };

    };

    if (action.type === 'REMOVE') {
        const indexOfExistingItem = state.cartProducts.findIndex( item => item.product.id === action.id ) ;
        const newCartQauntity = state.cartQuantity - 1 ;
        let cartTotalPrice = state.cartTotalPrice - state.cartProducts[indexOfExistingItem].product.price;
        let updatedItems ;
        let updatedItem ;
        if (state.cartProducts[indexOfExistingItem].quantity > 1 ) {
            updatedItems = [...state.cartProducts]
            updatedItem  = {...state.cartProducts[indexOfExistingItem], quantity:state.cartProducts[indexOfExistingItem].quantity - 1,
            itemTotalPrice: state.cartProducts[indexOfExistingItem].itemTotalPrice - state.cartProducts[indexOfExistingItem].product.price }
            updatedItems[indexOfExistingItem] = updatedItem;
        }
        else {
            updatedItems = state.cartProducts.filter( item => {
                return item.product.id !== action.id;
            })
        }
        return {
            cartQuantity:newCartQauntity,
            cartProducts:updatedItems,
            cartTotalPrice
        };

    }
    if (action.type === 'CLEAR') {
        return {
            cartQuantity:0,
            cartProducts:[],
            cartTotalPrice:0
        }
    }
    if (action.type === 'CHECKOUT_MODAL') {
        return {
            cartQuantity:state.cartQuantity,
            cartProducts:state.cartProducts,
            cartTotalPrice:state.cartTotalPrice,
            checkoutModalOpen:action.ischeckoutModalOpen,
        }
    }

}
export function StoreProvider (props) {
   const [cartCurrentState, cartActionDispatch] = useReducer(cartReducer, initialCartState);


    function addItemToCart (item) {
        cartActionDispatch({type:'ADD' , item:item});
    }
    function removeItemFromCart (id) {
        cartActionDispatch({type:'REMOVE' , id:id});
    }
    function clearCart () {
        cartActionDispatch({type:'CLEAR'});
    }
    function checkoutStateHandler (ischeckoutModalOpen) {
        cartActionDispatch({type:'CHECKOUT_MODAL', ischeckoutModalOpen})
    }

   const cartContext =  {
        cartQuantity:cartCurrentState.cartQuantity,
        cartProducts:cartCurrentState.cartProducts,
        cartTotalPrice:cartCurrentState.cartTotalPrice, 
        checkoutModalOpen:cartCurrentState.checkoutModalOpen, 
        addItemToCart,
        removeItemFromCart,
        clearCart,
        checkoutStateHandler
   }

    return <Context.Provider  value = {cartContext}> {props.children} </Context.Provider>
}

export default Context;