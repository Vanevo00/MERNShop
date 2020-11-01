export function replaceParametersInPath (entryPath: string, query = {}): string {
  const url = resolveOptionalParameters(Object.entries(query).reduce((resultPath, queryParams) => {
    const [ key, value ] = queryParams
    return resultPath.replace(':' + key, <string>value)
  }, entryPath))

  return url
}

export function resolveOptionalParameters (unresolvedPath: string) {
  return unresolvedPath === '/' ? unresolvedPath : unresolvedPath.split('/').reduce((path, queryParam) => {
    const firstCharacter = queryParam.slice(0, 1)
    const lastCharacter = queryParam.slice(-1)

    if (lastCharacter === '?' && firstCharacter === ':') {
      return path
    }

    if (lastCharacter === '?') {
      return path + queryParam.slice(0, -1) + '/'
    }

    return path + queryParam + '/'
  }, '')
}
