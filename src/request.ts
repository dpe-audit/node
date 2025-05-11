export const send = async <T>(operation: {
  method: string
  path: string
  body?: any
  params?: { [key: string]: any }
  headers?: { [key: string]: string }
}): Promise<T> => {
  const { method, path, body, headers } = operation
  const params = operation.params || {}

  const response = await fetch(`https://api.dpe-audit/${path}?${params.join}`, {
    method,
    body,
    headers
  })

  return response.json()
}
