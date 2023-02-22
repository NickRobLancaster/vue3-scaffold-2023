<script setup>
/* add fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import navBar from "./components/navigation.vue";

import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <navBar msg="Vite + Vue" />
</template>
