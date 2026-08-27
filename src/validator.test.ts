function validarChamado(titulo: string): boolean {
    const tamanho = titulo.trim().length;

    if (tamanho === 0) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (tamanho < 5) {
        throw new Error(
            "O título do chamado deve possuir no mínimo 5 caracteres."
        );
    }

    if (tamanho > 100) {
        throw new Error(
            "O título do chamado deve possuir no máximo 100 caracteres."
        );
    }

    return true;
}

export default validarChamado;