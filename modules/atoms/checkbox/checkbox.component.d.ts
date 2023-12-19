import { EventEmitter, OnChanges } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import { IconName } from '../icon/types/icon.type';
import { Color } from '../button/types/button.type';
import { Position } from '../radio/types/radio.type';
import * as i0 from "@angular/core";
export declare class CheckboxComponent extends BaseComponent implements OnChanges {
    iconSize: number;
    classPosition: string;
    size: number;
    iconName: IconName;
    color: Color;
    label: string;
    position: Position;
    name: string;
    classes: string;
    value: unknown;
    onclick: EventEmitter<any>;
    get retriveClass(): string;
    handleClick(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "knd-checkbox", never, { "size": { "alias": "size"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "position": { "alias": "position"; "required": false; }; "name": { "alias": "name"; "required": false; }; "classes": { "alias": "classes"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "onclick": "onclick"; }, never, never, false, never>;
}
