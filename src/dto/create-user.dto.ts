import { CreateWalletDto } from "src/wallet/dto/create-wallet.dto";
import { Wallet } from "src/wallet/wallet.entity";

export class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    wallet?: Wallet;
  }