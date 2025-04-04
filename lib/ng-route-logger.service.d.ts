import { Router } from '@angular/router';
import * as i0 from "@angular/core";
interface RouteLog {
    route: string;
    loadTime: number;
}
export declare class NgRouteLoggerService {
    private router;
    private startTime;
    private logsSubject;
    logs$: import("rxjs").Observable<RouteLog[]>;
    constructor(router: Router);
    getLogs(): import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgRouteLoggerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgRouteLoggerService>;
}
export {};
