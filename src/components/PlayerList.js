import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayerModal from './PlayerModal';

const PlayerList = () => {
  const [playerId, setPlayerId] = useState();
  const players = useSelector((state) => state.players);
  const [toggle, setToggle] = useState(false);
  const openModal = (id) => {
    setToggle(true);
    setPlayerId(id);
  };

  return (
    <>
      {
        toggle ? <PlayerModal setToggle={setToggle} playerId={playerId} /> : <div />
      }
      <div className="w-[50vw] flex flex-col items-center">
        <p className="font-bold text-2xl mb-4">Players</p>
        <div className="flex flex-wrap">
          {
            players.map((player) => (
              <div key={player.id} className="player px-8 py-4 mb-2 mx-4 rounded-lg">
                <div>
                  id:
                  {player.id}
                </div>
                <div>
                  name:
                  {player.first_name}
                  -
                  {player.last_name}
                </div>
                <div>
                  position:
                  {player.position}
                </div>
                <button className="bg-green-200 rounded-lg py-1 w-full mt-2" type="button" onClick={() => openModal(player.id)}>Assign to a Team</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default PlayerList;
