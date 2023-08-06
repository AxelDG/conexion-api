import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadDto } from './dto/ciudad.dto';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  create(@Body() createCiudadDto: CiudadDto) {
    return this.ciudadService.create(createCiudadDto);
  }

  @Get()
  findAll() {
    return this.ciudadService.getAllRaw();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadDto: CiudadDto) {
    return this.ciudadService.update(+id, updateCiudadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.remove(+id);
  }
}
