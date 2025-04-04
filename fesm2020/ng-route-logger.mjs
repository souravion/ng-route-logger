import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

class NgRouteLoggerService {
    constructor(router) {
        this.router = router;
        this.startTime = 0;
        this.logsSubject = new BehaviorSubject([]);
        this.logs$ = this.logsSubject.asObservable();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.startTime = performance.now(); // Start timer
            }
            else if (event instanceof NavigationEnd) {
                const loadTime = performance.now() - this.startTime;
                const logs = [...this.logsSubject.value, { route: event.url, loadTime }];
                this.logsSubject.next(logs);
            }
        });
    }
    getLogs() {
        return this.logs$.subscribe(logs => {
            if (Array.isArray(logs) && logs.length > 0) {
                console.table(logs);
            }
            else {
                console.log('No logs to display');
            }
        });
    }
}
NgRouteLoggerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
NgRouteLoggerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

class NgRouteLoggerComponent {
}
NgRouteLoggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgRouteLoggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: NgRouteLoggerComponent, selector: "lib-ng-route-logger", ngImport: i0, template: `
    <p>
      ng-route-logger works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ng-route-logger', template: `
    <p>
      ng-route-logger works!
    </p>
  ` }]
        }] });

class NgRouteLoggerModule {
}
NgRouteLoggerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgRouteLoggerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerModule, declarations: [NgRouteLoggerComponent], exports: [NgRouteLoggerComponent] });
NgRouteLoggerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerModule, providers: [NgRouteLoggerService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgRouteLoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgRouteLoggerComponent
                    ],
                    imports: [],
                    providers: [NgRouteLoggerService],
                    exports: [
                        NgRouteLoggerComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-route-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgRouteLoggerComponent, NgRouteLoggerModule, NgRouteLoggerService };
//# sourceMappingURL=ng-route-logger.mjs.map
