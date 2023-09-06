import { useState, useEffect } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

const PetContainer = () => {

    const [pets, setPets] = useState([]);
    const [types, setTypes] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets")
        const data = await response.json();
    
         // you can format data here - filter, removing unnecessary values etc
        setPets(data);
        console.log("fetchPetsComplete")
    
        
    }

    const fetchTypes = () => {
       const animalTypes = pets.map((pet) => pet.type)
       setTypes(animalTypes);
       console.log("fetchTypesComplete")
    }

    useEffect(() => {
        fetchPets();
        fetchTypes();
        

    }, [])


    const postPet  = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets( [...pets, savedPet] );

    }

    const deletePet = async (id) => {
        await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        const keptPets = pets.filter((pet) => pet.id !== parseInt(id));
        setPets(keptPets);

    }

    return(
        <>
            <PetForm types={types} postPet={postPet}/>
            <PetList pets={pets} deletePet={deletePet}/>
        </>
    )

}

export default PetContainer;
