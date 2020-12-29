import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TOGGLE_DRAWER} from '../store/actions/appActions';

const PokemonCard = ({pokemon}) => {
  const {image, name} = pokemon;
  const dispatch = useDispatch();
  const userTeam = useSelector(state => state.app.userTeam);

  const isInMyTeam = userTeam.find(member => member.id === pokemon.id);
  const handleClick = () => {
    dispatch({type: TOGGLE_DRAWER, payload: {isDrawerOpen: true, pokemon}});
  };

  return (
    <div className={`pokemon-card ${isInMyTeam && `-selected`}`} onClick={handleClick}>
      <div className="image-container">
        <img src={image} alt={name} className='image' />
      </div>
      <h5 className='name'>{name}</h5>
    </div>
  );
};

export default PokemonCard;