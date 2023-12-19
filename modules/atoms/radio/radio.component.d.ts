import { OnChanges } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import { Orientation, Position, RadioInterface } from './types/radio.type';
import { Color } from '../button/types/button.type';
import * as i0 from "@angular/core";
export declare class RadioComponent extends BaseComponent implements OnChanges {
    roundedChildSize: number;
    size: number;
    color: Color;
    orientation: Orientation;
    data: RadioInterface[];
    handleClick(value: unknown): void;
    get border(): string;
    get background(): string;
    orientationPosition(position?: Position): string;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioComponent, "knd-radio", never, { "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, never, never, false, never>;
}
