export type TextFieldType = 'text' | 'password' | 'number' | 'email';
export declare const textFieldType: (TextFieldType | undefined)[];
type ValidatorType = 'required' | 'min' | 'max' | 'email' | 'minlength' | 'maxlength' | 'pattern';
export declare const validatorType: (ValidatorType | undefined)[];
export interface TextFieldErrorInterface {
    name: ValidatorType;
    message: string;
}
export type TextFieldVariant = 'default' | 'outlined' | 'filled' | 'standard';
export declare const textFieldVariant: (TextFieldVariant | undefined)[];
export {};
