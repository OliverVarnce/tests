function caesarCipher(text: string, shift: number, decrypt: boolean = false): string {
    if (decrypt) shift = -shift;
  
    return text.replace(/[a-zA-Z]/g, (char) => {
      const start = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(((char.charCodeAt(0) - start + shift + 26) % 26) + start);
    });
  }
  
  // Перевірка
  console.log(caesarCipher("Hello, World!", 3)); // "Khoor, Zruog!"
  console.log(caesarCipher("Khoor, Zruog!", 3, true));