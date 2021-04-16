import { Injectable } from '@nestjs/common';
import { CreateTrexcyDto } from './dto/create-trexcy.dto';
import { UpdateTrexcyDto } from './dto/update-trexcy.dto';

@Injectable()
export class TrexcyService {
  create(createTrexcyDto: CreateTrexcyDto) {
    return 'This action adds a new trexcy';
  }

  findAll() {
    return `This action returns all trexcy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trexcy`;
  }

  update(id: number, updateTrexcyDto: UpdateTrexcyDto) {
    return `This action updates a #${id} trexcy`;
  }

  remove(id: number) {
    return `This action removes a #${id} trexcy`;
  }
}
