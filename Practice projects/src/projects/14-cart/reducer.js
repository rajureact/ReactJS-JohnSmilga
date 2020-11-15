const reducer = (state, action) => {
  if (action.type == "CLEAR_ALL") {
    return { ...state, cart: [] };
  }
  if (action.type == "REMOVE_ITEM") {
    const newItem = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, cart: newItem };
  }
  if (action.type == "INCREASE") {
    const newItem = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newItem };
  }
  if (action.type == "DECREASE") {
    const newItem = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newItem };
  }

  // Amount and total using forloop
  // if(action.type == "AMOUNT_TOTAL"){
  //   let newAmount = 0;
  //   let newTotal = 0;
  //   for(let i=0; i< state.cart.length; i++){
  //       newAmount += state.cart[i].amount;
  //       newTotal += state.cart[i].amount * state.cart[i].price;
  //   }
  //   return {...state,amount:newAmount, total:newTotal}
  // }

  // Amount and total using reduce
  if (action.type == "AMOUNT_TOTAL") {
    const amount = state.cart.reduce(
      (acc, curr) => {
        acc.newAmount += curr.amount;
        acc.total += curr.amount * curr.price;
        return acc;
      },
      {
        total: 0,
        newAmount: 0,
      }
    );
    const { newAmount, total } = amount;
    return { ...state, amount: newAmount, total: parseFloat(total).toFixed(2) };
  }
  // if (action.type == "LOADING") {
  //   let test = []
  //   const getData = async (url) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     test = data;
  //     // console.log(test);
  //   };
  //   console.log(test);
  //   getData(action.payload);
  //   // console.log(state);
  //   return state;
  // }
  if(action.type == "LOADING"){
    return {...state, loading: true}
  }
  if(action.type == "DISPLAY_ITEM"){
    return {...state, cart:action.payload, loading:false}
  }
};
export default reducer;
