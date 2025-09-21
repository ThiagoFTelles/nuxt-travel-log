<script lang="ts" setup>
import { CENTER_BR } from "~/lib/constants";

const colorMode = useColorMode();
const styleLight = "https://tiles.openfreemap.org/styles/liberty";
const styleDark = "/styles/dark.json";
const style = computed(() => colorMode.value === "dark" ? styleDark : styleLight);
const zoom = 2;
</script>

<template>
  <MglMap
    :map-style="style"
    :center="CENTER_BR"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>
