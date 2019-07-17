export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS';
export const EXPAND_COLLAPSE = 'EXPAND_COLLAPSE';
export const EXPAND_COLLAPSE_ALL = 'EXPAND_COLLAPSE_ALL';

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const requestDataSuccess = data => ({
  type: REQUEST_DATA_SUCCESS,
  payload: {data},
});

export const expandCollapse = albumName => ({
  type: EXPAND_COLLAPSE,
  payload: {albumName},
});

export const expandCollapseAll = () => ({
  type: EXPAND_COLLAPSE_ALL,
});


