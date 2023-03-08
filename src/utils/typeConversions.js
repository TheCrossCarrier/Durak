function toBoolean(value) {
  return value === 'true' ? true : Boolean(Number(value) ?? value)
}
