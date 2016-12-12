function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

export { isEven , isOdd };
