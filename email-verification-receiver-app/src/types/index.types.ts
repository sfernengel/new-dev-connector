export type Message = {
  code: string;
  message: string;
  referencedBy: string;
};

export type ValidatorCreator = (
  path: string[],
  message: Message,
  overrideConfig?: object
) => [string[], [[(o: object) => boolean, string, [object]]]];

export type ValidatorFunction = (o: object) => boolean;

export type Wrapper = (
  validator: ValidatorFunction
) => (value: object) => boolean;

interface JsonObject {
  [key: string]: any;
}

type MethodType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD';

interface ClientRequest {
  // Define the properties of ClientRequest if needed
}

interface HttpErrorType {
  body: JsonObject;
  code?: number;
  headers?: Record<string, any>;
  message: string;
  method: MethodType;
  name?: string;
  originalRequest?: ClientRequest;
  retryCount?: number;
  status?: number;
  statusCode: number;
  [key: string]: any;
}

export function isHttpError(error: unknown): error is HttpErrorType {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  const hasRequiredString = (key: string) =>
    typeof (error as any)[key] === 'string';
  const hasRequiredNumber = (key: string) =>
    typeof (error as any)[key] === 'number';
  const hasOptionalNumber = (key: string) =>
    (error as any)[key] === undefined ||
    typeof (error as any)[key] === 'number';
  const hasOptionalObject = (key: string) =>
    (error as any)[key] === undefined ||
    typeof (error as any)[key] === 'object';
  const hasOptionalString = (key: string) =>
    (error as any)[key] === undefined ||
    typeof (error as any)[key] === 'string';

  return (
    typeof (error as any).body === 'object' &&
    hasRequiredString('message') &&
    hasRequiredString('method') &&
    hasRequiredNumber('statusCode') &&
    hasOptionalNumber('code') &&
    hasOptionalObject('headers') &&
    hasOptionalString('name') &&
    hasOptionalObject('originalRequest') &&
    hasOptionalNumber('retryCount') &&
    hasOptionalNumber('status')
  );
}
