import { useSelector, useDispatch } from "react-redux";
// import { rename, incraseAgility, decraseAgility, incraseStrenght, decraseStrenght} from 'redux/actions'
import { rename, incraseAgility, decraseAgility, incraseStrenght, decraseStrenght } from 'redux/character-slice'


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
          <button type="button" onClick={() => {dispatch(rename('eyeshield21'))}}>Rename to eyeshield21</button>
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