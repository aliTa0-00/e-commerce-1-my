import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectProducts: JSON.parse(localStorage.getItem("selectedProduct")) || [],
  selectProductsID: JSON.parse(localStorage.getItem("selectedProductID")) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // state.value += action.payload
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectProducts.push(productWithQuantity);
      state.selectProductsID.push(productWithQuantity.id);

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectProducts)
      );
      localStorage.setItem(
        "selectedProductID",
        JSON.stringify(state.selectProductsID)
      );
    },

    increaseQuantity: (state, action) => {
      // state.value += action.payload
      let increaseProduct = state.selectProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity += 1;

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectProducts)
      );
    },
    minusQuantity: (state, action) => {
      let mimusProduct = state.selectProducts.find((item) => {
        return item.id === action.payload.id;
      });
      mimusProduct.quantity -= 1;
      if (mimusProduct.quantity === 0) {
        let newProduct = state.selectProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.selectProducts = newProduct;

        let newProductID = state.selectProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectProductsID = newProductID;

        localStorage.setItem(
          "selectedProductID",
          JSON.stringify(state.selectProductsID)
        );
      }

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectProducts)
      );
    },

    removeProduct: (state, action)=>{
      let newProduct = state.selectProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectProducts = newProduct;

      let newProductID = state.selectProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectProductsID = newProductID;

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectProducts)
      );
      localStorage.setItem(
        "selectedProductID",
        JSON.stringify(state.selectProductsID)
      );
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, increaseQuantity, minusQuantity ,removeProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
