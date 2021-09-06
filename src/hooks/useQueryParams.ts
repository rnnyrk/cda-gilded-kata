import * as i from 'types';
import React from 'react';
import qs from 'qs';
import { useHistory, useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const history = useHistory();
  const location = useLocation();

  const getQueryParams: qs.ParsedQs = React.useMemo(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
    return queryParams;
  }, [location.search]);

  const setQueryParams = (params: i.UseSetQueryParamsProps) => {
    // Remove empty queries
    Object.keys(params).forEach((key) => params[key] === '' && delete params[key]);
    const search = qs.stringify(params);
    history.replace({ search: search || 'none' });
  };

  return {
    queryParams: getQueryParams,
    setQueryParams,
  };
};
