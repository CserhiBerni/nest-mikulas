import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  constructor(private readonly db: PrismaService) {}
  async create(createChildDto: CreateChildDto) {
    return await this.db.child.create({
      data: createChildDto
    });
  }

  async findAll() {
    return await this.db.child.findMany();
  }

  async findOne(id: number) {
    return await this.db.child.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    return await this.db.child.update({
      where: {
        id
      },
      data: updateChildDto
    });
  }

  async remove(id: number) {
    return await this.db.child.delete({
      where: {
        id
      }
    });
  }

  async addToy(childId: number, toyId: number) {
    return await this.db.child.update({
      where: {
        id: childId
      }, 
      data: {
        toys: {
          connect: {id: toyId}
        }
      }
    })
  }

  async removeToy(childId: number, toyId: number) {
    
  }
}
