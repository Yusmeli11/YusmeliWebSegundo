import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosResolver } from './autos.resolver';
import { AutosService } from './autos.service';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  providers: [AutosResolver, AutosService],
})
export class AutosModule {}
