import React from 'react';
import { useSelector } from 'react-redux';
import { getDependencyGraph } from '~/store/alteryx-workflow/alteryx-workflow-selectors';
import DagreGraph from 'dagre-d3-react'
import './dependency-graph.scss';

const DependencyGraph = () => {
  const { nodes, links } = useSelector(getDependencyGraph);

  return (
    <DagreGraph
      nodes={nodes}
      links={links}
      width={'400px'}
      height={'90vh'}
      className={'dependency-graph'}
      config={{
        rankdir: 'TB',
        align: 'DL',
        ranker: 'tight-tree'
      }}
      shape='circle'
      fitBoundaries
      zoomable
      onNodeClick={e => console.log(e)}
    />
  );
}

export default DependencyGraph;
