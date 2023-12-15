// auth.utils.ts
import * as bcrypt from 'bcrypt'; // Możesz użyć modułu bcrypt lub innego odpowiedniego narzędzia do szyfrowania hasła
import * as jwt from 'jsonwebtoken'; // Moduł do generowania tokenów JWT

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}

export function generateToken(userId: string): string {
  const secretKey = 'tajnyKlucz'; // Tutaj należy użyć bezpiecznego klucza uwierzytelniającego
  const expiresIn = '1h'; // Czas wygaśnięcia tokenu

  const token = jwt.sign({ userId }, secretKey, { expiresIn });
  return token;
}
