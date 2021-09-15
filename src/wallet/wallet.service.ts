import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private  walletsRepository: Repository<Wallet>,
  ) {}

  create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const wallet = new Wallet();
    wallet.name= createWalletDto.name;
    wallet.description= createWalletDto.description;
    wallet.coins= createWalletDto.coins;
    ////wallet.active createWalletDto.active;
    return this.walletsRepository.save(wallet);
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletsRepository.find({relations:['user']});
  }

  findOne(id: string): Promise<Wallet> {
    return this.walletsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.walletsRepository.delete(id);
  }
}
