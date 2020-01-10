import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-box',
    template: 'filter:<input type="text"/>'
})

export class FilterBoxComponent implements OnInit {
    ngOnInit(){}
}