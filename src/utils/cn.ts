type Value = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
type Argument = Value | Mapping

/** Implementation of the "classnames" library method */
const cn = (...arg: Argument[]) => {
  if (typeof arg[0] === 'string') return arg.join(' ')

  const classes = []

  for (const className in arg[0] as unknown as Record<string, boolean>[]) {
    if (arg[0][className]) classes.push(`${className}`)
  }

  return classes.join(' ')
}

export default cn
