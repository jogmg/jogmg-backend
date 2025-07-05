import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ApiResponse } from '../utilities/api.response';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = new ApiResponse({
        error: false,
        statusCode: 200,
        message: 'Users retrieved successfully',
        data: ['users'],
      });

      jest.spyOn(service, 'findAll').mockImplementation(() => result as any);
      expect(await controller.findAll()).toBe(result);
    });
  });
});
