import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import {characterCollection} from "../data/firebase";
import Character from "./character";
import "./character-display.css";

function CharacterDisplay(){
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setCharacters(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your created characters. Please try again.");
      console.error(error);
    };
    const unsubscribe = characterCollection.orderBy("dateCreated", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
    }, []);
    return(
        <div>
            <h1>Characters</h1>
            {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
        <ul className="character-list">
            {characters.map((charactersDoc)=>{
                const characterId = charactersDoc.id;
                const characterData = charactersDoc.data();
                return(
                    <li key={characterId}>
                        <Character id={characterId} data={characterData}/>
                    </li>
                );
            })}
        </ul>
        </div>
    );
}
export default CharacterDisplay;