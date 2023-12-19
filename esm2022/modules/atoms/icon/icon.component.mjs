import { Component, Input } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import * as i0 from "@angular/core";
export class IconComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.name = 'house';
        this.type = 'fa fa-';
    }
    handleClick() {
        this.onclick.emit(this.value);
    }
    ngOnInit() {
        this.classes = `${this.type}${this.name} ${this.classes}`.replace('undefined', '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: IconComponent, selector: "knd-icon", inputs: { name: "name", type: "type" }, usesInheritance: true, ngImport: i0, template: "<span\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  class=\"{{ classes }}\"\n  (click)=\"value ? handleClick() : null\"\n></span>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-icon', template: "<span\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  class=\"{{ classes }}\"\n  (click)=\"value ? handleClick() : null\"\n></span>\n" }]
        }], propDecorators: { name: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBT3BFLE1BQU0sT0FBTyxhQUFjLFNBQVEsYUFBYTtJQUpoRDs7UUFLb0IsU0FBSSxHQUFhLE9BQU8sQ0FBQztRQUNsQyxTQUFJLEdBQXlCLFFBQVEsQ0FBQztLQVloRDtJQVZDLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQy9ELFdBQVcsRUFDWCxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7K0dBYlUsYUFBYTttR0FBYixhQUFhLCtHQ1QxQixzSUFNQTs7NEZER2EsYUFBYTtrQkFKekIsU0FBUzsrQkFDRSxVQUFVOzhCQUlGLElBQUk7c0JBQXJCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdAa2VuZWR5LXVpL2NvbnN0YW50cy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7IEljb25OYW1lIH0gZnJvbSAnLi90eXBlcy9pY29uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrbmQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvdmVycmlkZSBuYW1lOiBJY29uTmFtZSA9ICdob3VzZSc7XG4gIEBJbnB1dCgpIHR5cGU6ICdmYXMgZmEtJyB8ICdmYSBmYS0nID0gJ2ZhIGZhLSc7XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5vbmNsaWNrLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLnR5cGV9JHt0aGlzLm5hbWV9ICR7dGhpcy5jbGFzc2VzfWAucmVwbGFjZShcbiAgICAgICd1bmRlZmluZWQnLFxuICAgICAgJydcbiAgICApO1xuICB9XG59XG4iLCI8c3BhblxuICBbaWRdPVwiaWRcIlxuICBbYXR0ci5kYXRhLXRlc3RpZF09XCJpZFwiXG4gIGNsYXNzPVwie3sgY2xhc3NlcyB9fVwiXG4gIChjbGljayk9XCJ2YWx1ZSA/IGhhbmRsZUNsaWNrKCkgOiBudWxsXCJcbj48L3NwYW4+XG4iXX0=