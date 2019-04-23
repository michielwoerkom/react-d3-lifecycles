const rowReducer = (state = [], action) => {
  switch(action.type) {
    case 'FILLED_FORM':
      return [...state, action.payload];

    case 'DELETE_ROW':
      const rowId = action.payload;
      return state.filter((d, i) => {
        if (rowId != i) {
          return d;
        }
      });

    default:
      return state;
  }
};

export default rowReducer;
