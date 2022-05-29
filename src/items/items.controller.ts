import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './entities/items.entity';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiOkResponse({
    type: CreateItemDto,
    isArray: true,
    description: 'Get All Items',
  })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(@Query('name') name?: string): Promise<Item[]> {
    return this.itemsService.findAll(name);
  }

  @ApiOkResponse({
    type: CreateItemDto,
    isArray: false,
    description: 'Get An Item',
  })
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Item> {
    const item = this.itemsService.findOne(id);
    if (!item) {
      throw new NotFoundException();
    } else {
      return item;
    }
  }

  @ApiCreatedResponse({ type: CreateItemDto, description: 'Create An Item' })
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @ApiCreatedResponse({ type: CreateItemDto, description: 'Delete An Item' })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @ApiCreatedResponse({ type: CreateItemDto, description: 'Update An Item' })
  @Put(':id')
  async update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<Item> {
    return await this.itemsService.update(id, updateItemDto);
  }
}
