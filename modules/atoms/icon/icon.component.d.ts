import type { OnInit } from '@angular/core';
import { BaseComponent } from '@kenedy-ui/constants/base.component';
import type { IconName } from './types/icon.type';
import * as i0 from "@angular/core";
export declare class IconComponent extends BaseComponent implements OnInit {
    name: IconName;
    type: 'fas fa-' | 'fa fa-';
    handleClick(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "knd-icon", never, { "name": { "alias": "name"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
