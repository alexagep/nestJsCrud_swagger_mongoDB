import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

// import { ItemsController } from '../src/items/items.controller';
// import { ItemsService } from '../src/items/items.service';
// import { Item } from '../src/items/interfaces/item.interface';
// import { Model } from 'mongoose';

// describe('CatsController', () => {
//   let itemsController: ItemsController;
//   let itemsService: ItemsService;
//   let itemModel: Model<Item>;
//   beforeEach(() => {
//     itemsService = new ItemsService(itemModel);
//     itemsController = new ItemsController(itemsService);
//   });

//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const result = [
//         {
//           _id: '6280b638fe6fbb953e002974',
//           name: 'ALI',
//           description: 'test APi',
//           qty: 50,
//           __v: 0,
//         },
//         {
//           _id: '6280b662fe6fbb953e002976',
//           name: 'SAEID',
//           description: 'second APi',
//           qty: 89,
//           __v: 0,
//         },
//         {
//           _id: '6280b66ffe6fbb953e002978',
//           name: 'PENTHOL',
//           description: 'fourth APi',
//           qty: 213,
//           __v: 0,
//         },
//         {
//           _id: '6280c2af81b75f04a3e120d0',
//           name: 'ROOHI',
//           description: 'third APi',
//           qty: 349,
//           __v: 0,
//         },
//         {
//           _id: '6280e23a654d172a2491500f',
//           name: 'ROOHI',
//           description: 'third APi',
//           qty: 349,
//           __v: 0,
//         },
//         {
//           _id: '6280e250654d172a24915011',
//           description: 'third APi',
//           qty: 349,
//           __v: 0,
//         },
//         {
//           _id: '6280e264654d172a24915013',
//           name: 'ROOHI',
//           description: 'third APi',
//           qty: 1,
//           __v: 0,
//         },
//         {
//           _id: '6280e2810c3da1cbe4261ecd',
//           description: 'third APi',
//           qty: 349,
//           __v: 0,
//         },
//         {
//           _id: '6280fe5464d5744b1c3741a5',
//           name: 'Ashkan',
//           description: '7th APi',
//           qty: 500,
//           __v: 0,
//         },
//       ];
//       jest.spyOn(itemsService, 'findAll').mockImplementation(() => result);

//       expect(await itemsController.findAll()).toBe(result);
//     });
//   });
// });
