import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestData as _requestData, expandCollapse as _expandCollapse, expandCollapseAll as _expandCollapseAll} from './store/actions';
import Album from './components/Album';
import Expand from './components/Expand';
import './AlbumListing.scss';

const AlbumListing = ({requestData, expandCollapse, expandCollapseAll, albums, expanded}) => {
  useEffect(() => {
    requestData();
  }, [requestData]);

  return !albums ? null : (
    <div className="border album-listing">
      <h1>
        <Expand expanded={expanded} onExpand={expandCollapseAll} />
        albums
      </h1>
      <div className="albums">
        {albums.map(album => (
        	<Album key={album.name} album={album} onExpand={() => expandCollapse(album.name)} />
        ))}
      </div>
    </div>
  );
};

AlbumListing.displayName = 'AlbumListing';

AlbumListing.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      songs: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
	expanded: PropTypes.bool.isRequired,
};

AlbumListing.defaultProps = {
  albums: null,
	expanded: false,
};

export default connect(
  state => ({albums: state.albums.albums, expanded: state.albums.expanded}),
  {requestData: _requestData, expandCollapse: _expandCollapse, expandCollapseAll: _expandCollapseAll},
)(AlbumListing);
