import { Wallet } from 'src/wallet/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Wallet, (wallet)=> wallet.user,{
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn()
  public wallet: Wallet;
}