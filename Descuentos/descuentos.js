
function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioDescuento = 100 - descuento
  const precioConDescuento = (precio * (100 - descuento)) / 100
  
  return precioConDescuento;
}

