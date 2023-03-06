import { compare } from 'bcrypt';
import { DataSource, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { LoginAuthDto } from './dto/login-auth.dto';
import { Usuario, Perfil, Modulo, Persona } from './entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly jwtService: JwtService,
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async login(login: LoginAuthDto) {
    const user = await this.userRepository.findOne({
      where: { usuario: login.usuario },
      relations: {
        perfils: true,
        persona: true,
      },
    });

    if (!user) {
      throw new NotFoundException('El usuario no es valido');
    }

    const isEqual = await compare(login.password, user.password);
    if (!isEqual) {
      throw new NotFoundException('Contraseña incorrecta');
    }

    const arrayRoles = [];
    const rutas: Map<number, Modulo> = new Map();

    const perfilRepository = this.dataSource.getRepository(Perfil);
    const perfilRoles = await perfilRepository.findOne({
      where: {
        id: user.perfils[0].id,
      },
      relations: ['roles.modulo'],
    });
    perfilRoles.roles.forEach((rol) => {
      arrayRoles.push(rol.nombre);
      if (!rutas.has(rol.modulo.id)) {
        rutas.set(rol.modulo.id, rol.modulo);
      }
    });

    const array = [...rutas].map((item) => item[1]);

    return {
      user: {
        id: user.id,
        perfil: user.perfils,
        persona: user.persona,
        usuario: user.usuario,
      },
      token: this.getJWTToken({
        id: user.id,
        rutas: array,
        roles: arrayRoles,
      }),
    };
  }

  async populate() {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const repositoryPerfil = this.dataSource.getRepository(Perfil);
      const administrador = await repositoryPerfil.findOne({
        where: { id: 1 },
      });
      const persona = new Persona({ nombre: 'Edwin', apellido: 'Melara' });
      const usuario = new Usuario({
        password: 'password',
        usuario: 'melara0606',
      });
      usuario.persona = persona;
      usuario.perfils = [administrador];

      await queryRunner.manager.save(persona);
      const response = await queryRunner.manager.save(usuario);
      queryRunner.commitTransaction();
      return response;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new ForbiddenException(error.message);
    }
  }

  async checkAuthStatus(payload: JwtPayload) {
    return {
      token: this.getJWTToken({
        id: payload.id,
        rutas: payload.rutas,
        perfil: payload.perfil,
      }),
    };
  }

  private getJWTToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
