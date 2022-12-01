import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesModule } from './profiles/profiles.module';
import { EnsemblesModule } from './ensembles/ensembles.module';

@Module({
  imports: [
    ProfilesModule,
    EnsemblesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/daos'),
  ],
})
export class AppModule {}
