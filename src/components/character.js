import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import ErrorMessage from "./error-message";
import { characterCollection } from "../data/firebase";
import "./character.css";

function Character(props){
    const {id, data} =props;
    const {name, dateCreated, race, classes, alignment, level, strength, dexterity, constitution, intelligence, wisdom, charisma} = data;

    const history = useHistory();
    const [isDeleting, setIsDeleting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const deleteCharacter = async () => {
        setIsDeleting(true);
        setErrorMessage("");
        try {
          const docRef = characterCollection.doc(id);
          await docRef.delete();
        } catch (error) {
          console.error(error);
          setErrorMessage("Something went wrong while deleting. Please try again.");
          setIsDeleting(false);
        }
      };
      return(
          <div className="character">
              <div className="character__contents">
                <div className="character__name">Name: {name}</div>
                <div className="character__dateCreated">Date Created: {dateCreated.toString()}</div>
                <div className="character__race">Race: {race}</div>
                <div className="character__classes">Class: {classes}</div>
                <div className="character__alignment">Alignment: {alignment}</div>
                <div className="character__stats">Level: {level}</div>
                <div className="character__stats">Strength: {strength}</div>
                <div className="character__stats">Dexterity: {dexterity}</div>
                <div className="character__stats">Constitution: {constitution}</div>
                <div className="character__stats">Intelligence: {intelligence}</div>
                <div className="character__stats">Wisdom: {wisdom}</div>
                <div className="character__stats">Charisma: {charisma}</div>
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </div>
              <div>
                    <button className="character__button" disabled={isDeleting} onClick={deleteCharacter}>
                      <Delete/>
                    </button>
                    <button className="character__button" onClick={() => history.push(`/edit/${id}`)}>
                        <Edit />
                    </button>
              </div>
          </div>
      );
}

export default Character;
