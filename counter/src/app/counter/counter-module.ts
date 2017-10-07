import {NgModule} from "@angular/core";
import {CounterPageComponent} from "./counter-page-component";
import {CommonModule}   from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CounterPageComponent
    ],
    providers: [
    ]
})
export class CounterModule {}