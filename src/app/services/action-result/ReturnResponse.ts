export interface ReturnResponse<T = null> {
  statusCode: number;
  message: string;
  isError: boolean;
  dataSuccess: ReturnResponseSuccess<T>;
  dataErrors: ReturnResponseError;
}

interface ReturnResponseSuccess<T>
{
  data: T;
}

interface ReturnResponseError
{
  ErrorDetails: [];
}
