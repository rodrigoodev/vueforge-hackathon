<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

console.log(route.params);

function back() {
  router.push("/boards");
}
</script>

<template>
  <div>
    Board about {{ route.params.id }}

    <button @click="back()">voltar</button>
  </div>
</template>
