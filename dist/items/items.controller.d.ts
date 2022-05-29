import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './entities/items.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(name?: string): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: string): Promise<Item>;
    update(updateItemDto: CreateItemDto, id: string): Promise<Item>;
}
