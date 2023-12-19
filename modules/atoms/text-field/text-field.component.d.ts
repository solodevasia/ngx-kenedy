import { OnChanges } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import { TextFieldErrorInterface, TextFieldType, TextFieldVariant } from './types/text-field.type';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextFieldComponent extends BaseComponent implements OnChanges {
    ngOutlined: string;
    label: string;
    type: TextFieldType;
    formGroup: FormGroup;
    placeholder: string;
    errors: TextFieldErrorInterface[];
    variant: TextFieldVariant;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldComponent, "knd-text-field", never, { "label": { "alias": "label"; "required": false; }; "type": { "alias": "type"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "errors": { "alias": "errors"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, false, never>;
}
