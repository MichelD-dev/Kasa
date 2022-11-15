export function ensure<T>(
  argument: T | undefined | null,
  message = 'No value has been found',
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message)
  }
  
  return argument
}
