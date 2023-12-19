import { Component, Input } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import * as i0 from "@angular/core";
export class TypographyComponent extends BaseComponent {
    handleClick() {
        this.onclick.emit(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TypographyComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TypographyComponent, selector: "knd-typography", inputs: { text: "text" }, usesInheritance: true, ngImport: i0, template: "<p\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  class=\"p-0 m-0 base-text text-[12px] base-font-public {{ classes }}\"\n  (click)=\"value ? handleClick() : null\"\n>\n  {{ text }}\n  <ng-content></ng-content>\n</p>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TypographyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-typography', template: "<p\n  [id]=\"id\"\n  [attr.data-testid]=\"id\"\n  class=\"p-0 m-0 base-text text-[12px] base-font-public {{ classes }}\"\n  (click)=\"value ? handleClick() : null\"\n>\n  {{ text }}\n  <ng-content></ng-content>\n</p>\n" }]
        }], propDecorators: { text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL3R5cG9ncnBhaHkvdHlwb2dyYXBoeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL3R5cG9ncnBhaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBTXBFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBR3BELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrR0FMVSxtQkFBbUI7bUdBQW5CLG1CQUFtQix1R0NQaEMsNE5BU0E7OzRGREZhLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBSWpCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdAa2VuZWR5LXVpL2NvbnN0YW50cy9iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2tuZC10eXBvZ3JhcGh5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cG9ncmFwaHkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUeXBvZ3JhcGh5Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRleHQhOiBzdHJpbmc7XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5vbmNsaWNrLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjxwXG4gIFtpZF09XCJpZFwiXG4gIFthdHRyLmRhdGEtdGVzdGlkXT1cImlkXCJcbiAgY2xhc3M9XCJwLTAgbS0wIGJhc2UtdGV4dCB0ZXh0LVsxMnB4XSBiYXNlLWZvbnQtcHVibGljIHt7IGNsYXNzZXMgfX1cIlxuICAoY2xpY2spPVwidmFsdWUgPyBoYW5kbGVDbGljaygpIDogbnVsbFwiXG4+XG4gIHt7IHRleHQgfX1cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9wPlxuIl19