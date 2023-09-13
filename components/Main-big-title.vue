<template lang="html">
  <div class="main-big-title">
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="css">
.main-big-title h2 {
  font-family: "SF_700";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: var(--color_green);
}
.main-big-title {
  margin-bottom: 32px;
}
</style>
