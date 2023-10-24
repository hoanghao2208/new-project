export enum FileStatus {
    NEW = 'NEW',
    UPLOADED = 'UPLOADED',
    REMOVED = 'REMOVED',
    ERROR = 'ERROR',
}

export type FileStatusEnum = keyof typeof FileStatus;

export enum Input {
    TEXT = 'TEXT',
    TEXTAREA = 'TEXTAREA',
    SELECT = 'SELECT',
    RADIO = 'RADIO',
    CHECKBOX = 'CHECKBOX',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    TIME = 'TIME',
    FILE = 'FILE',
    IMAGE = 'IMAGE',
    PASSWORD = 'PASSWORD',
    NUMBER = 'NUMBER',
    EMAIL = 'EMAIL',
    AUTOCOMPLETE = 'AUTOCOMPLETE',
}

export type InputType =
    | Input.TEXT
    | Input.TEXTAREA
    | Input.SELECT
    | Input.RADIO
    | Input.CHECKBOX
    | Input.DATE
    | Input.DATETIME
    | Input.TIME
    | Input.FILE
    | Input.IMAGE
    | Input.PASSWORD
    | Input.NUMBER
    | Input.EMAIL
    | Input.AUTOCOMPLETE;
