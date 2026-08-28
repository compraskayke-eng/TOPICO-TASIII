const MIN_LENGTH = 5;
const MAX_LENGTH = 100;

function validarChamado(titulo: string): boolean {
  if (!titulo || titulo.trim().length === 0) {
    throw new Error("O título do chamado não pode ser vazio.");
  }

  const tituloLimpo = titulo.trim();

  if (tituloLimpo.length < MIN_LENGTH) {
    throw new Error("O título deve possuir no mínimo 5 caracteres.");
  }

  if (tituloLimpo.length > MAX_LENGTH) {
    throw new Error("O título deve possuir no máximo 100 caracteres.");
  }

  return true;
}

export default validarChamado;