export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const MIN_LENGTH = 5;
const MAX_LENGTH = 100;

export function validateTitle(title: string): ValidationResult {
  const errors: string[] = [];

  if (title === undefined || title === null) {
    errors.push('O título não pode ser vazio.');
    return { valid: false, errors };
  }

  const trimmed = title.trim();

  if (trimmed.length === 0) {
    errors.push('O título não pode ser vazio ou conter apenas espaços.');
  } else {
    if (trimmed.length < MIN_LENGTH) {
      errors.push(`O título deve possuir no mínimo ${MIN_LENGTH} caracteres.`);
    }
    if (trimmed.length > MAX_LENGTH) {
      errors.push(`O título deve possuir no máximo ${MAX_LENGTH} caracteres.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}