<template>
  <div class="tour-fullscreen">
    <TourVirtualViewer
      :key="scene.id"
      :nodes="nodes"
      :start-node-id="scene.id"
    />
  </div>
</template>

<script setup>
import { getTourScene, tourScenes } from '~/data/tour'

definePageMeta({ layout: false })

const route = useRoute()
const sceneId = String(route.params.scene)
const scene = getTourScene(sceneId)

if (!scene) {
  throw createError({ statusCode: 404, statusMessage: 'Area not found' })
}

const nodes = tourScenes.map((s) => ({
  id: s.id,
  panorama: s.panorama,
  name: s.name,
  links: s.links.map((l) => ({
    nodeId: l.nodeId,
    position: { yaw: l.yaw, pitch: l.pitch || '0deg' },
    name: l.name,
  })),
}))

useHead({
  title: `Hoteler - ${scene.name} 360`,
  meta: [
    { name: 'description', content: `Tour virtual 360 ${scene.name}` }
  ],
  bodyAttrs: { style: 'margin: 0;' },
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
.tour-fullscreen {
  width: 100vw;
  height: 100vh;
}
.tour-fullscreen .tour-viewer {
  height: 100vh !important;
  border-radius: 0;
}
</style>
