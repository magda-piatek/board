export const findError = (
  errors: Array<{location: String; msg: String; param: String; value: String}>,
  name: string
) => {
  return (
    errors &&
    errors.find(e => e['param'] === name) &&
    errors.find(e => e['param'] === name).msg
  )
}
