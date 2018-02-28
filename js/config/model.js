import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    sessionId: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryFaves = () => {
  return realm.objects("Fave");
};

export const createFave = sessionId => {
  realm.write(() => {
    realm.create("Fave", { id: sessionId, faved_on: new Date() });
  });
};

export const deleteFave = sessionId => {
  realm.write(() => {
    const deleteFave = realm.objects("Fave").filtered("id == $0", sessionId);
    realm.delete(deleteFave);
  });
};

export default realm;
