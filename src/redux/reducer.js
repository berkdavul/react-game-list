const initialState = {
    game: [],

  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_GAME":
        return {
          ...state,
          game: [...state.game, action.payload],
        };
        case "REMOVE_GAME":
          state.game.filter(item=> console.log(item.id))
          console.log(state.game,"game");
            return {
              ...state,
              game: state.game.filter(item=> item.id !== action.payload.id),
            };
      default:
        return state;
    }
  };
  
  export default reducer;