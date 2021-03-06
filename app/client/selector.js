import { createStructuredSelector } from 'reselect';
import { hoveredPlacesSelector } from './selectors/places';
import { labeledConnectionsSelector } from './selectors/connections';
import { graphPointsSelector, graphTransitionSelector } from './selectors/graph';
import visSelector from './selectors/vis';
import mapSelector from './selectors/map';
import uiSelector from './selectors/ui';
import statsSelector from './selectors/stats';

export const vis = createStructuredSelector({
  vis: visSelector,
  nodes: hoveredPlacesSelector,
  edges: labeledConnectionsSelector,
  points: graphPointsSelector,
  transition: graphTransitionSelector
});

export const app = createStructuredSelector({
  map: mapSelector,
  ui: uiSelector,
  stats: statsSelector
});