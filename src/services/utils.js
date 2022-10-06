import { collection, query, where, getDocs } from "firebase/firestore";

export async function isUserExists(firebaseDB, userEmailAddress) {
  const q = query(
    collection(firebaseDB, "users"),
    where("emailAddress", "==", userEmailAddress)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  return querySnapshot;
}
