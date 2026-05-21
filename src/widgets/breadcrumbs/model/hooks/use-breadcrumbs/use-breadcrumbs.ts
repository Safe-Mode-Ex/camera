import {useLocation} from 'react-router-dom';
import {BreadcrumbTitle} from '../../../enums/breadcrumb-title';
import type {Breadcrumb} from '../../types';

export const useBreadcrumbs = (): Breadcrumb[] => {
  const {pathname} = useLocation();
  const pathNames = pathname.split('/');

  return pathNames.reduce<Breadcrumb[]>((result, path, index, array) => {
    const isLast = array.length - 1 === index;
    const isFirst = index === 0;
    const prevHref = isFirst ? '' : result[index - 1].href;

    result.push({
      title: BreadcrumbTitle[path],
      href: isLast ? '' : `${prevHref}/${path}`,
      isLast,
    });
    return result;
  }, []);
};
