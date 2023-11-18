"use client"
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
import StarGeometry from '../../(components)/StarGeometry';

const Home = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Number of nodes
    const N = 300;

    // Generate random data for nodes and links
    const gData = {
      nodes: Array.from({ length: N }, (_, i) => ({ id: i, group: Math.floor(Math.random() * 5) })),
      links: Array.from({ length: N - 1 }, (_, id) => ({
        source: id + 1,
        target: Math.round(Math.random() * id),
      })),
    };

    // Create a ForceGraph3D instance
    const Graph = ForceGraph3D()(document.getElementById('3d-graph') as HTMLDivElement)
      // Define the 3D object for each node
      .nodeThreeObject(
        ({ id }) =>
          new THREE.Mesh(
            StarGeometry({innerRadius: Math.random() * 5, outerRadius: Math.random() * 10, numPoints: 5, depth: Math.random() * 5}),
            new THREE.MeshLambertMaterial({
              color: 0xFFFFFF, // White color
              transparent: true,
              opacity: 0.55,
            })
          )
      )
      // Set graph data, load JSON data, and configure node labels, auto coloring, and opacity
      .graphData(gData)
      .jsonUrl('/dummy.json')
      .nodeLabel('id')
      .nodeAutoColorBy('group')
      .nodeOpacity(0.5)
      // Handle node click event
      .onNodeClick((node) => {
        // Update the selected node and open the modal
        setSelectedNode(node);
        setIsModalOpen(true);

        // Focus on the clicked node
        Graph.cameraPosition(
          { x: node.x, y: node.y, z: node.z },
          node,
          3000
        );
      });

    // Clean up when the component is unmounted
    return () => {
      Graph.graphData({ nodes: [], links: [] });
    };
  }, []);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div id="3d-graph" className="w-full h-full"></div>

      {selectedNode && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Node ID: {selectedNode.id}</h2>
            {/* Add additional information as needed */}
            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;