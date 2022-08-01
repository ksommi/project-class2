const generateOrder = (buyer, cart, total) => {
  return {
    buyer: {
      name: buyer.names,
      address: buyer.address,
      mail: buyer.email,
      phone: buyer.phone,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default generateOrder;
