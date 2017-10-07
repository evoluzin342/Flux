import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CounterPageComponent} from './counter/counter-page-component';

import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterPageComponent
	],
	imports     : [
		BrowserModule
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
