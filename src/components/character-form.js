import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./character-form.css";

function CharacterForm(props){
    const {initialState={},message,isSaving,onSubmit}=props;

    if(initialState.name === undefined) initialState.name = "";
    if(initialState.race === undefined) initialState.race = "";
    if(initialState.classes === undefined) initialState.classes = "";
    if(initialState.alignment === undefined) initialState.alignment = "";
    if(initialState.level === undefined) initialState.level = 1;
    if(initialState.strength === undefined) initialState.strength = 1;
    if(initialState.dexterity === undefined) initialState.dexterity = 1;
    if(initialState.constitution === undefined) initialState.constitution = 1;
    if(initialState.intelligence === undefined) initialState.intelligence = 1;
    if(initialState.wisdom === undefined) initialState.wisdom = 1;
    if(initialState.charisma === undefined) initialState.charisma = 1;

    const [name, setName] = useState(initialState.name);
    const [race, setRace] = useState(initialState.race);
    const [classes, setClasses] = useState(initialState.classes);
    const [alignment, setAlignment] = useState(initialState.alignment);
    const [level, setLevel] = useState(initialState.level);
    const [strength, setStrength] = useState(initialState.strength);
    const [dexterity, setDexterity] = useState(initialState.dexterity);
    const [constitution, setConstitution] = useState(initialState.constitution);
    const [intelligence, setIntelligence] = useState(initialState.intelligence);
    const [wisdom, setWisdom] = useState(initialState.wisdom);
    const [charisma, setCharisma] = useState(initialState.charisma);
    const [errorMessage, setErrorMessage] = useState("");

    const onNameChange = (event)=>{
        setName(event.target.value);
    };
    const onRaceChange = (event)=>{
        setRace(event.target.value);
    };
    const onClassChange = (event)=>{
        setClasses(event.target.value);
    };
    const onAlignmentChange = (event)=>{
        setAlignment(event.target.value);
    };
    const onLevelChange = (event)=>{
        setLevel(event.target.value);
    };
    const onStrengthChange = (event)=>{
        setStrength(event.target.value);
    };
    const onDexterityChange = (event)=>{
        setDexterity(event.target.value);
    };
    const onConstitutionChange = (event)=>{
        setConstitution(event.target.value);
    };
    const onIntelligenceChange = (event)=>{
        setIntelligence(event.target.value);
    };
    const onWisdomChange = (event)=>{
        setWisdom(event.target.value);
    };
    const onCharismaChange = (event)=>{
        setCharisma(event.target.value);
    };

    const onCharacterSubmit = async (event)=>{
        event.preventDefault();
        onSubmit(name,race,classes,alignment,level,strength,dexterity,constitution,intelligence,wisdom,charisma);
    }

    
    return(
        <form className="character-form" onSubmit={onCharacterSubmit}>
            <h2>Character details</h2>
                {message && <p className="character-form__message">{message}</p>}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <fieldset className="character-form__controls"disabled={isSaving}>
                <label className="character-form__label">Character Name</label>
                <input 
                className="character-form__input"
                type="text"
                value={name}
                onChange={onNameChange}
                />
            <label className="character-form__label">Race</label>
                <select className="character-form__dropdown"value={race} onChange={onRaceChange}>
                    <option value="Aarakocra">Aarakocra</option>
                    <option value="Aasimar">Aasimar</option>
                    <option value="Bugbear">Bugbear</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Firbolg">Firbolg</option>
                    <option value="Genasi">Genasi</option>
                    <option value="Gith">Gith</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Goblin">Goblin</option>
                    <option value="Goliath">Goliath</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Hobgoblin">Hobgoblin</option>
                    <option value="Human">Human</option>
                    <option value="Kenku">Kenku</option>
                    <option value="Kobold">Kobold</option>
                    <option value="Lizardfolk">Lizardfolk</option>
                    <option value="Orc">Orc</option>
                    <option value="Tabaxi">Tabaxi</option>
                    <option value="Tiefling">Tiefling</option>
                    <option value="Triton">Triton</option>
                    <option value="Yuan-Ti Pureblood">Yuan-Ti Pureblood</option>
                </select>
            <label className="character-form__label">Class</label>
                    <select className="character-form__dropdown" value={classes} onChange={onClassChange}>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
            <label className="character-form__label">Alignment</label>
                    <select className="character-form__dropdown" value={alignment} onChange={onAlignmentChange}>
                        <option value="Lawful Good">Lawful Good</option>
                        <option value="Lawful Neutral">Lawful Good</option>
                        <option value="Lawful Evil">Lawful Good</option>
                        <option value="Neutral Good">Neutral Good</option>
                        <option value="True Neutral">True Neutral</option>
                        <option value="Neutral Evil">Neutral Evil</option>
                        <option value="Chaotic Good">Chaotic Good</option>
                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                        <option value="Chaotic Evil">Chaotic Evil</option>
                    </select>
                    <label className="character-form__label">Level</label>
                <input 
                className="character-form__input"
                type="number"
                value={level}
                onChange={onLevelChange}
                />
                    <label className="character-form__label">Stat: Strength</label>
                <input 
                className="character-form__input"
                type="number"
                value={strength}
                onChange={onStrengthChange}
                />
                    <label className="character-form__label">Stat: Dexterity</label>
                <input 
                className="character-form__input"
                type="number"
                value={dexterity}
                onChange={onDexterityChange}
                />
                    <label className="character-form__label">Stat: Constitution</label>
                <input 
                className="character-form__input"
                type="number"
                value={constitution}
                onChange={onConstitutionChange}
                />
                    <label className="character-form__label">Stat: Intelligence</label>
                <input 
                className="character-form__input"
                type="number"
                value={intelligence}
                onChange={onIntelligenceChange}
                />
                    <label className="character-form__label">Stat: Wisdom</label>
                <input 
                className="character-form__input"
                type="number"
                value={wisdom}
                onChange={onWisdomChange}
                />
                    <label className="character-form__label">Stat: Charisma</label>
                <input 
                className="character-form__input"
                type="number"
                value={charisma}
                onChange={onCharismaChange}
                />
                <input
                className="character-form__submit"
                type="submit"
                value={isSaving ? "Saving..." : "Save"}
                />
            </fieldset>
        </form>
    );
}
export default CharacterForm;