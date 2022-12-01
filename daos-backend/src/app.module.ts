import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesModule } from './profiles/profiles.module';
import { EnsemblesModule } from './ensembles/ensembles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProfilesModule,
    EnsemblesModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/daos'),
  ],
})
export class AppModule {}
