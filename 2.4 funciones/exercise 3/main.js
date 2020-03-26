function purchase(price) {
  let iva = (21 * price) / 100;
  console.log(`Precio sin IVA: ${price}, IVA: ${iva}, Total: ${price + iva}`);

  // return iva;
}
purchase(10);
