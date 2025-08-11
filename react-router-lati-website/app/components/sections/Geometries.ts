import * as THREE from 'three'

// 1. Cubo Redondeado basado en el patrón oficial de Three.js
export function createRoundedCube(width = 1, height = 1, depth = 1, segments = 2, radius = 0.1) {
  // Calcular segmentos totales (debe ser impar)
  const totalSegments = segments * 2 + 1
  
  // Asegurar que el radio no sea mayor que el lado más corto
  radius = Math.min(width / 2, height / 2, depth / 2, radius)
  
  // Crear geometría base
  const geometry = new THREE.BoxGeometry(1, 1, 1, totalSegments, totalSegments, totalSegments)
  
  // Si no hay segmentos, retornar caja regular
  if (totalSegments === 1) {
    geometry.scale(width, height, depth)
    return geometry
  }
  
  // Convertir a non-indexed para facilitar modificación
  const nonIndexed = geometry.toNonIndexed()
  
  const position = new THREE.Vector3()
  const normal = new THREE.Vector3()
  const box = new THREE.Vector3(width, height, depth).divideScalar(2).subScalar(radius)
  
  const positions = nonIndexed.attributes.position.array
  const normals = nonIndexed.attributes.normal.array
  const halfSegmentSize = 0.5 / totalSegments
  
  // Modificar cada vértice para crear el efecto redondeado
  for (let i = 0; i < positions.length; i += 3) {
    position.fromArray(positions, i)
    
    // Calcular normal ajustada
    normal.copy(position)
    normal.x -= Math.sign(normal.x) * halfSegmentSize
    normal.y -= Math.sign(normal.y) * halfSegmentSize
    normal.z -= Math.sign(normal.z) * halfSegmentSize
    normal.normalize()
    
    // Aplicar nueva posición
    positions[i + 0] = box.x * Math.sign(position.x) + normal.x * radius
    positions[i + 1] = box.y * Math.sign(position.y) + normal.y * radius
    positions[i + 2] = box.z * Math.sign(position.z) + normal.z * radius
    
    // Actualizar normales
    normals[i + 0] = normal.x
    normals[i + 1] = normal.y
    normals[i + 2] = normal.z
  }
  
  // Actualizar atributos
  nonIndexed.attributes.position.needsUpdate = true
  nonIndexed.attributes.normal.needsUpdate = true
  
  return nonIndexed
}

// 2. Media Esfera Cerrada (usando patrón similar)
export function createClosedHalfSphere(radius = 1, widthSegments = 32, heightSegments = 16) {
  // Crear esfera completa y modificar
  const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI / 2)
  const nonIndexed = geometry.toNonIndexed()
  
  const positions = nonIndexed.attributes.position.array
  const normals = nonIndexed.attributes.normal.array
  const uvs = nonIndexed.attributes.uv.array
  
  // Crear arrays para la geometría final (superficie + base)
  const finalPositions = []
  const finalNormals = []
  const finalUvs = []
  
  // Copiar superficie curva existente
  for (let i = 0; i < positions.length; i++) {
    finalPositions.push(positions[i])
  }
  for (let i = 0; i < normals.length; i++) {
    finalNormals.push(normals[i])
  }
  for (let i = 0; i < uvs.length; i++) {
    finalUvs.push(uvs[i])
  }
  
  // Agregar base plana
  const baseTriangles = []
  for (let i = 0; i < widthSegments; i++) {
    const angle1 = (i / widthSegments) * Math.PI * 2
    const angle2 = ((i + 1) / widthSegments) * Math.PI * 2
    
    // Centro
    baseTriangles.push(0, 0, 0)
    baseTriangles.push(0, -1, 0) // Normal hacia abajo
    baseTriangles.push(0.5, 0.5) // UV centro
    
    // Punto en el borde
    baseTriangles.push(radius * Math.cos(angle1), 0, radius * Math.sin(angle1))
    baseTriangles.push(0, -1, 0)
    baseTriangles.push((Math.cos(angle1) + 1) / 2, (Math.sin(angle1) + 1) / 2)
    
    // Siguiente punto en el borde
    baseTriangles.push(radius * Math.cos(angle2), 0, radius * Math.sin(angle2))
    baseTriangles.push(0, -1, 0)
    baseTriangles.push((Math.cos(angle2) + 1) / 2, (Math.sin(angle2) + 1) / 2)
  }
  
  // Agregar triángulos de la base
  for (let i = 0; i < baseTriangles.length; i += 9) {
    finalPositions.push(baseTriangles[i], baseTriangles[i + 1], baseTriangles[i + 2])
    finalPositions.push(baseTriangles[i + 6], baseTriangles[i + 7], baseTriangles[i + 8]) // Invertir orden
    finalPositions.push(baseTriangles[i + 3], baseTriangles[i + 4], baseTriangles[i + 5])
    
    finalNormals.push(baseTriangles[i + 1], baseTriangles[i + 2], baseTriangles[i + 3])
    finalNormals.push(baseTriangles[i + 7], baseTriangles[i + 8], baseTriangles[i + 9])
    finalNormals.push(baseTriangles[i + 4], baseTriangles[i + 5], baseTriangles[i + 6])
    
    finalUvs.push(baseTriangles[i + 2], baseTriangles[i + 3])
    finalUvs.push(baseTriangles[i + 8], baseTriangles[i + 9])
    finalUvs.push(baseTriangles[i + 5], baseTriangles[i + 6])
  }
  
  // Crear nueva geometría
  const finalGeometry = new THREE.BufferGeometry()
  finalGeometry.setAttribute('position', new THREE.Float32BufferAttribute(finalPositions, 3))
  finalGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(finalNormals, 3))
  finalGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(finalUvs, 2))
  
  return finalGeometry
}

