import React, { Component } from 'react';
import classNames from 'classnames';
import PlaceMap from './place-map';
import PlaceDeco from './place-deco';
import PlaceLabel from './place-label';

class Place extends Component {
  shouldComponentUpdate(nextProps) {
    let { node } = this.props,
      nextNode = nextProps.node;

    return node.visible !== nextNode.visible ||
      node.point !== nextNode.point ||
      node.hover !== nextNode.hover ||
      node.rank !== nextNode.rank;
  }

  render() {
    let { node, onHover } = this.props,
      { point, hover, rank, visible } = node,
      transform;

    if (point != null)
      transform = `translate(${point.x}, ${point.y})`;

    let className = classNames('place', { active: visible, hover });

    return (
      <g transform={transform} data-rank={rank} className={className} onMouseEnter={onHover.bind(this, true)} onMouseLeave={onHover.bind(this, false)}>
        <PlaceMap node={node} />
        <PlaceDeco node={node} />
        <PlaceLabel node={node} />
      </g>
    );
  }
}

export default Place;