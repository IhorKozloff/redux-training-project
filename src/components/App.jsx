import { Character } from 'components/Character/Character';
import { Weapon } from 'components/Weapon/Weapon';
import { resetCharacter }  from 'redux/character-slice';
import { resetWeapon }  from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/operations'
import { useEffect } from 'react';


export const App = () =>  {
  const dispatch = useDispatch();


  const phoneState = useSelector(state => state.phonebook)
  console.log(phoneState)

  useEffect(() => {
     dispatch(getAllContactsThunk())
  },[dispatch])

 

  return (
    <>
      <Character/>
      <Weapon/><br></br>
      <button type='button' onClick={() => {
        dispatch(resetCharacter());
        dispatch(resetWeapon());
      }}>Reset</button>
      {phoneState.loadingPhonebookReducer && <h1>ЗАГРУЗКА....</h1>}
    </>
    
  );
};

