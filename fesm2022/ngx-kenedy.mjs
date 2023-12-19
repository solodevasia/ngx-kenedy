import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import { CheckboxComponent as CheckboxComponent$1 } from '@kenedy-ui/atoms/checkbox/checkbox.component';

class TypographyComponent extends BaseComponent {
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

class IconComponent extends BaseComponent {
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

class TextFieldComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.ngOutlined = '';
        this.type = 'text';
        this.errors = [];
        this.variant = 'default';
    }
    ngOnChanges() {
        this.classes = this.classes?.split('_')?.[0];
        this.ngOutlined = '';
        let addClass = 'border-t-0 border-l-0 border-r-0';
        switch (this.variant) {
            case 'outlined':
                this.ngOutlined =
                    'absolute -top-[7px] left-[9px] bg-white cursor-default';
                break;
            case 'filled':
                this.classes = `_ ${addClass} rounded-b-none rounded-t-md rounded-r-none rounded-l-none bg-gray-100`;
                break;
            case 'standard':
                this.classes = `_ ${addClass} !rounded-none`;
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextFieldComponent, selector: "knd-text-field", inputs: { label: "label", type: "type", formGroup: "formGroup", placeholder: "placeholder", errors: "errors", variant: "variant" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"w-fit relative\" *ngIf=\"formGroup.get(name)\">\n  <knd-typography\n    *ngIf=\"label\"\n    [id]=\"id.replace('__testid', '-label__testid')\"\n    [text]=\"label\"\n    classes=\"text-xs ml-1 text-gray-400\"\n    [ngClass]=\"ngOutlined\"\n  ></knd-typography>\n  <div\n    *ngIf=\"id\"\n    [id]=\"id.replace('__testid', '-base__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n    class=\"flex items-center rounded-md py-2 px-3 border border-gray-100 transition duration-500 hover:border-gray-200 w-96 {{\n      classes\n    }}\"\n    [ngClass]=\"formGroup.get(name)?.errors ? 'border-red-200' : ''\"\n    [formGroup]=\"formGroup\"\n  >\n    <input\n      [id]=\"id\"\n      [attr.data-testid]=\"id\"\n      [name]=\"name\"\n      [type]=\"type\"\n      class=\"outline-none border-none w-full text-sm text-gray-500 bg-transparent\"\n      autocomplete=\"off\"\n      [formControlName]=\"name\"\n      [placeholder]=\"placeholder\"\n    />\n  </div>\n  <div *ngFor=\"let error of errors\">\n    <knd-typography\n      *ngIf=\"formGroup.get(name)?.errors?.[error.name]\"\n      [id]=\"id.replace('__testid', '-error__testid')\"\n      classes=\"text-red-500 text-xs mt-1 ml-1\"\n      [text]=\"error.message\"\n    ></knd-typography>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: TypographyComponent, selector: "knd-typography", inputs: ["text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-text-field', template: "<div class=\"w-fit relative\" *ngIf=\"formGroup.get(name)\">\n  <knd-typography\n    *ngIf=\"label\"\n    [id]=\"id.replace('__testid', '-label__testid')\"\n    [text]=\"label\"\n    classes=\"text-xs ml-1 text-gray-400\"\n    [ngClass]=\"ngOutlined\"\n  ></knd-typography>\n  <div\n    *ngIf=\"id\"\n    [id]=\"id.replace('__testid', '-base__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n    class=\"flex items-center rounded-md py-2 px-3 border border-gray-100 transition duration-500 hover:border-gray-200 w-96 {{\n      classes\n    }}\"\n    [ngClass]=\"formGroup.get(name)?.errors ? 'border-red-200' : ''\"\n    [formGroup]=\"formGroup\"\n  >\n    <input\n      [id]=\"id\"\n      [attr.data-testid]=\"id\"\n      [name]=\"name\"\n      [type]=\"type\"\n      class=\"outline-none border-none w-full text-sm text-gray-500 bg-transparent\"\n      autocomplete=\"off\"\n      [formControlName]=\"name\"\n      [placeholder]=\"placeholder\"\n    />\n  </div>\n  <div *ngFor=\"let error of errors\">\n    <knd-typography\n      *ngIf=\"formGroup.get(name)?.errors?.[error.name]\"\n      [id]=\"id.replace('__testid', '-error__testid')\"\n      classes=\"text-red-500 text-xs mt-1 ml-1\"\n      [text]=\"error.message\"\n    ></knd-typography>\n  </div>\n</div>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], errors: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

class RadioComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.roundedChildSize = 0;
        this.size = 16;
        this.color = 'ped';
        this.orientation = 'horizontal';
        this.data = [];
    }
    handleClick(value) {
        this.value = value;
        this.onclick.emit(value);
    }
    get border() {
        return `base-border-${this.color}`;
    }
    get background() {
        return `base-solid-${this.color}`;
    }
    orientationPosition(position = 'right') {
        const pos = {
            top: 'flex-col-reverse',
            bottom: 'flex-col',
            left: 'flex-row-reverse',
            right: 'flex-row',
        };
        let result = this.orientation === 'horizontal' ? 'mx-1' : 'my-1';
        result = `${result} ${pos[position]}`;
        return result;
    }
    ngOnChanges() {
        this.roundedChildSize = this.size - 9;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioComponent, selector: "knd-radio", inputs: { size: "size", color: "color", orientation: "orientation", data: "data" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"id.replace('__testid', '-base__testid')\"\n  [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n  [ngClass]=\"\n    orientation === 'horizontal' ? 'flex items-center' : 'flex flex-col'\n  \"\n  *ngIf=\"data && id\"\n>\n  <button\n    [id]=\"id.replace('__testid', '-button-' + i + '__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-button-' + i + '__testid')\"\n    [name]=\"name + '-' + i\"\n    [disabled]=\"item.disable\"\n    class=\"outline-none border-none w-fit flex items-center\"\n    [ngClass]=\"orientationPosition(item.position)\"\n    *ngFor=\"let item of data; let i = index\"\n    (click)=\"item.disable ? null : handleClick(item.value)\"\n  >\n    <div\n      [id]=\"id.replace('__testid', '-' + i + '__testid')\"\n      [attr.data-testid]=\"id.replace('__testid', '-' + i + '__testid')\"\n      class=\"relative border-2 rounded-full border-gray-500 {{ classes }}\"\n      [ngClass]=\"\n        item.value === value\n          ? border\n          : item.disable\n            ? 'base-border-disable'\n            : ''\n      \"\n      [style.width]=\"size + 'px'\"\n      [style.height]=\"size + 'px'\"\n    >\n      <div *ngIf=\"item.value === value\">\n        <div\n          [id]=\"id.replace('__testid', '-' + 'active-' + i + '__testid')\"\n          [attr.data-testid]=\"\n            id.replace('__testid', '-' + 'active-' + i + '__testid')\n          \"\n          class=\"absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"\n          [ngClass]=\"background\"\n          [style.width]=\"roundedChildSize + 'px'\"\n          [style.height]=\"roundedChildSize + 'px'\"\n        ></div>\n      </div>\n    </div>\n    <knd-typography\n      *ngIf=\"item.label\"\n      [id]=\"id.replace('__testid', '-label-' + i + '__testid')\"\n      [text]=\"item.label\"\n      classes=\"mx-[4px]\"\n    ></knd-typography>\n  </button>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TypographyComponent, selector: "knd-typography", inputs: ["text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'knd-radio', template: "<div\n  [id]=\"id.replace('__testid', '-base__testid')\"\n  [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n  [ngClass]=\"\n    orientation === 'horizontal' ? 'flex items-center' : 'flex flex-col'\n  \"\n  *ngIf=\"data && id\"\n>\n  <button\n    [id]=\"id.replace('__testid', '-button-' + i + '__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-button-' + i + '__testid')\"\n    [name]=\"name + '-' + i\"\n    [disabled]=\"item.disable\"\n    class=\"outline-none border-none w-fit flex items-center\"\n    [ngClass]=\"orientationPosition(item.position)\"\n    *ngFor=\"let item of data; let i = index\"\n    (click)=\"item.disable ? null : handleClick(item.value)\"\n  >\n    <div\n      [id]=\"id.replace('__testid', '-' + i + '__testid')\"\n      [attr.data-testid]=\"id.replace('__testid', '-' + i + '__testid')\"\n      class=\"relative border-2 rounded-full border-gray-500 {{ classes }}\"\n      [ngClass]=\"\n        item.value === value\n          ? border\n          : item.disable\n            ? 'base-border-disable'\n            : ''\n      \"\n      [style.width]=\"size + 'px'\"\n      [style.height]=\"size + 'px'\"\n    >\n      <div *ngIf=\"item.value === value\">\n        <div\n          [id]=\"id.replace('__testid', '-' + 'active-' + i + '__testid')\"\n          [attr.data-testid]=\"\n            id.replace('__testid', '-' + 'active-' + i + '__testid')\n          \"\n          class=\"absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"\n          [ngClass]=\"background\"\n          [style.width]=\"roundedChildSize + 'px'\"\n          [style.height]=\"roundedChildSize + 'px'\"\n        ></div>\n      </div>\n    </div>\n    <knd-typography\n      *ngIf=\"item.label\"\n      [id]=\"id.replace('__testid', '-label-' + i + '__testid')\"\n      [text]=\"item.label\"\n      classes=\"mx-[4px]\"\n    ></knd-typography>\n  </button>\n</div>\n" }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], orientation: [{
                type: Input
            }], data: [{
                type: Input
            }] } });

