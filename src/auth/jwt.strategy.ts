import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
interface JwtPayload {
  sub: string;
  email: string;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET', 'default_secret'), // ✅ Ensures secret is a string
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    if (!payload) {
      throw new UnauthorizedException('Invalid token');
    }
    return Promise.resolve(payload); // ✅ Explicitly returning a Promise
  }
}
