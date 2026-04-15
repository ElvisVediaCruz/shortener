class Base62 {
  constructor(alphabet) {
    this.alphabet = alphabet;
    this.base = BigInt(alphabet.length);
  }

  // 🔥 encode número → base62
  encode(num) {
    let n = BigInt(num);

    if (n === 0n) return this.alphabet[0];

    let result = '';

    while (n > 0n) {
      result = this.alphabet[Number(n % this.base)] + result;
      n = n / this.base;
    }

    return result;
  }

  // 🔥 decode base62 → número
  decode(str) {
    let num = 0n;
    console.log("str", str);
    for (let char of str) {
      const index = this.alphabet.indexOf(char);

      if (index === -1) {
        throw new Error(`Carácter inválido: ${char}`);
      }

      num = num * this.base + BigInt(index);
    }

    return num;
  }
}

export default Base62;