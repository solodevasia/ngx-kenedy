import { OnChanges } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import { ButtonType, ButtonVarint, Color } from './types/button.type';
import * as i0 from "@angular/core";
export declare class ButtonComponent extends BaseComponent implements OnChanges {
    type: ButtonType;
    text: string;
    variant: ButtonVarint;
    color: Color;
    constructor();
    handleClick(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "knd-button", never, { "type": { "alias": "type"; "required": false; }; "text": { "alias": "text"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], false, never>;
}
