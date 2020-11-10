import db from "./firebase";
import internalData from "./internal-data.json";

async function loadInternalData() {
  internalData.map(addCharacter);
}

async function addCharacter({ name, dateCreated, race, classes, alignment, level, strength, dexterity, constitution, intelligence, wisdom,charisma}) {
  try {
    const data = { name, dateCreated, race, classes, alignment, level, strength,dexterity,constitution};

    // Look up a movie matching the title and release year.
    const snapshot = await db
      .collection("characters")
      .where("name", "==", name)
      .where("race", "==", dateCreated)
      .where("classes", "==", classes)
      .where("alignment", "==", alignment)
      .where("level", "==", level)
      .where("strength", "==", strength)
      .where("dexterity", "==", dexterity)
      .where("constitution", "==", constitution)
      .where("intelligence", "==", intelligence)
      .where("wisdom", "==", wisdom)
      .where("charisma", "==", charisma)
      .get();

    // Create a doc reference that points to where this movie is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("characters").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadInternalData;