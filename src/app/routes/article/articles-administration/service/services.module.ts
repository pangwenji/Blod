import { NgModule, InjectionToken } from "@angular/core";
import { environment } from '../../../../../environments/environment';
// import { httpInterceptorProvides } from './httpInterceptorProvides';
export const API_CONFIG = new InjectionToken('ApiConfigToken');
@NgModule({
    declarations: [],
    imports: [],
    providers: [
        { provide: API_CONFIG, useValue: environment.production ? '/' : '/api/' },
        // httpInterceptorProvides,

    ]
})
export class ServiceModule { }  