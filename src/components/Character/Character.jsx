import { useSelector, useDispatch } from "react-redux";
import { incraseAgility, decraseAgility, incraseStrenght, decraseStrenght} from 'redux/character-actions'



export const Character = () => {

    const characterState = useSelector(myState => myState.characterAttributes);
    const dispatch = useDispatch();


    console.log(characterState)
    
    return (
        <>
        <h1>Character</h1>
      
      <ul>
        <li>
          {characterState.name}
        </li>

        <li>
          {characterState.params.agility}

          <button type="button" onClick={() => {dispatch(incraseAgility(10))}}>Incrase agility by 10</button>
          <button type="button" onClick={() => {dispatch(decraseAgility(10))}}>Decrase agility by 10</button>
        </li>

        <li>
          {characterState.params.strenght}
          <button type="button" onClick={() => {dispatch(incraseStrenght(5))}}>Incrase strenght by 5</button>
          <button type="button" onClick={() => {dispatch(decraseStrenght(5))}}>Decrase strenght by 5</button>
        </li>

      </ul>
      </>
    );
};
//a