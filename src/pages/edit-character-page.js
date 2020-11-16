import React from "react";
import { Helmet } from "react-helmet";
import useParams from "react-router-dom";
import EditCharacter from "../components/edit-character";

function EditCharacterPage() {
    const {id} =useParams();
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <EditCharacter id={id}/>
    </main>
  );
}

export default EditCharacterPage;