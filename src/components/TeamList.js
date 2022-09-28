import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TeamModal from './TeamModal';
import { deleteTeam } from '../redux/team';

const TeamList = () => {
  const teams = useSelector((state) => state.teams); // Teams from Redux Store
  const joins = useSelector((state) => state.joins); // Joins from Redux Store

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false); // Toggle for Team modal

  const openModal = () => {
    setToggle(true);
  };

// Delete a Team
  const removeTeam = (id) => {
    dispatch(deleteTeam(id));
  };

// Count players in a Specific Team
  const count = (id) => {
    const countedJoins = joins.filter((join) => join.teamId === id);
    let count = 0;
    if (countedJoins) {
      count = countedJoins.length;
    }
    return count;
  };

  return (
    <>
      {
        toggle ? <TeamModal setToggle={setToggle} /> : <div />
      }
      <div className="w-[50vw]">
        <div className="flex justify-around w-full mb-4">
          <p className="text-2xl font-bold">Teams</p>
          <button className="bg-green-300 text-lg font-bold px-2 py-1 rounded-lg" type="button" onClick={openModal}>Create a Team</button>
        </div>
        <div className="flex flex-wrap">
          {
            teams.map((team) => (
              <div key={team.id} className="px-8 py-4 mb-2 rounded-lg flex flex-col">
                <div>
                  name:
                  {team.name}
                </div>
                <div>
                  Player Count:
                  {count(team.id)}
                  {/* {joins.map((join) => <div key={join.id}>{join.playerId}</div>)} */}
                </div>
                <div>
                  region:
                  {team.region}
                </div>
                <div>
                  country:
                  {team.country}
                </div>
                <button className="bg-red-500 text-md font-bold px-2 py-1 my-1 rounded-lg text-white" type="button" onClick={() => removeTeam(team.id)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
export default TeamList;
