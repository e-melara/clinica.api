import { AuthGuard } from '@nestjs/passport';
import { applyDecorators, UseGuards } from '@nestjs/common';

import { RoleProtected } from './role-protected.decorator';
import { UserRoleGuard } from './../guards/user-role.guard';

export function Auth(roles?: string[]) {
  return applyDecorators(
    RoleProtected(roles),
    UseGuards(AuthGuard('jwt'), UserRoleGuard),
  );
}
