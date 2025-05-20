<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
  get(): boolean {
    return colorMode.value === "dark";
  },
  set(value: boolean): void {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">
    <Icon name="tabler:sun" class="swap-on" size="24" />
    <Icon name="tabler:moon-filled" class="swap-off" size="24" />
  </label>
</template>
