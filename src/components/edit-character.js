import React, { useEffect, useState } from "react";
import { characterCollection } from "../data/firebase";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import CharacterForm from "./character-form";
import "./edit-character.css";

function EditCharacter(props){
    const {id} = props;

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");
    useEffect(()=>{
        async function getCharacter(){
            setIsLoading(true);
            try{
                const characterSnapshot = await characterCollection.doc(id).get();
                
                if(!characterSnapshot.exists){
                    throw new Error("No such character exists");
                }
                const data = characterSnapshot.data();
                setCharacterData(data);
            }catch(error){
                setErrorMessage("An error has occured. Please try again.");
                console.error(error);
            }
            setIsLoading(false);
        }
        getCharacter();
    }, [id]);

    const onCharacterSubmit = async (name,dateCreated,race,classes,alignment,level,strength,dexterity,constitution,intelligence,wisdom,charisma) =>{
        setIsSaving(true);
        setFormMessage("");
        try{
            await characterCollection.doc(id).set({
                name,
                dateCreated,
                race,
                classes,
                alignment,
                level,
                strength,
                dexterity,
                constitution,
                intelligence,
                wisdom,
                charisma
            });
            setFormMessage("Saved Entry!");
        }catch(error){
            setErrorMessage("Something went wrong editing the character. Please try again.");
            console.error(error);
        }
        setIsSaving(false);
    };
    return(
        <div className="edit-container">
            <h2>Edit Character</h2>
            {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
            {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
            {characterData &&<CharacterForm
            initialState={characterData}
            onSubmit={onCharacterSubmit}
            isSaving={isSaving}
            message={formMessage}
            />}
        </div>
    );
}
export default EditCharacter;