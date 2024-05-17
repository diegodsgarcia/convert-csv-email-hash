import { sha256 } from 'js-sha256'

export const getHashedValue = (value: string) => {
  try {
    return sha256(value)
  } catch {
    return ''
  }
}