import { Injectable } from '@nestjs/common';
import { CiudadDto } from './dto/ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Escuela } from './entities/escuela.entity'

@Injectable()
export class CiudadService {
  ciudades: any;
  constructor (@InjectRepository(Ciudad) private readonly ciudadRepository : Repository<Ciudad>,
               @InjectRepository(Escuela) private readonly escuelaRepository : Repository<Escuela>) {}

  public async getAllRaw() : Promise<Ciudad[]> {
    // 
    let datos = await this.ciudadRepository.query("SELECT * FROM ciudades");

    datos.forEach(element => {
      let ciudad : Ciudad = new Ciudad(element['idCiudad'], element['nombre']);
      this.ciudades.push(ciudad);
  });
  return this.ciudades;
  }
  
  create(createCiudadDto: CiudadDto) {
    return 'This action adds a new ciudad';
  }

  findAll() {
    return `This action returns all ciudad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: CiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
