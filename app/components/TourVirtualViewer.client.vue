<template>
  <div class="tour-viewer-container">
    <div ref="container" class="tour-viewer"></div>
    
    <!-- Shortcut Badges Bar -->
    <div class="tour-shortcuts-bar">
      <button
        v-for="node in nodes"
        :key="node.id"
        type="button"
        class="tour-badge-btn"
        :class="{ active: currentNodeId === node.id }"
        @click="switchNode(node.id)"
      >
        <span class="badge-dot"></span>
        <span class="badge-name">{{ node.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Viewer } from '@photo-sphere-viewer/core'
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin'

const props = defineProps({
  nodes: { type: Array, required: true },
  startNodeId: { type: String, required: true },
})

const emit = defineEmits(['node-change'])

const container = ref(null)
const currentNodeId = ref(props.startNodeId)
let viewer = null
let tour = null

function goTo(nodeId) {
  switchNode(nodeId)
}

function switchNode(nodeId) {
  currentNodeId.value = nodeId
  if (tour) {
    try {
      tour.setCurrentNode(nodeId)
    } catch (e) {}
  }
}

defineExpose({ goTo })

watch(() => props.startNodeId, (newId) => {
  if (newId) switchNode(newId)
})

onMounted(async () => {
  await nextTick()
  if (!container.value) return
  viewer = new Viewer({
    container: container.value,
    navbar: ['zoom', 'move', 'caption', 'fullscreen'],
    plugins: [
      [VirtualTourPlugin, {
        nodes: props.nodes,
        startNodeId: props.startNodeId,
        renderMode: '2d',
        preload: true,
        showLinkTooltip: true,
        arrowStyle: {
          size: { width: 44, height: 44 },
          className: 'tour-circle-pin',
          element: (link) => {
            const el = document.createElement('div')
            el.className = 'pin-wrapper'
            el.innerHTML = `
              <div class="pin-pulse"></div>
              <div class="pin-inner">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                  <path d="M2 20h20"></path>
                  <path d="M14 12v.01"></path>
                </svg>
              </div>
            `
            return el
          },
        },
      }],
    ],
  })

  tour = viewer.getPlugin(VirtualTourPlugin)
  tour.addEventListener('node-changed', (e) => {
    const id = e?.node?.id || e?.nodeId
    if (id) {
      currentNodeId.value = id
      emit('node-change', id)
    }
  })
})

onBeforeUnmount(() => {
  if (viewer) {
    viewer.destroy()
    viewer = null
    tour = null
  }
})
</script>

<style>
.tour-circle-pin {
  cursor: pointer;
}
.tour-circle-pin .pin-wrapper {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tour-circle-pin .pin-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(94, 187, 71, 0.45);
  animation: tour-pulse-wave 2s infinite ease-out;
}
.tour-circle-pin .pin-inner {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #5ebb47;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35), 0 0 0 3px rgba(255, 255, 255, 0.95);
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.tour-circle-pin:hover .pin-inner {
  transform: scale(1.15);
  background: #418a2f;
}
@keyframes tour-pulse-wave {
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
</style>

<style scoped>
.tour-viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.tour-viewer {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
}
.tour-shortcuts-bar {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(18, 18, 18, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 6px 12px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  max-width: 92vw;
  overflow-x: auto;
}
.tour-badge-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.tour-badge-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.tour-badge-btn.active {
  background: #5ebb47;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(94, 187, 71, 0.4);
}
.tour-badge-btn .badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}
@media (max-width: 767.98px) {
  .tour-viewer {
    height: 380px;
  }
  .tour-shortcuts-bar {
    bottom: 45px;
    padding: 4px 8px;
  }
  .tour-badge-btn {
    font-size: 12px;
    padding: 4px 10px;
  }
}
</style>
