const resultP = document.getElementById("ResultP");

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioDescuento = 100 - descuento
  const precioConDescuento = (precio * (100 - descuento)) / 100
  
  return precioConDescuento;
}

function onclickCalcularPrecioConDescuento() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  resultP.innerText = "El precio con descuento es de: $" + precioConDescuento
}

