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
  const BotonSumar = document.getElementById("sumar") as HTMLButtonElement;
  const BotonRestar = document.getElementById("restar") as HTMLButtonElement;
  const BotonMultiplicar = document.getElementById("multiplicar") as HTMLButtonElement;
  const BotonDividir = document.getElementById("dividir") as HTMLButtonElement;

  BotonSumar.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = sumar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  BotonRestar.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = restar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  BotonMultiplicar.addEventListener("click", () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      const result = multiplicar(num1, num2);
      resultado.textContent = `Resultado: ${result}`;
  });

  BotonDividir.addEventListener("click", () => {
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
