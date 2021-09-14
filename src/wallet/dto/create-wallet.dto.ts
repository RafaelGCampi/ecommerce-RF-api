import { Double } from "typeorm";

export class CreateWalletDto {
    name: string;
    description?: string;
    coins: number;
    active?: boolean;
}
