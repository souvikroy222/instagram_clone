import { addDoc, collection, doc, setDoc } from "firebase/firestore";

// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export async function seedDatabase(firebase) {
  const users = [
    {
      userId: "9oB51ZdR7CeWF41BuuJfCDXp9ny2",
      username: "karl",
      fullName: "Karl Hadwen",
      emailAddress: "karlhadwen@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["9oB51ZdR7CeWF41BuuJfCDXp9ny2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["9oB51ZdR7CeWF41BuuJfCDXp9ny2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["9oB51ZdR7CeWF41BuuJfCDXp9ny2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    //await setDoc(doc(firebase, "users", k.toString()), users[k]);
    await addDoc(collection(firebase,'users'),users[k])
    
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    //await setDoc(doc(firebase, "photos", i.toString()), {
      await addDoc(collection(firebase, "photos"), {
      photoId: i,
      userId: "2",
      imageSrc: `/images/users/raphael/${i}.jpg`,
      caption: "Saint George and the Dragon",
      likes: [],
      comments: [
        {
          displayName: "dali",
          comment: "Love this place, looks like my animal farm!",
        },
        {
          displayName: "orwell",
          comment: "Would you mind if I used this picture?",
        },
      ],
      userLatitude: "40.7128°",
      userLongitude: "74.0060°",
      dateCreated: Date.now(),
    });
  }
}
