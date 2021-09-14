import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api_ecommerce_rf',
      autoLoadEntities: true,
      synchronize: true,
      
    }),
    UsersModule,
    WalletModule,
  ],
})
export class AppModule { }
