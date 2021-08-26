const buyIt = () => {
  const fullName = {
    firstName: getValue("firstName"),
    lastName: getValue("lastName"),
  };
  const address = {
    city: getValue("city"),
    street: getValue("street"),
    zipCode: getValue("zipCode"),
  };

  const item = {
    itemProperty: getValue("itemProperty"),
    count: getValue("count"),
    priceForPiece: getValue("priceForPiece"),
    totalPrice: getValue("priceForPiece"),
  };
  const obj = {
      fullName,
      address,
      item
  }
  console.log(obj);
};

const getValue = (id) => document.getElementById(id).value;

// const selectItem = (item) => {
//     switch (item) {
//         case: 

//         break
//     }
// }
