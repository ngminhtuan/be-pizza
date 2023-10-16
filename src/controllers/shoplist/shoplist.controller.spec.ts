import { Test, TestingModule } from '@nestjs/testing';
import { ShoplistController } from './shoplist.controller';

describe('ShoplistController', () => {
  let controller: ShoplistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoplistController],
    }).compile();

    controller = module.get<ShoplistController>(ShoplistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
