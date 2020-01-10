import{NgModule} from '@angular/core';
import {CommonModule} from '@angular/core';
import{CustomersComponent} from'./customers.component';
import {CustomersListComponent} from './customer-list/customer-list.component';
import {FilterBoxComponent} from './customer-list/filter-box.component';

@NgModule({
    declarations:[CustomersComponent,
        CustomersListComponent,
        FilterBoxComponent
    ],
    imports:[CustomersModule],
    exports:[CustomersComponent]
})

export class CustomersModule{
    
}