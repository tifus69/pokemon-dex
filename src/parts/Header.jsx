import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {toast} from 'react-toastify';
import useSound from 'use-sound';

import gameSound from '../assets/sounds/attack_sound.mp3';
import logo from '../assets/logo-pokemon.png';
import CustomButton from '../components/CustomButton';

const Header = ({userTeam}) => {
  let history = useHistory();
  let location = useLocation();

  const gameState = useSelector(state => state.game);
  const {userScore, computerScore} = gameState;

  const {pathname} = location;

  const notify = (text) => {
    toast.info(text, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  const [gameSoundActive] = useSound(
    gameSound,
    {volume: 1}
  );


  const handleClick = () => {
    if (userTeam.length < 3) {
      return notify("Select at least 3 fighters !");
    }
    if (userTeam.length > 5) {
      return notify("Maximum 5 fighters !");
    }
    gameSoundActive();
    history.push("/game");
  };

  return (
    <div className='header content-padding'>
      <img src={logo} alt="pokemon logo" className="header-logo" onClick={() => history.push("/")} />
      {
        pathname === '/' &&
        <CustomButton title='Fight !' pulse onClick={handleClick} />
      }
      {
        pathname === '/fight' &&
        <div>
          <span style={{color: "#fff", fontSize: 12}}>You: <span style={{color: 'yellow', fontSize: 24, fontWeight: 'bold'}}>{userScore}</span></span>
          <span style={{color: "#fff", fontSize: 12}}> computer: <span style={{color: 'yellow', fontSize: 24, fontWeight: 'bold'}}>{computerScore}</span></span>
        </div>
      }
    </div >
  );
};

export default Header;