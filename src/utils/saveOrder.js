import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2";

const saveOrder = (cart, orden, navigate) => {
  // Primer paso: abrir un batch
  const batch = writeBatch(db);

  // Array que me define si hay productos sin stock
  const outOfStock = [];

  // Chequear el stock de producto en nuestra db y restarlo a la cantidad, si corresponde
  cart.forEach((productInCart) => {
    getDoc(doc(db, "products", productInCart.id)).then(
      async (documentSnapshot) => {
        // Generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar
        const product = {
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        };

        //Hacemos un update en caso que el stock supere a la cantidad.
        if (product.stock >= productInCart.quantity) {
          batch.update(doc(db, "products", product.id), {
            stock: product.stock - productInCart.quantity,
          });
        } else {
          outOfStock.push(product);
        }

        if (outOfStock.length === 0) {
          addDoc(collection(db, "orders"), orden)
            .then(({ id }) => {
              //Recien hacemos el commit una vez que se genera la order
              batch.commit().then(() => {
                Swal.fire("Se generó la order con id: " + id);
                navigate(`/order/${id}`);
              });
            })
            .catch((err) => {
              Swal.fire(`Error: ${err.message}`);
            });
          // Si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
        } else {
          let mensaje = "";
          for (const product of outOfStock) {
            mensaje += `${product.title}`;
          }
          Swal.fire(`Productos fuera de stock:${mensaje}`);
        }
      }
    );
  });
};

export default saveOrder;
