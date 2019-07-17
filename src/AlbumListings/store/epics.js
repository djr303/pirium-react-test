import {ajax} from 'rxjs/ajax';
import {mergeMap, map} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {REQUEST_DATA, requestDataSuccess} from './actions';

//Transform helper functions
const getAlbumName = datum => `${datum.band} - ${datum.album}`;
const albumExists = (albums, albumName) =>
  albums.find(album => album.name === albumName);
const createAlbumEntry = albumName => ({name: albumName, expanded: false, songs: []});

//TODO: In real world application this transform function should be broken out into a module somewhere
const transformData = albums => {
  let albumName;
  let album;
  const selectedAlbums = [];
  const albumsLen = albums.length;
  for (let i = 0; i < albumsLen; i++) {
    albumName = getAlbumName(albums[i]);
    album = albumExists(selectedAlbums, albumName);
    if (!album) {
      album = createAlbumEntry(albumName);
      selectedAlbums.push(album);
    }
    album.songs.push(albums[i].song);
  }
  return {albums: selectedAlbums, expanded: false};
};

const requestData = action$ =>
  action$.pipe(
    ofType(REQUEST_DATA),
    mergeMap(action =>
      ajax
        .getJSON('./data.json')
        .pipe(map(response => requestDataSuccess(transformData(response)))),
    ),
  );

export default requestData;
