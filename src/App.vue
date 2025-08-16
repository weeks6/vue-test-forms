<template>
  <div class="container">
    <div class="form-wrap">
      <FormA />
      <FormB />
    </div>

    <SentForms />
  </div>
</template>

<script setup lang="ts">

import FormA from './components/FormA.vue';
import FormB from './components/FormB.vue';
import SentForms from './components/SentForms.vue';

</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-image: radial-gradient();
}

.form-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
