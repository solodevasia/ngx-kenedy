import { Component, Input } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import * as i0 from "@angular/core";
export class ButtonComponent extends BaseComponent {
    constructor() {
        super();
        this.type = 'button';
        this.variant = 'solid';
        this.color = 'ped';
    }
    handleClick() {
        this.onclick.emit(this.value);
    }
    ngOnChanges() {
        this.classes = this.classes?.split('_')?.[0];
        if (this.variant === 'solid' && this.type !== 'disabled') {
            this.classes = `${this.classes} _ base-${this.variant}-${this.color} ${this.color === 'light' ? 'text-black' : 'text-white'}`;
        }
        if (this.type === 'disabled') {
            this.classes = `${this.classes} _ base-color-disable base-background-disable cursor-no-drop`;
        }
        if (this.variant !== 'solid' && this.type !== 'disabled') {
            this.classes = `${this.classes} _ base-${this.variant}-${this.color} ${this.color === 'light' ? 'text-black' : `base-color-${this.color}`}`;
        }
        this.classes = this.classes.replaceAll('undefined', '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ButtonComponent, selector: "knd-button", inputs: { type: "type", text: "text", variant: "variant", color: "color" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<button\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  [name]=\"name\"\n  [type]=\"type\"\n  [disabled]=\"type === 'disabled'\"\n  class=\"outline-none py-2 w-32 base-font-public font-medium text-sm {{\n    classes\n  }}\"\n  (click)=\"value ? handleClick() : null\"\n>\n  {{ text }}\n  <ng-content></ng-content>\n</button>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-button', template: "<button\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  [name]=\"name\"\n  [type]=\"type\"\n  [disabled]=\"type === 'disabled'\"\n  class=\"outline-none py-2 w-32 base-font-public font-medium text-sm {{\n    classes\n  }}\"\n  (click)=\"value ? handleClick() : null\"\n>\n  {{ text }}\n  <ng-content></ng-content>\n</button>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], text: [{
                type: Input
            }], variant: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC11aS9hbmd1bGFyL25neC1rZW5lZHkvc3JjL21vZHVsZXMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQU9wRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBTWhEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFORCxTQUFJLEdBQWUsUUFBUSxDQUFDO1FBRTVCLFlBQU8sR0FBaUIsT0FBTyxDQUFDO1FBQ2hDLFVBQUssR0FBVSxLQUFLLENBQUM7SUFJOUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQ2pFLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQzFDLEVBQUUsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sOERBQThELENBQUM7U0FDOUY7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssSUFDakUsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsS0FBSyxFQUNsRSxFQUFFLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7K0dBOUJVLGVBQWU7bUdBQWYsZUFBZSwwS0NSNUIsdVVBY0E7OzRGRE5hLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0UsWUFBWTswRUFJYixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdAa2VuZWR5LXVpL2NvbnN0YW50cy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25UeXBlLCBCdXR0b25WYXJpbnQsIENvbG9yIH0gZnJvbSAnLi90eXBlcy9idXR0b24udHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2tuZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IEJ1dHRvblR5cGUgPSAnYnV0dG9uJztcbiAgQElucHV0KCkgdGV4dCE6IHN0cmluZztcbiAgQElucHV0KCkgdmFyaWFudDogQnV0dG9uVmFyaW50ID0gJ3NvbGlkJztcbiAgQElucHV0KCkgY29sb3I6IENvbG9yID0gJ3BlZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMub25jbGljay5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGhpcy5jbGFzc2VzPy5zcGxpdCgnXycpPy5bMF07XG4gICAgaWYgKHRoaXMudmFyaWFudCA9PT0gJ3NvbGlkJyAmJiB0aGlzLnR5cGUgIT09ICdkaXNhYmxlZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NlcyA9IGAke3RoaXMuY2xhc3Nlc30gXyBiYXNlLSR7dGhpcy52YXJpYW50fS0ke3RoaXMuY29sb3J9ICR7XG4gICAgICAgIHRoaXMuY29sb3IgPT09ICdsaWdodCcgPyAndGV4dC1ibGFjaycgOiAndGV4dC13aGl0ZSdcbiAgICAgIH1gO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLmNsYXNzZXN9IF8gYmFzZS1jb2xvci1kaXNhYmxlIGJhc2UtYmFja2dyb3VuZC1kaXNhYmxlIGN1cnNvci1uby1kcm9wYDtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFyaWFudCAhPT0gJ3NvbGlkJyAmJiB0aGlzLnR5cGUgIT09ICdkaXNhYmxlZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NlcyA9IGAke3RoaXMuY2xhc3Nlc30gXyBiYXNlLSR7dGhpcy52YXJpYW50fS0ke3RoaXMuY29sb3J9ICR7XG4gICAgICAgIHRoaXMuY29sb3IgPT09ICdsaWdodCcgPyAndGV4dC1ibGFjaycgOiBgYmFzZS1jb2xvci0ke3RoaXMuY29sb3J9YFxuICAgICAgfWA7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMuY2xhc3Nlcy5yZXBsYWNlQWxsKCd1bmRlZmluZWQnLCAnJyk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgW2lkXT1cImlkXCJcbiAgW2F0dHIuZGF0YS10ZXN0aWRdPVwiaWRcIlxuICBbbmFtZV09XCJuYW1lXCJcbiAgW3R5cGVdPVwidHlwZVwiXG4gIFtkaXNhYmxlZF09XCJ0eXBlID09PSAnZGlzYWJsZWQnXCJcbiAgY2xhc3M9XCJvdXRsaW5lLW5vbmUgcHktMiB3LTMyIGJhc2UtZm9udC1wdWJsaWMgZm9udC1tZWRpdW0gdGV4dC1zbSB7e1xuICAgIGNsYXNzZXNcbiAgfX1cIlxuICAoY2xpY2spPVwidmFsdWUgPyBoYW5kbGVDbGljaygpIDogbnVsbFwiXG4+XG4gIHt7IHRleHQgfX1cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+XG4iXX0=