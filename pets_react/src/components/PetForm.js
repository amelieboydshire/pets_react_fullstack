import { useState } from "react";


const PetForm = ({types, postPet}) => {
    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {
        console.log(event)
        let propertyName = event.target.name;
        let clonedPet = {...statePet};
        clonedPet[propertyName] = event.target.value;
        setStatePet(clonedPet);
    }

    const handleFormSubmit = (event) => {
    event.preventDefault();
    postPet(statePet);
    setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
   })
}
    
    
    const typeOptions = types.map((type) => {
        return <option key={type.index} value={type}> {type} </option>
    })

    return(
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a new pet</h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input
                id="pet-name"
                name="name"
                type="text"
                placeholder="enter pet name" 
                onChange={handleChange}
                value={statePet.name}
            />

            <label htmlFor="pet-breed">Breed:</label>
            <input
                id="pet-breed"
                name="breed"
                type="text"
                placeholder="enter pet breed"
                onChange={handleChange}
                value={statePet.breed}
            />

            <label htmlFor="type">Type</label>
            <select 
                id="type" 
                name="type"
                defaultValue="select-type"
                onChange={handleChange}
            >
                <option disabled-value="select-type">Choose a type</option>
                {typeOptions}
            </select>

            <input type="submit" value="Add Pet"/>          
        </form>
    )

}

export default PetForm;