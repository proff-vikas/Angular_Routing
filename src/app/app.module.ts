import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { BalanceComponent } from './balance/balance.component';
import { DepositaComponent } from './deposita/deposita.component';
import { DepositbComponent } from './depositb/depositb.component';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawComponent,
    DepositComponent,
    BalanceComponent,
    DepositaComponent,
    DepositbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
