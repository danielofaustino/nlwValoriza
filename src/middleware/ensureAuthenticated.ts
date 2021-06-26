import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token

  const authToken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Validar se token é válido

  const [, token] = authToken.split(' ');

  try {
    const decode = verify(token, '1a5917783b5af3e93c34d5feab944cea');
    console.log(decode);
  } catch (error) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário

  return next();
}
