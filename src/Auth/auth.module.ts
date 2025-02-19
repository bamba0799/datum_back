import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './jwt.strategy';
;
import { JwtCustomModule } from './jwt.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/user/user.module';
import { MembreStructModule } from 'src/membre-struct/membre-struct.module';
import { MembreStruct } from 'src/membre-struct/entities/membre-struct.entity';

@Module({
  imports: [UserModule,
    PassportModule,
    JwtCustomModule,
    TypeOrmModule.forFeature([MembreStruct])
  ],
 
  providers: [
    
    AuthService,
    JwtStrategy    
  ],
  controllers: [AuthController],
  
})
export class AuthModule {}
