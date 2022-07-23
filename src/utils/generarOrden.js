const generarOrden = (buyer, cart, total) => {
  return {
    buyer: {
      name: buyer.name,
      address: buyer.address,
      mail: buyer.mail,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default generarOrden;
