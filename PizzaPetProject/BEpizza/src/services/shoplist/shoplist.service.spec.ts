import { Test, TestingModule } from '@nestjs/testing';
import { ShoplistService } from './shoplist.service';

describe('ShoplistService', () => {
  let service: ShoplistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoplistService],
    }).compile();

    service = module.get<ShoplistService>(ShoplistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
