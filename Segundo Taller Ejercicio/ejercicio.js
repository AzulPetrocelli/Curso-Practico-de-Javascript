const cupones = 
["diez",
"veinte",
"treinta",
"cuarenta",
"cincuenta",
"sesenta",
"setenta",
"ochenta",
""]
const mensaje = document.getElementById("mensaje")

function calcularDescuento(precio, descuento){
  const monto = (precio * (100 - descuento)) / 100
  mensaje.textContent = "El precio con descuento es de: $" + monto
}

function CalcularMonto() {
  const InputPrecio = document.getElementById("precio");
  const precioValue = InputPrecio.value;

  const InputCupon = document.getElementById("cupon");
  const cuponValue = InputCupon.value;

  let descuento

  switch(cuponValue) {
    case cupones[0]:
      descuento = 10
    break;

    case cupones[1]:
      descuento = 20
    break;

    case cupones[2]:
      descuento = 30
    break;

    case cupones[3]:
      descuento = 40
    break;

    case cupones[4]:
      descuento = 50
    break;

    case cupones[5]:
      descuento = 60
    break;

    case cupones[6]:
      descuento = 70
    break;

    case cupones[7]:
      descuento = 80
    break;

    case cupones[8]:
      descuento = 0
    break;
  }
  
  calcularDescuento(precioValue, descuento)
}