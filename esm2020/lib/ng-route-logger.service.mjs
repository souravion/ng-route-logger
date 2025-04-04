import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NgRouteLoggerService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcm91dGUtbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1yb3V0ZS1sb2dnZXIvc3JjL2xpYi9uZy1yb3V0ZS1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBUXZDLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKMUIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7UUFDMUQsVUFBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxjQUFjO2FBQ25EO2lCQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDekMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0hBMUJVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW50ZXJmYWNlIFJvdXRlTG9nIHtcbiAgcm91dGU6IHN0cmluZztcbiAgbG9hZFRpbWU6IG51bWJlcjtcbn1cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUm91dGVMb2dnZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN0YXJ0VGltZSA9IDA7XG4gIHByaXZhdGUgbG9nc1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJvdXRlTG9nW10+KFtdKTtcbiAgbG9ncyQgPSB0aGlzLmxvZ3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpOyAvLyBTdGFydCB0aW1lclxuICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICBjb25zdCBsb2dzID0gWy4uLnRoaXMubG9nc1N1YmplY3QudmFsdWUsIHsgcm91dGU6IGV2ZW50LnVybCwgbG9hZFRpbWUgfV07XG4gICAgICAgIHRoaXMubG9nc1N1YmplY3QubmV4dChsb2dzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldExvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9ncyQuc3Vic2NyaWJlKGxvZ3MgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9ncykgJiYgbG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUudGFibGUobG9ncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbG9ncyB0byBkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==