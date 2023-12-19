import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '@kenedy-ui/atoms/checkbox/checkbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../atoms/checkbox/checkbox.component";
export class CheckboxGroupComponent extends CheckboxComponent {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    get complete() {
        return this.data.filter((item) => item.value).length === this.data.length;
    }
    handleClick(values) {
        if (values?.name === 'all') {
            if (this.data.filter((item) => item.value).length) {
                if (!this.complete) {
                    this.data = this.data.map((item) => ({ ...item, value: item.name }));
                }
                else {
                    this.data = this.data.map((item) => ({ ...item, value: null }));
                }
            }
            else {
                this.data = this.data.map((item) => ({ ...item, value: item.name }));
            }
        }
        else {
            this.data = this.data.map((item) => {
                if (values?.value) {
                    if (item.name === 'all') {
                        item.value = 'all';
                    }
                }
                if (item.name === values?.name) {
                    item.value = values.value;
                }
                return item;
            });
            this.reset();
        }
        this.onclick.emit(this.data
            .filter((item) => item.name !== 'all')
            .filter((item) => item.value));
    }
    reset() {
        this.data = this.instance(null);
        this.data = this.instance('all');
        if (this.data.filter((item) => item.value).length === 1) {
            this.data = this.instance(null);
        }
    }
    instance(value) {
        return this.data.map((item) => item.name === 'all' ? { ...item, value } : { ...item });
    }
    ngOnChanges() {
        if (this.indeterminate) {
            this.data = [{ name: 'all', label: 'All', value: null }, ...this.data];
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxGroupComponent, selector: "knd-checkbox-group", inputs: { data: "data", indeterminate: "indeterminate", listEffect: "listEffect" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div *ngIf=\"id\">\n  <div\n    [id]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    class=\"w-fit\"\n    *ngFor=\"let item of data; let i = index\"\n    [ngClass]=\"i === 0 ? '' : listEffect ? 'ml-5' : ''\"\n  >\n    <knd-checkbox\n      [id]=\"id.replace('__testid', '-' + i + '__testid')\"\n      [name]=\"item.name\"\n      [iconName]=\"\n        i === 0\n          ? complete\n            ? 'check'\n            : indeterminate\n              ? 'minus'\n              : iconName\n          : iconName\n      \"\n      [classes]=\"'m-1' + classes\"\n      [position]=\"position\"\n      [label]=\"item.label\"\n      [value]=\"item.value\"\n      (onclick)=\"handleClick($event)\"\n    ></knd-checkbox>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CheckboxComponent, selector: "knd-checkbox", inputs: ["size", "iconName", "color", "label", "position", "name", "classes", "value"], outputs: ["onclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-checkbox-group', template: "<div *ngIf=\"id\">\n  <div\n    [id]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    class=\"w-fit\"\n    *ngFor=\"let item of data; let i = index\"\n    [ngClass]=\"i === 0 ? '' : listEffect ? 'ml-5' : ''\"\n  >\n    <knd-checkbox\n      [id]=\"id.replace('__testid', '-' + i + '__testid')\"\n      [name]=\"item.name\"\n      [iconName]=\"\n        i === 0\n          ? complete\n            ? 'check'\n            : indeterminate\n              ? 'minus'\n              : iconName\n          : iconName\n      \"\n      [classes]=\"'m-1' + classes\"\n      [position]=\"position\"\n      [label]=\"item.label\"\n      [value]=\"item.value\"\n      (onclick)=\"handleClick($event)\"\n    ></knd-checkbox>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], listEffect: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc2hhcmVkLXVpL2FuZ3VsYXIvbmd4LWtlbmVkeS9zcmMvbW9kdWxlcy9tb2N1bGVzL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC11aS9hbmd1bGFyL25neC1rZW5lZHkvc3JjL21vZHVsZXMvbW9jdWxlcy9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQU1qRixNQUFNLE9BQU8sc0JBQ1gsU0FBUSxpQkFBaUI7SUFMM0I7O1FBUVcsU0FBSSxHQUE2QixFQUFFLENBQUM7S0EyRDlDO0lBdkRDLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUUsQ0FBQztJQUVRLFdBQVcsQ0FBQyxNQUErQjtRQUNsRCxJQUFJLE1BQU0sRUFBRSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixJQUFJLENBQUMsSUFBSSxHQUFH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QyxpekJBNEJBOzs0RkRwQmEsc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFPckIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tib3hHcm91cEludGVyZmFjZSB9IGZyb20gJy4vdHlwZXMvY2hlY2tib3gtZ3JvdXAudHlwZSc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJ0BrZW5lZHktdWkvYXRvbXMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna25kLWNoZWNrYm94LWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cENvbXBvbmVudFxuICBleHRlbmRzIENoZWNrYm94Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgpIGRhdGE6IENoZWNrYm94R3JvdXBJbnRlcmZhY2VbXSA9IFtdO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlITogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdEVmZmVjdCE6IGJvb2xlYW47XG5cbiAgZ2V0IGNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5sZW5ndGggPT09IHRoaXMuZGF0YS5sZW5ndGg7XG4gIH1cblxuICBvdmVycmlkZSBoYW5kbGVDbGljayh2YWx1ZXM/OiBDaGVja2JveEdyb3VwSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlcz8ubmFtZSA9PT0gJ2FsbCcpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbSwgdmFsdWU6IGl0ZW0ubmFtZSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbSwgdmFsdWU6IG51bGwgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLCB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAodmFsdWVzPy52YWx1ZSkge1xuICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICBpdGVtLnZhbHVlID0gJ2FsbCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHZhbHVlcz8ubmFtZSkge1xuICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5vbmNsaWNrLmVtaXQoXG4gICAgICB0aGlzLmRhdGFcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lICE9PSAnYWxsJylcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5pbnN0YW5jZShudWxsKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmluc3RhbmNlKCdhbGwnKTtcbiAgICBpZiAodGhpcy5kYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWx1ZSkubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmluc3RhbmNlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlKHZhbHVlOiB1bmtub3duKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKGl0ZW0pID0+XG4gICAgICBpdGVtLm5hbWUgPT09ICdhbGwnID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyAuLi5pdGVtIH1cbiAgICApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5kYXRhID0gW3sgbmFtZTogJ2FsbCcsIGxhYmVsOiAnQWxsJywgdmFsdWU6IG51bGwgfSwgLi4udGhpcy5kYXRhXTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJpZFwiPlxuICA8ZGl2XG4gICAgW2lkXT1cImlkLnJlcGxhY2UoJ19fdGVzdGlkJywgJy1iYXNlLScgKyBpICsgJ19fdGVzdGlkJylcIlxuICAgIFthdHRyLmRhdGEtdGVzdGlkXT1cImlkLnJlcGxhY2UoJ19fdGVzdGlkJywgJy1iYXNlLScgKyBpICsgJ19fdGVzdGlkJylcIlxuICAgIGNsYXNzPVwidy1maXRcIlxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgIFtuZ0NsYXNzXT1cImkgPT09IDAgPyAnJyA6IGxpc3RFZmZlY3QgPyAnbWwtNScgOiAnJ1wiXG4gID5cbiAgICA8a25kLWNoZWNrYm94XG4gICAgICBbaWRdPVwiaWQucmVwbGFjZSgnX190ZXN0aWQnLCAnLScgKyBpICsgJ19fdGVzdGlkJylcIlxuICAgICAgW25hbWVdPVwiaXRlbS5uYW1lXCJcbiAgICAgIFtpY29uTmFtZV09XCJcbiAgICAgICAgaSA9PT0gMFxuICAgICAgICAgID8gY29tcGxldGVcbiAgICAgICAgICAgID8gJ2NoZWNrJ1xuICAgICAgICAgICAgOiBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgID8gJ21pbnVzJ1xuICAgICAgICAgICAgICA6IGljb25OYW1lXG4gICAgICAgICAgOiBpY29uTmFtZVxuICAgICAgXCJcbiAgICAgIFtjbGFzc2VzXT1cIidtLTEnICsgY2xhc3Nlc1wiXG4gICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxuICAgICAgW2xhYmVsXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIlxuICAgICAgKG9uY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXG4gICAgPjwva25kLWNoZWNrYm94PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19