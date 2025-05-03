const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("preview");
const cssOutput = document.getElementById("cssOutput");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generateGradient() {
  const value1 = color1.value;
  const value2 = color2.value;
  const dir = direction.value;
  const gradient = `linear-gradient(${dir}, ${value1}, ${value2})`;

  preview.style.background = gradient;
  cssOutput.value = `background: ${gradient};`;
}

generateBtn.addEventListener("click", generateGradient);

copyBtn.addEventListener("click", () => {
  cssOutput.select();
  document.execCommand("copy");
  copyBtn.textContent = "✅ Copiado";
  setTimeout(() => (copyBtn.textContent = "📋 Copiar CSS"), 2000);
});

// Aplica uno por defecto al cargar
generateGradient();
