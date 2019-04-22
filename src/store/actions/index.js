// Action creator
export const filledForm = (formData) => {
  // Return an Action
  return {
    type: 'FILLED_FORM',
    payload: formData
  };
};
