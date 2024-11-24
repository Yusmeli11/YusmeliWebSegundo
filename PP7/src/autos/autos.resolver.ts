import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AutosService } from './autos.service';
import { Auto } from './entities/auto.entity';
import { CreateAutoInput } from './dto/create-auto.input';
import { UpdateAutoInput } from './dto/update-auto.input';

@Resolver(() => Auto)
export class AutosResolver {
  constructor(private readonly autosService: AutosService) {}

  @Mutation(() => Auto)
  createAuto(@Args('createAutoInput') createAutoInput: CreateAutoInput) {
    return this.autosService.create(createAutoInput);
  }

  @Query(() => [Auto], { name: 'autos' })
  findAll() {
    return this.autosService.findAll();
  }

  @Query(() => Auto, { name: 'auto' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.autosService.findOne(id);
  }

  @Mutation(() => Auto)
  updateAuto(@Args('updateAutoInput') updateAutoInput: UpdateAutoInput) {
    return this.autosService.update(updateAutoInput.id, updateAutoInput);
  }

  @Mutation(() => Auto)
  removeAuto(@Args('id', { type: () => ID }) id: number) {
    return this.autosService.remove(id);
  }
}
