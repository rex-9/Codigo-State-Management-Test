import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

const JOIN_TEAM = 'Codigo-State-Management/player/JOIN_TEAM';
const LEAVE_TEAM = 'Codigo-State-Management/player/LEAVE_TEAM';
const FETCH_PLAYERS = 'Codigo-State-Management/player/FETCH_PLAYERS';

const initialState = [{
  id: 1,
  first_name: 'Naruto',
  last_name: 'Uzumaki',
  position: 'X',
  team: null,
}, {
  id: 2,
  first_name: 'Sasuke',
  last_name: 'Uchiha',
  position: 'X',
  team: null,
}, {
  id: 3,
  first_name: 'Boruto',
  last_name: 'Uzumaki',
  position: 'X',
  team: null,
}, {
  id: 4,
  first_name: 'Kizaru',
  last_name: 'Aokiji',
  position: 'X',
  team: null,
}];

// player reducer
export default (state = initialState, action) => {
  let newState = {};
  let foundIndex = 0;
  switch (action.type) {
    case `${FETCH_PLAYERS}/fulfilled`:
      return [...action.payload];

    case JOIN_TEAM:
      newState = state.find((player) => player.id === action.payload);
      newState = {
        ...newState,
        joined: true,
      };
      foundIndex = state.findIndex((x) => x.id === action.payload);
      state[foundIndex] = newState;
      return [...state];

    case LEAVE_TEAM:
      newState = state.find((player) => player.id === action.payload);
      newState = {
        ...newState,
        joined: false,
      };
      foundIndex = state.findIndex((x) => x.id === action.payload);
      state[foundIndex] = newState;
      return [...state];

    default:
      return state;
  }
};

// action creators
export const fetchPlayers = createAsyncThunk(FETCH_PLAYERS, async () => {
  const response = await fetch(api.playerEndPoint);
  const data = await response.json();

  const players = data.map((player) => ({
    id: player.player_id,
    name: player.player_name,
    description: player.description,
    joined: false,
  }));

  return players;
});

export const joinplayer = (id) => ({
  type: JOIN_TEAM,
  payload: id,
});

export const leaveplayer = (id) => ({
  type: LEAVE_TEAM,
  payload: id,
});
