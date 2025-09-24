<script lang="ts" setup>
import { CENTER_BR } from "~/lib/constants";

const colorMode = useColorMode();
const mapStore = useMapStore();
const styleLight = "https://tiles.openfreemap.org/styles/liberty";
const styleDark = "/styles/dark.json";
const style = computed(() => colorMode.value === "dark" ? styleDark : styleLight);
const zoom = 2;

onMounted(() => {
  mapStore.init();
});
</script>

<template>
  <MglMap
    :map-style="style"
    :center="CENTER_BR"
    :zoom="zoom"
  >
    <MglNavigationControl />
    <MglMarker
      v-for="point in mapStore.mapPoints"
      :key="point.id"
      :coordinates="[point.long, point.lat]"
    >
      <template #marker>
        <div
          class="tooltip tooltip-top hover:cursor-pointer"
          :class="{
            'tooltip-open': mapStore.selectedPoint === point,
          }"
          :data-tip="point.name"
          @mouseenter="mapStore.selectPointWithoutFlyTo(point)"
          @mouseleave="mapStore.selectPointWithoutFlyTo(null)"
        >
          <Icon
            name="tabler:map-pin-filled"
            size="30"
            :class="mapStore.selectedPoint === point ? 'text-accent' : 'text-secondary'"
          />
        </div>
      </template>
      <mgl-popup>
        <h3 class="text-xl">
          {{ point.name }}
        </h3>
        <p v-if="point.description">
          {{ point.description }}
        </p>
      </mgl-popup>
    </MglMarker>
  </MglMap>
</template>
