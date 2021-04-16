import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrexcyService } from './trexcy.service';
import { CreateTrexcyDto } from './dto/create-trexcy.dto';
import { UpdateTrexcyDto } from './dto/update-trexcy.dto';

@Controller('trexcy')
export class TrexcyController {
  constructor(private readonly trexcyService: TrexcyService) {}

  @Post()
  create(@Body() createTrexcyDto: CreateTrexcyDto) {
    return this.trexcyService.create(createTrexcyDto);
  }

  @Get()
  findAll() {
    return this.trexcyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trexcyService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrexcyDto: UpdateTrexcyDto) {
    return this.trexcyService.update(+id, updateTrexcyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trexcyService.remove(+id);
  }
}