class CheckboxComponent extends BaseComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxComponent, selector: "knd-checkbox", inputs: { size: "size", iconName: "iconName", color: "color", label: "label", position: "position", name: "name", classes: "classes", value: "value" }, outputs: { onclick: "onclick" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"id.replace('__testid', '-base__testid')\"\n  [attr.data-testid]=\"id.replace('__testid', '-base__testid')\"\n  class=\"w-fit\"\n  [ngClass]=\"classPosition\"\n  *ngIf=\"id\"\n>\n  <button\n    [id]=\"id\"\n    [attr.data-testid]=\"id\"\n    [name]=\"name\"\n    type=\"button\"\n    class=\"relative outline-none border-2 border-gray-400 transition duration-500 hover:border-gray-200 rounded-md {{\n      classes\n    }}\"\n    [ngClass]=\"retriveClass\"\n    [style.width]=\"size + 'px'\"\n    [style.height]=\"size + 'px'\"\n    (click)=\"handleClick()\"\n  >\n    <knd-icon\n      [id]=\"id.replace('__testid', '-icon__testid')\"\n      classes=\"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold\"\n      [ngClass]=\"name === value ? 'text-white' : 'text-transparent'\"\n      [name]=\"iconName\"\n      [style.font-size]=\"iconSize + 'px'\"\n    ></knd-icon>\n  </button>\n  <knd-typography\n    [id]=\"id.replace('__testid', '-label__testid')\"\n    [text]=\"label\"\n    classes=\"cursor-default\"\n  ></knd-typography>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TypographyComponent, selector: "knd-typography", inputs: ["text"] }, { kind: "component", type: IconComponent, selector: "knd-icon", inputs: ["name", "type"] }] }); }
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

class CheckboxGroupComponent extends CheckboxComponent$1 {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxGroupComponent, selector: "knd-checkbox-group", inputs: { data: "data", indeterminate: "indeterminate", listEffect: "listEffect" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div *ngIf=\"id\">\n  <div\n    [id]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    [attr.data-testid]=\"id.replace('__testid', '-base-' + i + '__testid')\"\n    class=\"w-fit\"\n    *ngFor=\"let item of data; let i = index\"\n    [ngClass]=\"i === 0 ? '' : listEffect ? 'ml-5' : ''\"\n  >\n    <knd-checkbox\n      [id]=\"id.replace('__testid', '-' + i + '__testid')\"\n      [name]=\"item.name\"\n      [iconName]=\"\n        i === 0\n          ? complete\n            ? 'check'\n            : indeterminate\n              ? 'minus'\n              : iconName\n          : iconName\n      \"\n      [classes]=\"'m-1' + classes\"\n      [position]=\"position\"\n      [label]=\"item.label\"\n      [value]=\"item.value\"\n      (onclick)=\"handleClick($event)\"\n    ></knd-checkbox>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CheckboxComponent, selector: "knd-checkbox", inputs: ["size", "iconName", "color", "label", "position", "name", "classes", "value"], outputs: ["onclick"] }] }); }
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

class NgxKenedyModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxKenedyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxKenedyModule, declarations: [TypographyComponent,
            IconComponent,
            TextFieldComponent,
            RadioComponent,
            CheckboxComponent,
            CheckboxGroupComponent], imports: [CommonModule, ReactiveFormsModule], exports: [TypographyComponent,
            IconComponent,
            TextFieldComponent,
            RadioComponent,
            CheckboxComponent,
            CheckboxGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxKenedyModule, imports: [CommonModule, ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxKenedyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ReactiveFormsModule],
                    declarations: [
                        TypographyComponent,
                        IconComponent,
                        TextFieldComponent,
                        RadioComponent,
                        CheckboxComponent,
                        CheckboxGroupComponent,
                    ],
                    exports: [
                        TypographyComponent,
                        IconComponent,
                        TextFieldComponent,
                        RadioComponent,
                        CheckboxComponent,
                        CheckboxGroupComponent,
                    ],
                }]
        }] });

class ButtonComponent extends BaseComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, CheckboxComponent, CheckboxGroupComponent, IconComponent, NgxKenedyModule, RadioComponent, TextFieldComponent, TypographyComponent };
//# sourceMappingURL=ngx-kenedy.mjs.map
