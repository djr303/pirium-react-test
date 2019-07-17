import React from 'react';
import PropTypes from 'prop-types';
import Expand from './Expand';
import './Album.scss';

const Album = ({album, onExpand}) => {
	
  return (
    <div className="album">
      <h2>
        <Expand
          expanded={album.expanded}
          onExpand={onExpand}
        />
        {album.name}
      </h2>
      <div className={`songs ${album.expanded ? 'expanded' : ''}`}>
        {album.expanded ? album.songs.map(song => <h3 key={song}>{'\u2192'} {song}</h3>) : null}
      </div>
    </div>
  );
};

Album.displayName = 'Album';

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    songs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
	onExpand: PropTypes.func.isRequired,
};

export default Album;
