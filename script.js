window.onload = () => {
  selectItem(itemProperty);

  count.oninput = () => {
    calculate();
  };
};

const buyIt = () => {
  const fullName = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  const address = {
    city: city.value,
    street: street.value,
    zipCode: zipCode.value,
  };

  const item = {
    itemProperty: itemProperty.value,
    count: count.value,
    priceForPiece: priceForPiece.value,
    totalPrice: totalPrice.value,
  };
  const obj = {
    fullName,
    address,
    item,
  };
  console.log(obj);
};

const selectItem = (item) => {
  switch (item.value) {
    case "banana":
      priceForPiece.value = "9.90";
      break;
    case "kiwi":
      priceForPiece.value = "22.90";
      break;
    case "pineapple":
      priceForPiece.value = "49.90";
      break;
    default:
      priceForPiece.value = "error";
  }
  calculate();
};

const calculate = () => {
  totalPrice.value = (count.value * priceForPiece.value).toFixed(2);
};
