// Firebase
import { initializeApp } from "firebase/app";
//Plural
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
//Single
import { doc, getDoc } from "firebase/firestore";
// Fb config
const firebaseConfig = {
  apiKey: "AIzaSyAXcUrwT_AIYYYVqupoCXJ0r9wJiYZ_1pM",
  authDomain: "iwi-jabox.firebaseapp.com",
  projectId: "iwi-jabox",
  storageBucket: "iwi-jabox.appspot.com",
  messagingSenderId: "1031515312374",
  appId: "1:1031515312374:web:fab2d0e798c23e8e691cd7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

/*********************************************************************/
async function getData() {
  const productsRef = collection(db, "productos");
  const docSnap = await getDocs(productsRef);
  const documents = docSnap.docs;
  const docsData = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docsData
}

/*********************************************************************/
async function getProductData(reference) {

  const docRef = doc(db, "productos", reference);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id }
  } else {
    throw new Error("No existe el producto");
  }
}

/*********************************************************************/
async function getCategoryData(reference) {
  const productsRef = collection(db, "productos");
  const q = query(productsRef, where('category', '==', reference.toString()))
  const docSnap = await getDocs(q);
  const documents = docSnap.docs;
  const docsData = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docsData

}
/*********************************************************************/

export { getData, getProductData, getCategoryData }