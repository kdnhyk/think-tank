"use client"
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';

const Home = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const N = 300;
    const gData = {
      nodes: Array.from({ length: N }, (_, i) => ({ id: i })),
      links: Array.from({ length: N - 1 }, (_, id) => ({
        source: id + 1,
        target: Math.round(Math.random() * id),
      })),
    };


    const Graph = ForceGraph3D()(document.getElementById('3d-graph')as HTMLDivElement)
    .nodeThreeObject(
      ({ id }) =>
        new THREE.Mesh(
          [
            new THREE.BoxGeometry(Math.random() * 20, Math.random() * 20, Math.random() * 20),
            new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20),
            new THREE.CylinderGeometry(Math.random() * 10, Math.random() * 10, Math.random() * 20),
            new THREE.DodecahedronGeometry(Math.random() * 10),
            new THREE.SphereGeometry(Math.random() * 10),
            new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2),
            new THREE.TorusKnotGeometry(Math.random() * 10, Math.random() * 2),
          ][id % 7],
          new THREE.MeshLambertMaterial({
            color: Math.round(Math.random() * Math.pow(2, 24)),
            transparent: true,
            opacity: 0.75,
          })
        )
    ).graphData(gData);

    const graphInstance = Graph.onNodeClick((node) => {
      setSelectedNode(node);
      setIsModalOpen(true);
      graphInstance.d3Force('center', null); // Stop the force-directed layout

      // Camera position transition
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      const newPos = node.x || node.y || node.z
        ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
        : { x: 0, y: 0, z: distance };

      graphInstance.cameraPosition(
        newPos, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    });



    // const graphInstance = ForceGraph3D()(
    //   document.getElementById('3d-graph') as HTMLDivElement
    // )
    //   .graphData(gData)
    //   .jsonUrl('/dummy.json')
    //   .nodeLabel('id')
    //   .nodeAutoColorBy('group')
    //   .onNodeClick((node) => {
    //     setSelectedNode(node);
    //     setIsModalOpen(true);
    //     graphInstance.d3Force('center', null); // Stop the force-directed layout

    //     // Camera position transition
    //     const distance = 40;
    //     const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    //     const newPos = node.x || node.y || node.z
    //       ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
    //       : { x: 0, y: 0, z: distance };

    //     graphInstance.cameraPosition(
    //       newPos, // new position
    //       node, // lookAt ({ x, y, z })
    //       3000 // ms transition duration
    //     );
    //   });

    return () => {
      graphInstance.graphData({ nodes: [], links: [] });
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div id="3d-graph" className="w-full h-full"></div>

      {/* Node Modal */}
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

      {/* Node Tooltip */}
      {/* {selectedNode && (
        <div
          className="absolute top-0 left-0 bg-gray-800 text-white p-2 rounded"
          style={{ transform: `translate(${selectedNode.x}px, ${selectedNode.y}px)` }}
        >
          Node ID: {selectedNode.id}
        </div>
      )} */}
    </div>
  );
};

export default Home;
