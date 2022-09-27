import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTeam } from '../redux/team';

const TeamModal = ({ setToggle }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  const onName = (e) => {
    setName(e.target.value);
  };

  const onRegion = (e) => {
    setRegion(e.target.value);
  };

  const onCountry = (e) => {
    setCountry(e.target.value);
  };

  const closeModal = () => {
    setToggle(false);
  };

  const create = () => {
    dispatch(createTeam({
      name,
      region,
      country,
    }));
    closeModal();
  };

  return (
    <>
      <div className="modal">
        <button className="text-2xl ml-16 absolute right-4 top-3" type="button" onClick={closeModal}>&times;</button>
        <div className="pt-2">
          <label htmlFor="name">Name</label>
          <span className="text-red-700">*</span>
        </div>
        <input required className="border-2 border-gray-200 px-2 rounded-lg mt-2" type="text" id="name" name="name" placeholder="Name" value={name} onChange={onName} />
        {
          name ? <p /> : <p className="text-red-500">Name is required</p>
        }
        <div className="pt-2">
          <label htmlFor="region">Region</label>
          <span className="text-red-700">*</span>
        </div>
        <input required className="border-2 border-gray-200 px-2 rounded-lg mt-2" type="text" id="country" name="country" placeholder="Country" value={region} onChange={onRegion} />
        {
          region ? <p /> : <p className="text-red-500">Region is required</p>
        }
        <div className="pt-2">
          <label htmlFor="country">Country</label>
          <span className="text-red-700">*</span>
        </div>
        <input required className="border-2 border-gray-200 px-2 rounded-lg mt-2" type="text" id="country" name="country" placeholder="Country" value={country} onChange={onCountry} />
        {
          country ? <p /> : <p className="text-red-500">Country is required</p>
        }
        <button className="w-full mt-4 border-2 border-green-200" type="button" onClick={create}>Save</button>
      </div>
    </>
  );
};

export default TeamModal;
