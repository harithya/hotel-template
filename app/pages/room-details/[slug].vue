<template>
  <div>
    <PageTitle :title="room.name" crumb="Kamar" />
    <section class="blog-details room-stacked pt-120 pb-120">
      <div class="container">
        <div class="row">
          <RoomDetailMain :room="room" />
          <RoomDetailSidebar :room="room" :compare="others" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.room-stacked .row > div {
  flex: 0 0 100%;
  max-width: 100%;
}
</style>

<script setup lang="ts">
import { getRoom, rooms } from '~/data/rooms'

const route = useRoute()
const slug = route.params.slug as string
const room = getRoom(slug)

if (!room) {
  throw createError({ statusCode: 404, statusMessage: 'Room not found' })
}

const others = rooms.filter((r) => r.slug !== slug)

useHead({
  title: `Hoteler - ${room.name}`,
  meta: [
    { name: 'description', content: `Hoteler ${room.name} details and booking` }
  ]
})
</script>
