const ASSIGN = 'Codigo-State-Management/player/ASSIGN';

const initialState = [{
  id: 1,
  playerId: 1,
  teamId: 1,
}, {
  id: 2,
  playerId: 2,
  teamId: 3,
}, {
  id: 3,
  playerId: 3,
  teamId: 3,
}, {
  id: 4,
  playerId: 2,
  teamId: 1,
}, {
  id: 5,
  playerId: 5,
  teamId: 2,
}];

// Team reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN:
      return [...state, action.payload];

    default:
      return state;
  }
};

// Action creators
export const createJoin = (join) => ({
  type: ASSIGN,
  payload: join,
});