// 3. Medio Cilindro Cerrado (usando patrón similar)
export function createClosedHalfCylinder(radius = 1, height = 2, radialSegments = 32, heightSegments = 1) {
  // Crear cilindro completo y tomar la mitad
  const geometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments, heightSegments, true, 0, Math.PI)
  const nonIndexed = geometry.toNonIndexed()
  
  const positions = nonIndexed.attributes.position.array
  const normals = nonIndexed.attributes.normal.array
  const uvs = nonIndexed.attributes.uv.array
  
  // Arrays para geometría final
  const finalPositions = []
  const finalNormals = []
  const finalUvs = []
  
  // Copiar superficie curva
  for (let i = 0; i < positions.length; i++) {
    finalPositions.push(positions[i])
  }
  for (let i = 0; i < normals.length; i++) {
    finalNormals.push(normals[i])
  }
  for (let i = 0; i < uvs.length; i++) {
    finalUvs.push(uvs[i])
  }
  
  const halfHeight = height / 2
  
  // Agregar tapas circulares (superior e inferior)
  for (let isTop of [true, false]) {
    const y = isTop ? halfHeight : -halfHeight
    const normalY = isTop ? 1 : -1
    
    for (let i = 0; i < radialSegments; i++) {
      const angle1 = (i / radialSegments) * Math.PI
      const angle2 = ((i + 1) / radialSegments) * Math.PI
      
      const x1 = radius * Math.cos(angle1)
      const z1 = radius * Math.sin(angle1)
      const x2 = radius * Math.cos(angle2)
      const z2 = radius * Math.sin(angle2)
      
      if (isTop) {
        // Tapa superior (normal hacia arriba)
        finalPositions.push(0, y, 0, x1, y, z1, x2, y, z2)
      } else {
        // Tapa inferior (normal hacia abajo, orden invertido)
        finalPositions.push(0, y, 0, x2, y, z2, x1, y, z1)
      }
      
      finalNormals.push(0, normalY, 0, 0, normalY, 0, 0, normalY, 0)
      finalUvs.push(0.5, 0.5, (Math.cos(angle1) + 1) / 2, (Math.sin(angle1) + 1) / 2, (Math.cos(angle2) + 1) / 2, (Math.sin(angle2) + 1) / 2)
    }
  }
  
  // Agregar caras planas laterales (donde está el corte)
  // Cara 1: En θ = 0 (lado derecho donde x = radius, z = 0)
  // Normal apunta hacia el interior del cilindro (hacia -Z)
  finalPositions.push(
    radius, halfHeight, 0,    // esquina superior derecha
    radius, -halfHeight, 0,   // esquina inferior derecha
    0, halfHeight, 0,         // esquina superior centro
    
    radius, -halfHeight, 0,   // esquina inferior derecha
    0, -halfHeight, 0,        // esquina inferior centro
    0, halfHeight, 1          // esquina superior centro
  )
  
  // Normales hacia -Z para la cara derecha
  for (let i = 0; i < 6; i++) {
    finalNormals.push(0, 0, -1)
  }
  
  finalUvs.push(
    1, 1,    // esquina superior derecha
    1, 0,    // esquina inferior derecha
    0.5, 1,  // esquina superior centro
    1, 0,    // esquina inferior derecha
    0.5, 0,  // esquina inferior centro
    0.5, 1   // esquina superior centro
  )
  
  // Cara 2: En θ = π (lado izquierdo donde x = -radius, z = 0)
  // Normal apunta hacia el interior del cilindro (hacia +Z)
  finalPositions.push(
    0, halfHeight, 0,         // esquina superior centro
    0, -halfHeight, 0,        // esquina inferior centro
    -radius, halfHeight, 0,   // esquina superior izquierda
    
    0, -halfHeight, 0,        // esquina inferior centro
    -radius, -halfHeight, 0,  // esquina inferior izquierda
    -radius, halfHeight, 0    // esquina superior izquierda
  )
  
  // Normales hacia +Z para la cara izquierda
  for (let i = 0; i < 6; i++) {
    finalNormals.push(0, 0, 1)
  }
  
  finalUvs.push(
    0.5, 1,  // esquina superior centro
    0.5, 0,  // esquina inferior centro
    0, 1,    // esquina superior izquierda
    0.5, 0,  // esquina inferior centro
    0, 0,    // esquina inferior izquierda
    0, 1     // esquina superior izquierda
  )
  
  // Crear geometría final
  const finalGeometry = new THREE.BufferGeometry()
  finalGeometry.deleteAttribute('normal');

  finalGeometry.setAttribute('position', new THREE.Float32BufferAttribute(finalPositions, 3))
  finalGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(finalNormals, 3))
  finalGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(finalUvs, 2))
  
  return finalGeometry
}