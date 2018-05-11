const initialState = {
  searchResults: [],
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_LIST_FILL':
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

export default task;
