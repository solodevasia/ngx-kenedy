import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseComponent {
    constructor() {
        this.onclick = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseComponent }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseComponent, decorators: [{
            type: Injectable
        }], propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], classes: [{
                type: Input
            }], value: [{
                type: Input
            }], onclick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2NvbnN0YW50cy9iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd4RSxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQU1ZLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQUN4RTsrR0FOWSxhQUFhO21IQUFiLGFBQWE7OzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBRUEsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBpZCE6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZSE6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NlcyE6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWUhOiB1bmtub3duO1xuICBAT3V0cHV0KCkgb25jbGljazogRXZlbnRFbWl0dGVyPHVua25vd24+ID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xufVxuIl19