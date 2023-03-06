import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { JwtPayload } from 'src/auth/interfaces';
import { META_ROLE } from './../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const user: JwtPayload = req.user as JwtPayload;

    const validRoles: string[] = this.reflector.get(
      META_ROLE,
      context.getHandler(),
    );

    if (!validRoles || validRoles.length === 0) {
      return true;
    }

    if (user?.roles) {
      for (const rol of user?.roles) {
        if (validRoles.includes(rol)) {
          return true;
        }
      }
    }

    throw new ForbiddenException(
      'Peticion no permitida, no tiene los permisos necesarios',
    );
  }
}
