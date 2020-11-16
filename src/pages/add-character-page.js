import React from "react";
import { Helmet } from "react-helmet";
import AddCharacter from "../components/add-character";

function AddCharacterPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddCharacter />
    </main>
  );
}

export default AddCharacterPage;