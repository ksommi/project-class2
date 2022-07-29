import Swal from "sweetalert2";

const orderForm = async (confirmBuy) => {
  const messageError = [];

  const checkList = (name, email, number, address) => {
    if (
      (!/([^a-zA-Z ])/.test(name) || name !== "") &&
      /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email) &&
      number.length >= 5 &&
      address.length >= 4
    ) {
      confirmBuy(formValues);
      Swal.fire({
        title: "Sus datos fueron recibidos!",
        html: "Espere mientras se genera su orden",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          alert("I was closed by the timer");
        }
      });
    } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      Swal.fire("El formato del mail es incorrecto");
    } else {
      let mensajeE = "";
      messageError.forEach((element) => {
        mensajeE = mensajeE + `<br/>` + element;
      });
      Swal.fire(mensajeE);
    }
  };

  const checkMails = (mail1, mail2) => {
    if (mail1 !== mail2) {
      Swal.fire("Los mails no coinciden");
      return false;
    } else {
      return true;
    }
  };

  const { value: formValues } = await Swal.fire({
    title: "Introduce tus datos",
    html: `<div class="orderInputContainer">
      <label>Nombre</label>
      <input type="text" id="swalInputName" class="swal2-input">
      <label>Email</label>
      <input type="email" id="swalInputMail" class="swal2-input">
      <label>Repetir Email</label>
      <input type="email" id="swalInputMailbis" class="swal2-input">
      <label>Teléfono</label>
      <input type="number" min="0" id="swalInputNumber" class="swal2-input">
      <label>Dirección</label>
      <input type="text" id="swalInputAddress" class="swal2-input">
      </div>`,
    focusConfirm: false,
    preConfirm: () => {
      const formulario = {
        name: document.getElementById("swalInputName").value,
        address: document.getElementById("swalInputAddress").value,
        mail: document.getElementById("swalInputMail").value,
        mail2: document.getElementById("swalInputMailbis").value,
        number: document.getElementById("swalInputNumber").value,
      };
      for (const [clave, valor] of Object.entries(formulario)) {
        if (valor === undefined || valor === null || valor === "") {
          messageError.push("Los datos en " + clave + " estan incompletos");
        }
      }
      return formulario;
    },
  });

  if (formValues) {
    if (checkMails(formValues.mail, formValues.mail2) === true) {
      checkList(
        formValues.name,
        formValues.mail,
        formValues.number,
        formValues.address
      );
    }
  }
};

export default orderForm;
