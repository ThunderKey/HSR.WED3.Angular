import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {
  DashboardComponent,
  CreateTransactionComponent,
  TransactionsComponent,
  TransactionTableComponent
} from './components';
import {TransactionResourceService} from './resources';

import {CurrencyValidator} from '../shared/validators';

const EXPORTED_DECLARATIONS = [
  DashboardComponent,
  TransactionsComponent,
  // Declarations (Components / Directives) which can be used outside the Module
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  CreateTransactionComponent,
  TransactionTableComponent,
  CurrencyValidator,
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    FormsModule,
    SharedModule,
    TransactionsRoutingModule
  ],
  exports: EXPORTS,
  providers: [
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module; add either here or in forRoot();
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
    TransactionResourceService,
  ]
})
export class TransactionsModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: TransactionsModule,
      providers: [ ]
    };
  }

}
