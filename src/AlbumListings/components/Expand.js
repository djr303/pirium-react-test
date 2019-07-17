import React from 'react';
import PropTypes from 'prop-types';
import './Expand.scss';

const Expand = ({onExpand, expanded}) => (
  <div className="expand" onClick={() => onExpand()}>
    {expanded ? '-' : '+'}
  </div>
);

Expand.displayName = 'Expand';

Expand.propTypes = {
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default Expand;
