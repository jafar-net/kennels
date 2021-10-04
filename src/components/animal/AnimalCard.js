import React from "react"
import "./Animal.css"
import { Link } from 'react-router-dom'
import { firstLetterCase } from '../../modules/helpers'
// import Kitten from './images/kitten.jpg';
import { useHistory } from "react-router-dom"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();

    return (
        <section className="animal card" >
            <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
            <Link to={`/animals/${animal.id}`}>
                <button>Details</button>
            </Link>
            <button type="button"
                onClick={() => history.push(`/animals/${animal.id}/edit`)}>
                Edit
            </button>
            {/* <img src={require('./images/kitten.jpg').default} alt="imageTest"/> */}

            {/* refers to the import above needs to be in the src directory*/}
            {/* <img src={Kitten} alt="test2" /> */}

            {/* located in the public folder */}
            {/* <img src="images/kitten.jpg" alt="test3" /> */}
        </section>
    )
}