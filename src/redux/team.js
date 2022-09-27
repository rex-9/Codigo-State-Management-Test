const FETCH_TEAM = 'Codigo-State-Management/player/FETCH_TEAM';
const CREATE_TEAM = 'Codigo-State-Management/player/CREATE_TEAM';
const DELETE_TEAM = 'Codigo-State-Management/player/DELETE_TEAM';
const EDIT_TEAM = 'Codigo-State-Management/player/EDIT_TEAM';

const initialState = [{
  id: 1,
  name: 'Team 1',
  playerCount: 0,
  region: 'Myanmar',
  country: 'Japan',
}, {
  id: 2,
  name: 'Team 2',
  playerCount: 0,
  region: 'Myanmar',
  country: 'Japan',
}, {
  id: 3,
  name: 'Team 3',
  playerCount: 0,
  region: 'Myanmar',
  country: 'Japan',
}, {
  id: 4,
  name: 'Team 4',
  playerCount: 0,
  region: 'Myanmar',
  country: 'Japan',
}];

// Team reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM:
      return [...state];

    case CREATE_TEAM:
      return [...state, action.payload];

    case DELETE_TEAM:
      return state.filter((team) => team.id !== action.payload);

    default:
      return state;
  }
};

// Action creators
export const fetchTeam = () => ({
  type: FETCH_TEAM,
});

export const createTeam = (team) => ({
  type: CREATE_TEAM,
  payload: team,
});

export const editTeam = (id) => ({
  type: EDIT_TEAM,
  payload: id,
});

export const deleteTeam = (id) => ({
  type: DELETE_TEAM,
  payload: id,
});
