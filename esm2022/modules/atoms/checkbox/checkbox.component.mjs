import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../typogrpahy/typography.component";
import * as i3 from "../icon/icon.component";
export class CheckboxComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.iconSize = 0;
        this.classPosition = '';
        this.size = 20;
        this.iconName = 'check';
        this.color = 'ped';
        this.position = 'right';
        this.onclick = new EventEmitter();
    }
    get retriveClass() {
        if (this.value) {
            return `base-solid-${this.color}`;
        }
        return 'bg-transparent';
    }
    handleClick() {
        this.value = this.name === this.value ? null : this.name;
        this.onclick.emit({
            name: this.name,
            label: this.label,
            value: this.value,
        });
    }
    ngOnChanges() {
        this.iconSize = this.size - 9;
        this.classPosition =
            this.position === 'right'
                ? 'flex items-center'
                : this.position === 'left'
                    ? 'flex flex-row-reverse items-center'
                    : this.position === 'top'
                        ? 'flex flex-col-reverse'
                        : 'flex flex-col';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxComponent, selector: "knd-checkbox", inputs: { size: "size", iconName: "iconName", color: "color", label: "label", position: "position", name: "name", classes: "classes", value: "value" }, outputs: { onclick: "onclick" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"id.replace('__testid', '-base__testid')\"\n  [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n  class=\"w-fit\"\n  [ngClass]=\"classPosition\"\n  *ngIf=\"id\"\n>\n  <button\n    [id]=\"id\"\n    [attr.data-testid]=\"id\"\n    [name]=\"name\"\n    type=\"button\"\n    class=\"relative outline-none border-2 border-gray-400 transition duration-500 hover:border-gray-200 rounded-md {{\n      classes\n    }}\"\n    [ngClass]=\"retriveClass\"\n    [style.width]=\"size + 'px'\"\n    [style.height]=\"size + 'px'\"\n    (click)=\"handleClick()\"\n  >\n    <knd-icon\n      [id]=\"id.replace('__testid', '-icon__testid')\"\n      classes=\"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold\"\n      [ngClass]=\"name === value ? 'text-white' : 'text-transparent'\"\n      [name]=\"iconName\"\n      [style.font-size]=\"iconSize + 'px'\"\n    ></knd-icon>\n  </button>\n  <knd-typography\n    [id]=\"id.replace('__testid', '-label__testid')\"\n    [text]=\"label\"\n    classes=\"cursor-default\"\n  ></knd-typography>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.TypographyComponent, selector: "knd-typography", inputs: ["text"] }, { kind: "component", type: i3.IconComponent, selector: "knd-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-checkbox', template: "<div\n  [id]=\"id.replace('__testid', '-base__testid')\"\n  [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n  class=\"w-fit\"\n  [ngClass]=\"classPosition\"\n  *ngIf=\"id\"\n>\n  <button\n    [id]=\"id\"\n    [attr.data-testid]=\"id\"\n    [name]=\"name\"\n    type=\"button\"\n    class=\"relative outline-none border-2 border-gray-400 transition duration-500 hover:border-gray-200 rounded-md {{\n      classes\n    }}\"\n    [ngClass]=\"retriveClass\"\n    [style.width]=\"size + 'px'\"\n    [style.height]=\"size + 'px'\"\n    (click)=\"handleClick()\"\n  >\n    <knd-icon\n      [id]=\"id.replace('__testid', '-icon__testid')\"\n      classes=\"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold\"\n      [ngClass]=\"name === value ? 'text-white' : 'text-transparent'\"\n      [name]=\"iconName\"\n      [style.font-size]=\"iconSize + 'px'\"\n    ></knd-icon>\n  </button>\n  <knd-typography\n    [id]=\"id.replace('__testid', '-label__testid')\"\n    [text]=\"label\"\n    classes=\"cursor-default\"\n  ></knd-typography>\n</div>\n" }]
        }], propDecorators: { size: [{
                type: Input
            }], iconName: [{
                type: Input
            }], color: [{
                type: Input
            }], label: [{
                type: Input
            }], position: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc2hhcmVkLXVpL2FuZ3VsYXIvbmd4LWtlbmVkeS9zcmMvbW9kdWxlcy9hdG9tcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtdWkvYW5ndWxhci9uZ3gta2VuZWR5L3NyYy9tb2R1bGVzL2F0b21zL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQVNwRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQUpwRDs7UUFLRSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBYSxPQUFPLENBQUM7UUFDN0IsVUFBSyxHQUFVLEtBQUssQ0FBQztRQUVyQixhQUFRLEdBQWEsT0FBTyxDQUFDO1FBS25CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBNkJqRDtJQTNCQyxJQUFJLFlBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLGNBQWMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWE7WUFDaEIsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPO2dCQUN2QixDQUFDLENBQUMsbUJBQW1CO2dCQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNO29CQUMxQixDQUFDLENBQUMsb0NBQW9DO29CQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLO3dCQUN6QixDQUFDLENBQUMsdUJBQXVCO3dCQUN6QixDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ3hCLENBQUM7K0dBeENVLGlCQUFpQjttR0FBakIsaUJBQWlCLHlSQ2hCOUIsK2pDQWtDQTs7NEZEbEJhLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxjQUFjOzhCQU1mLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFWSxJQUFJO3NCQUFyQixLQUFLO2dCQUNZLE9BQU87c0JBQXhCLEtBQUs7Z0JBQ1ksS0FBSztzQkFBdEIsS0FBSztnQkFDYSxPQUFPO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGtlbmVkeS11aS9jb25zdGFudHMvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tICcuLi9pY29uL3R5cGVzL2ljb24udHlwZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2J1dHRvbi90eXBlcy9idXR0b24udHlwZSc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL3JhZGlvL3R5cGVzL3JhZGlvLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrbmQtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBpY29uU2l6ZSA9IDA7XG4gIGNsYXNzUG9zaXRpb24gPSAnJztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIGljb25OYW1lOiBJY29uTmFtZSA9ICdjaGVjayc7XG4gIEBJbnB1dCgpIGNvbG9yOiBDb2xvciA9ICdwZWQnO1xuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb246IFBvc2l0aW9uID0gJ3JpZ2h0JztcblxuICBASW5wdXQoKSBvdmVycmlkZSBuYW1lITogc3RyaW5nO1xuICBASW5wdXQoKSBvdmVycmlkZSBjbGFzc2VzITogc3RyaW5nO1xuICBASW5wdXQoKSBvdmVycmlkZSB2YWx1ZSE6IHVua25vd247XG4gIEBPdXRwdXQoKSBvdmVycmlkZSBvbmNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCByZXRyaXZlQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuIGBiYXNlLXNvbGlkLSR7dGhpcy5jb2xvcn1gO1xuICAgIH1cbiAgICByZXR1cm4gJ2JnLXRyYW5zcGFyZW50JztcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLm5hbWUgPT09IHRoaXMudmFsdWUgPyBudWxsIDogdGhpcy5uYW1lO1xuICAgIHRoaXMub25jbGljay5lbWl0KHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmljb25TaXplID0gdGhpcy5zaXplIC0gOTtcbiAgICB0aGlzLmNsYXNzUG9zaXRpb24gPVxuICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0J1xuICAgICAgICA/ICdmbGV4IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgOiB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCdcbiAgICAgICAgPyAnZmxleCBmbGV4LXJvdy1yZXZlcnNlIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgOiB0aGlzLnBvc2l0aW9uID09PSAndG9wJ1xuICAgICAgICA/ICdmbGV4IGZsZXgtY29sLXJldmVyc2UnXG4gICAgICAgIDogJ2ZsZXggZmxleC1jb2wnO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtpZF09XCJpZC5yZXBsYWNlKCdfX3Rlc3RpZCcsICctYmFzZV9fdGVzdGlkJylcIlxuICBbYXR0ci5kYXRhLXRlc3RpZF09XCJpZC5yZXBsYWNlKCdfX3Rlc3RpZCcsICctYmFzZV9fdGVzdGlkJylcIlxuICBjbGFzcz1cInctZml0XCJcbiAgW25nQ2xhc3NdPVwiY2xhc3NQb3NpdGlvblwiXG4gICpuZ0lmPVwiaWRcIlxuPlxuICA8YnV0dG9uXG4gICAgW2lkXT1cImlkXCJcbiAgICBbYXR0ci5kYXRhLXRlc3RpZF09XCJpZFwiXG4gICAgW25hbWVdPVwibmFtZVwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBvdXRsaW5lLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGhvdmVyOmJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kIHt7XG4gICAgICBjbGFzc2VzXG4gICAgfX1cIlxuICAgIFtuZ0NsYXNzXT1cInJldHJpdmVDbGFzc1wiXG4gICAgW3N0eWxlLndpZHRoXT1cInNpemUgKyAncHgnXCJcbiAgICBbc3R5bGUuaGVpZ2h0XT1cInNpemUgKyAncHgnXCJcbiAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soKVwiXG4gID5cbiAgICA8a25kLWljb25cbiAgICAgIFtpZF09XCJpZC5yZXBsYWNlKCdfX3Rlc3RpZCcsICctaWNvbl9fdGVzdGlkJylcIlxuICAgICAgY2xhc3Nlcz1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBmb250LXNlbWlib2xkXCJcbiAgICAgIFtuZ0NsYXNzXT1cIm5hbWUgPT09IHZhbHVlID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtdHJhbnNwYXJlbnQnXCJcbiAgICAgIFtuYW1lXT1cImljb25OYW1lXCJcbiAgICAgIFtzdHlsZS5mb250LXNpemVdPVwiaWNvblNpemUgKyAncHgnXCJcbiAgICA+PC9rbmQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxrbmQtdHlwb2dyYXBoeVxuICAgIFtpZF09XCJpZC5yZXBsYWNlKCdfX3Rlc3RpZCcsICctbGFiZWxfX3Rlc3RpZCcpXCJcbiAgICBbdGV4dF09XCJsYWJlbFwiXG4gICAgY2xhc3Nlcz1cImN1cnNvci1kZWZhdWx0XCJcbiAgPjwva25kLXR5cG9ncmFwaHk+XG48L2Rpdj5cbiJdfQ==