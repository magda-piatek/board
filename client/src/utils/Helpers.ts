export const findError = (
  errors: Array<{location: string; msg: string; param: string; value: string}>,
  name: string
) => {
  return (
    errors &&
    errors.find(e => e['param'] === name) &&
    errors.find(e => e['param'] === name).msg
  )
}
