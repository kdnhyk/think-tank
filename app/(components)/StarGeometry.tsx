import * as THREE from 'three';

interface StarGeometryProps {
  innerRadius: number; 
  outerRadius: number;
  numPoints: number;
  depth: number;
}

const StarGeometry = ({innerRadius, outerRadius, numPoints, depth}: StarGeometryProps) => {
  const starShape = new THREE.Shape();

  for (let i = 0; i < 2 * Math.PI; i += (2 * Math.PI) / numPoints) {
    const x = Math.cos(i) * outerRadius;
    const y = Math.sin(i) * outerRadius;
    starShape.lineTo(x, y);

    const innerX = Math.cos(i + (Math.PI / numPoints)) * innerRadius;
    const innerY = Math.sin(i + (Math.PI / numPoints)) * innerRadius;
    starShape.lineTo(innerX, innerY);
  }

  const extrudeSettings = {
    steps: 1,
    depth: depth,
    bevelEnabled: false,
  };

  return new THREE.ExtrudeGeometry(starShape, extrudeSettings);
}
 
export default StarGeometry;