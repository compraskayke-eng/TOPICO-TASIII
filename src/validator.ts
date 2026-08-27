function validarChamado(titulo: string): boolean {
  if (!titulo || titulo.trim().length === 0) {
    throw new Error("O título do chamado não pode ser vazio.");
  }

  return true;
}

export default validarChamado;