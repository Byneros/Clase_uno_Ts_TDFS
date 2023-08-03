function sumar(x: number, y: number): number {
  return x + y;
}

function restar(x: number, y: number): number {
  return x - y;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}

function dividir(x: number, y: number): number {
  if (y !== 0) {
      return x / y;
  } else {
      throw new Error("No se puede dividir por cero");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("input1") as HTMLInputElement;
  const input2 = document.getElementById("input2") as HTMLInputElement;
  const resultado = document.getElementById("resultado") as HTMLParagraphElement;
  const sumarBtn = document.getElementById("sumar") as HTMLButtonElement;
  const restarBtn = document.getElementById("restar") as HTMLButtonElement;
  const multiplicarBtn = document.getElementById("multiplicar") as HTMLButtonElement;
  const dividirBtn = document.getElementById("dividir") as HTMLButtonElement;

  sumarBtn.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = sumar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  restarBtn.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = restar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  multiplicarBtn.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = multiplicar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  dividirBtn.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      try {
          const result = dividir(num1, num2);
          resultado.textContent = `Resultado: ${result}`;
      } catch (error) {
          resultado.textContent = "Error: No se puede dividir por cero";
      }
  });
});
