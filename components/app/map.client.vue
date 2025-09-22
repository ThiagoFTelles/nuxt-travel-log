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
        <div class="tooltip tooltip-top" :data-tip="point.label">
          <Icon
            name="tabler:map-pin-filled"
            size="30"
            class="text-secondary"
          />
        </div>
      </template>
    </MglMarker>
  </MglMap>
</template>
