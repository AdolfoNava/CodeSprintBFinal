import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCharacterPage from "../pages/add-character-page";
import CharacterDisplayPage from "../pages/character-display-page";
import NotFoundPage from "../pages/failed-to-load-page";
import EditCharacter from "./edit-character";
import Nav from "./nav";

function App(){
    return(
        <BrowserRouter>
        <Nav/>
        <Switch>
            <Route path="/" exact>
                <CharacterDisplayPage/>
            </Route>
            <Route path="/add">
                <AddCharacterPage/>
            </Route>
            <Route path="/edit/:id">
                <EditCharacter/>
            </Route>
            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}
export default App;