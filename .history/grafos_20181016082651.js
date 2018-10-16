var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    layout: {
      name: 'dagre'
    },
  
    style: [
      {
        selector: 'node',
        style: {
          'content': 'data(id)',
          'text-opacity': 0.5,
          'text-valign': 'center',
          'text-halign': 'right',
          'background-color': '#11479e'
        }
      },
  
      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          'width': 4,
          'target-arrow-shape': 'triangle',
          'line-color': '#9dbaea',
          'target-arrow-color': '#9dbaea'
        }
      }
    ],
  
    elements: {
      nodes: [
        { data: { id: 'n0' } },
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'n5' } },
        { data: { id: 'n6' } }
      ],
      edges: [
        { data: { source: 'n0', target: 'n1' } },
        { data: { source: 'n1', target: 'n2' } },
        { data: { source: 'n1', target: 'n3' } },
        { data: { source: 'n4', target: 'n5' } },
        { data: { source: 'n4', target: 'n6' } },
        { data: { source: 'n5', target: 'n0' } },
        { data: { source: 'n2', target: 'n3' } },
        { data: { source: 'n2', target: 'n3' } },
        { data: { source: 'n6', target: 'n6' } }
      
      ]
    },
  });