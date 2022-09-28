import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createJoin } from '../redux/join';
import { fetchTeam } from '../redux/team';

const PlayerModal = ({ setToggle, playerId }) => {
  const [teamId, setTeamId] = useState();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams); // Teams from Redux Store

// Close Player Modal
  const closeModal = () => {
    setToggle(false);
  };

// Assign a player to a Team by creating a new Join State - similar to Join table in One to Many relationships
  const assign = (playerId, teamId) => {
    if (teamId) {
      console.log('true');
    } else {
      teamId = teams[0].id;
    }
    console.log(`teamId${teamId}`);
    const newJoin = {
      playerId,
      teamId,
    };
    dispatch(createJoin(newJoin));
    dispatch(fetchTeam());
  };

// update the state of teamId when selecting in a dropdown
  const onTeamId = (value) => {
    setTeamId(value);
  };

  return (
    <>
      <div className="modal">
        <select
          className="p-2"
          onChange={(e) => onTeamId(e.target.value)}
        >
          {
            teams.map((team) => (
              <option value={team.id} key={team.name}>
                {team.name}
              </option>
            ))
          }
        </select>
        <button className="text-2xl ml-16" type="button" onClick={closeModal}>&times;</button>
        <br />
        <br />
        <button className="w-full border-2 border-gray-200" type="button" onClick={() => assign(playerId, teamId)}>Assign</button>
      </div>
    </>
  );
};

export default PlayerModal;
