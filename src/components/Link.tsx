import { Link as RouteLink } from '../routes';

export default function Link({ href, children, ...rest }) {
  return (
    <RouteLink route={href}>
      <a {...rest}>
        {children}
      </a>
    </RouteLink>
  );
}
