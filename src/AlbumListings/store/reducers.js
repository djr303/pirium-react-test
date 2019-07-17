import {
  REQUEST_DATA_SUCCESS,
  EXPAND_COLLAPSE,
  EXPAND_COLLAPSE_ALL,
} from './actions';

export const albums = (state = {albums: null, expanded: false}, action) => {
  let albums;
  let expanded;
  switch (action.type) {
    case REQUEST_DATA_SUCCESS:
      return action.payload.data;
    case EXPAND_COLLAPSE:
      const album = state.albums.find(
        album => album.name === action.payload.albumName,
      );
      const albumIdx = state.albums.indexOf(album);
      album.expanded = !album.expanded;
      albums = state.albums.slice();
      albums.splice(albumIdx, 1, album);
      expanded =
        !state.albums.find(album => album.expanded === state.expanded)
          ? !state.expanded
          : state.expanded;
      return {expanded, albums};
    case EXPAND_COLLAPSE_ALL:
      expanded = !state.expanded;
      albums = state.albums.map(album => {
        album.expanded = expanded;
        return album;
      });
      return {expanded, albums};
    default:
      return state;
  }
};
