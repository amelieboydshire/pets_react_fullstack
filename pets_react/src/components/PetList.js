import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map(pet => {
        return <Pet 
            key={pet.id} 
            pet={pet}
            deletePet={deletePet}
            />
    });

    return(
        <div id="pet-list">
            {petComponents}
        </div>
    )
}

export default PetList;