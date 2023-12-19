import { OnChanges } from '@angular/core';
import { CheckboxGroupInterface } from './types/checkbox-group.type';
import { CheckboxComponent } from '@kenedy-ui/atoms/checkbox/checkbox.component';
import * as i0 from "@angular/core";
export declare class CheckboxGroupComponent extends CheckboxComponent implements OnChanges {
    data: CheckboxGroupInterface[];
    indeterminate: boolean;
    listEffect: boolean;
    get complete(): boolean;
    handleClick(values?: CheckboxGroupInterface): void;
    reset(): void;
    instance(value: unknown): {
        name: string;
        label: string;
        value?: unknown;
    }[];
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxGroupComponent, "knd-checkbox-group", never, { "data": { "alias": "data"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "listEffect": { "alias": "listEffect"; "required": false; }; }, {}, never, never, false, never>;
}
