import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { replaceParametersInPath } from '../../utils/routes'

interface Props {
  route: {
    page: string,
    path: string
  },
  query?: any,
}

export const RouteLink: FunctionComponent<Props> = ({ route, children, query = {} }) => {
  return (
    <Link href={{ pathname: route.page, query }} as={`${replaceParametersInPath(route.path, query)}`} passHref={true}>
      { children }
    </Link>
  )
}
