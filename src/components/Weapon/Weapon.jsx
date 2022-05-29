import { setWeapon } from "redux/actions";
import { useSelector, useDispatch } from "react-redux";

const warHouse = {
    dagger: {
        weaponName: "Sinster dagger",
        damage: 25,
        durability: 60,
    },

    stuff: {
        weaponName: "Snow Piecer",
        damage: 250,
        durability: 100,
    },

    axe: {
        weaponName: "Shadowmourne",
        damage: 300,
        durability: 300,
    }

}




export const Weapon = () => {
    const weaponStore = useSelector(stor => stor.weaponAttributes);
    const dispatch = useDispatch();


    return (
        <>
            <h1>Weapon</h1>
            <ul>
                <li>weaponName:{weaponStore.weaponName}</li>
                <li>damage:{weaponStore.damage}</li>
                <li>durability:{weaponStore.durability}</li>
            </ul>
            <button type="button" onClick={() => {dispatch(setWeapon(warHouse.dagger))}}>Equip dagger</button>
            <button type="button" onClick={() => {dispatch(setWeapon(warHouse.stuff))}}>Equip stuff</button>
            <button type="button" onClick={() => {dispatch(setWeapon(warHouse.axe))}}>Equip axe</button>
        </>
    )
};