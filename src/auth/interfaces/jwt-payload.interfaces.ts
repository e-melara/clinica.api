import { Modulo } from '../entities';

export interface JwtPayload {
  id: number;
  perfil?: string;
  roles?: string[];
  rutas?: Modulo[];
}
