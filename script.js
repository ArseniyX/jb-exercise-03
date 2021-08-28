window.onload = () => {
  selectItem(setValue("itemProperty"));

  document.getElementById("count").oninput = () => {
    calculate()
  };
};

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
    totalPrice: getValue("totalPrice"),
  };
  const obj = {
    fullName,
    address,
    item,
  };
  console.log(obj);
};

const getValue = (id) => document.getElementById(id).value;

const setValue = (id) => document.getElementById(id);

const selectItem = (item) => {
  const fruit = document.getElementById("priceForPiece");
  
  switch (item.value) {
    case "banana":
      fruit.value = 9.9;
      break;
    case "kiwi":
      fruit.value = 22.9;
      break;
    case "pineapple":
      fruit.value = 49.9;
      break;
    default:
      fruit.value = "error";
  }
  calculate()
};

const calculate = () => {
  setValue("totalPrice").value = Math.round(
    count.value * getValue("priceForPiece")
  );
}




