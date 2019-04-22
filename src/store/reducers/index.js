const filledFormReducer = (filledForm = [], action) => {
  if (action.type === 'FILLED_FORM') {
    console.log(action.payload);
    console.log([...filledForm, action.payload]);
    return [...filledForm, action.payload];
  }
  return filledForm;
};

export default filledFormReducer;
