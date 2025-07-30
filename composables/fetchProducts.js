// fetchProducts.js
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase.js';

export async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return products;
}
import { fetchProducts } from './fetchProducts.js';

async function showProducts() {
  const products = await fetchProducts();
  console.log(products);
}

showProducts();
