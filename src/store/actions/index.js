// Action creator
export const rows = (formData) => {
  // Return an Action
  return {
    type: 'FILLED_FORM',
    payload: formData
  };
};

// Action creator
export const deleteRow = (rowId) => {
  // Return an Action
  return {
    type: 'DELETE_ROW',
    payload: rowId
  };
};
