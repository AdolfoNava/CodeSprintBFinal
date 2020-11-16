import React from "react";
import {Helmet} from "react-helmet";
import CharacterDisplay from "../components/character-display";

function CharacterDisplayPage(){
    return (
        <main>
            <Helmet>
                <title>Character List</title>
            </Helmet>
            <CharacterDisplay/>
        </main>
    );
}
export default CharacterDisplayPage;