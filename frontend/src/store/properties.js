const LOAD = '/LOAD';

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

// "THUNK" ACTIONS CREATORS
export const getProperites = () => async dispatch => {
  const response = await fetch(`/api/properties`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    const propertyList = await response.json();
    dispatch(load(propertyList));
  }
};

// REDUCER
const propertyReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allProperties = {};
      action.list.forEach(property => {
      allProperties[property.id] = property;
      });
      return allProperties
    default:
      return state;
  }
}

  export default propertyReducer;
