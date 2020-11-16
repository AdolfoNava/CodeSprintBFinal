import React, { useState } from "react";
import {characterCollection} from "../data/firebase";
import CharcterForm from "./character-form";

function AddCharacter(){
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");
    
    
    const onCharacterSubmit = async(name,dateCreated,race,classes,alignment,level,strength,dexterity,constitution,intelligence,wisdom,charisma)=>{
        setIsSaving(true);
        setFormMessage("");
        var tempDate = new Date();
    
        var createdDate = Date.UTC(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDay(),tempDate.getHours(),tempDate.getMinutes(),tempDate.getSeconds());
        try{
            await characterCollection.add({
                name,
                dateCreated: createdDate,
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
        }catch(error){
            setFormMessage("Something went wrong. Please try again.");
            console.error(error);
        }
        setIsSaving(false);
    };
return(
    <div className="add-container">
        <h1>Add Character</h1>
        <CharcterForm onSubmit={onCharacterSubmit} isSaving={isSaving} message={formMessage}/>
    </div>
);
}
export default AddCharacter;