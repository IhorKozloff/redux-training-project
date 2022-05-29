import { Character } from 'components/Character/Character';
import { Weapon } from 'components/Weapon/Weapon';
import { resetCharacter, resetWeapon }  from 'redux/actions';
import { useDispatch } from 'react-redux';

export const App = () =>  {
  const dispatch = useDispatch();


  return (
    <>
      <Character/>
      <Weapon/><br></br>
      <button type='button' onClick={() => {
        dispatch(resetCharacter());
        dispatch(resetWeapon());
      }}>Reset</button>
    </>
    
  );
};

