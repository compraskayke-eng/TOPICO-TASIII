import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
  test('Deve lançar erro se o título tiver mais de 100 caracteres', () => {
    const tituloLongo = 'A'.repeat(101);
    expect(() => {
      validarChamado(tituloLongo);
    }).toThrow("O título deve possuir no máximo 100 caracteres.");
  });

  test('Deve lançar erro se o título tiver menos de 5 caracteres', () => {
    expect(() => {
      validarChamado("Erro");
    }).toThrow("O título deve possuir no mínimo 5 caracteres.");
  });
});