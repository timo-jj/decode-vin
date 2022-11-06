export interface Result {
  Value: string
  ValueId: string
  Variable: string
  VariableId: number
}

interface Data {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Result[]
}

interface Headers {
  'cache-control': string
  'content-length': string
  'content-type': string
  expires: string
  pragma: string
  'request-context': string
}

interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

interface Env {}

interface Headers2 {
  Accept: string
}

interface Config {
  transitional: Transitional
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  method: string
  url: string
}

export interface ApiResponse {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: string
}

export interface VINDetails {
  vin: string
  name: string
  make: string
  manufacturerName: string
  model: string
  modelYear: string
}
