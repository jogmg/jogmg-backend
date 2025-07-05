import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getModelToken(User.name), useValue: { create: jest.fn() } },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<User>>(getModelToken(User.name));
  });

  describe('create-user', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'john doe',
        email: 'john@example.com',
        subject: 'test',
        message: 'hello',
      };

      const newUser = {
        _id: '1',
        ...createUserDto,
      };

      jest.spyOn(userModel, 'create').mockResolvedValue(newUser as any);
      expect(await service.create(createUserDto)).toEqual(newUser);
      const result = expect(userModel.create).toHaveBeenCalledWith(
        createUserDto,
      );
      console.log(result);
    });
  });
});
