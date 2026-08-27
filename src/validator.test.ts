import { validateTitle } from './validator';

describe('validateTitle', () => {
  it('deve falhar quando o título é uma string vazia', () => {
    const result = validateTitle('');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('O título não pode ser vazio ou conter apenas espaços.');
  });

  it('deve falhar quando o título contém apenas espaços', () => {
    const result = validateTitle('     ');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('O título não pode ser vazio ou conter apenas espaços.');
  });

  it('deve falhar quando o título tem menos de 5 caracteres', () => {
    const result = validateTitle('Erro');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('O título deve possuir no mínimo 5 caracteres.');
  });

  it('deve passar quando o título tem exatamente 5 caracteres', () => {
    const result = validateTitle('Erro!');
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('deve falhar quando o título tem mais de 100 caracteres', () => {
    const longTitle = 'A'.repeat(101);
    const result = validateTitle(longTitle);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('O título deve possuir no máximo 100 caracteres.');
  });

  it('deve passar quando o título tem exatamente 100 caracteres', () => {
    const limitTitle = 'A'.repeat(100);
    const result = validateTitle(limitTitle);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('deve passar com um título válido comum', () => {
    const result = validateTitle('Impressora não liga no setor financeiro');
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('deve considerar o trim ao validar o tamanho mínimo', () => {
    const result = validateTitle('   Ok   ');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('O título deve possuir no mínimo 5 caracteres.');
  });
});