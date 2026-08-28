import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
  test('Deve validar com sucesso um chamado com título dentro do limite', () => {
    const resultado = validarChamado("Erro de conexão com o banco MySQL");
    expect(resultado).toBe(true);
  });

  test('Deve lançar erro se o título do chamado for vazio', () => {
    expect(() => {
      validarChamado("");
    }).toThrow("O título do chamado não pode ser vazio.");
  });

  test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
    expect(() => {
      validarChamado("   ");
    }).toThrow("O título do chamado não pode ser vazio.");
  });

  test('Deve lançar erro se o título tiver menos de 5 caracteres', () => {
    expect(() => {
      validarChamado("Erro");
    }).toThrow("O título deve possuir no mínimo 5 caracteres.");
  });

  test('Deve lançar erro se o título tiver mais de 100 caracteres', () => {
    const tituloLongo = 'A'.repeat(101);
    expect(() => {
      validarChamado(tituloLongo);
    }).toThrow("O título deve possuir no máximo 100 caracteres.");
  });
});