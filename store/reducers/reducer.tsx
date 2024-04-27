// store/reducers/counterReducer.ts
import listBuy from '@/model/listBuy.model';
import { createSlice } from '@reduxjs/toolkit';

interface Status {
  isLogedIn: boolean;
  BuyList : listBuy[]
  lengthList : number
}

const initialState: Status = {
    isLogedIn: false,
    BuyList : [],
    lengthList : 0
};

export const MyRedux = createSlice({
  name: 'myredux',
  initialState,
  reducers: {
    changeStatusToTrue: (state) => {
      state.isLogedIn = true
    },
    addItemToList: (state,action) => {
      state.BuyList = [...state.BuyList, action.payload]
    },
    SortList : (state) => {
      for(let g = 0; g < state.BuyList.length; g++){
      for (let i = 0; i < state.BuyList.length; i++) {
        for (let j = 0; j < state.BuyList.length ; j++) {
          if (i === j){

          }
          else {
            if (state.BuyList[i].id === state.BuyList[j].id){
              state.BuyList.splice(j,1);
              state.BuyList[i].num++;
            }
          }
        }
      }
    }
    state.lengthList = state.BuyList.length
    },
    plusFunc : (state,action) => {
      for (let index = 0; index < state.BuyList.length; index++) {
        if (state.BuyList[index].id === action.payload.id) {
          state.BuyList[index].num++;

        }
      }
    },
    minusFunc : (state,action) => {
      for (let index = 0; index < state.BuyList.length; index++) {
        if (state.BuyList[index].id === action.payload.id) {
          state.BuyList[index].num--;
        }
        if (state.BuyList[index].num === 0) {
          state.BuyList.splice(index,1);
          state.lengthList = state.BuyList.length
        }
      }
    }
  },
});

export const { changeStatusToTrue,addItemToList,SortList,plusFunc,minusFunc } = MyRedux.actions;

export default MyRedux.reducer;
