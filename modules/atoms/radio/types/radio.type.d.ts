export interface RadioInterface {
    name: string;
    label?: string;
    value: string;
    disable?: boolean;
    position?: Position;
}
export type Position = 'top' | 'bottom' | 'left' | 'right';
export declare const position: (Position | undefined)[];
export type Orientation = 'horizontal' | 'vertical';
export declare const orientation: (Orientation | undefined)[];
