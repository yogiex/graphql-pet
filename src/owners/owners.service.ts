import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/pets.entity';
import { PetsService } from 'src/pets/pets.service';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
  @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  @Inject(forwardRef(() => PetsService)) private petService: PetsService
  
  ){}


  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOne(id);
  }

  getPets() {
    return this.petService.findAll()
  }
  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
