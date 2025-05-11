export type Error = {
  title: string | null
  description: string | null
  detail: string | null
  status: number
}

export type BadRequest = { status: 400 } & Error

export type Unprocessable = {
  status: 422
  violations: Array<{
    propertyPath: string
    message: string
  }>
} & Error

export type NotFound = { status: 404 } & Error
