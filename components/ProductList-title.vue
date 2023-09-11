<template lang="html">
  <div class="product_list-title">
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="css">
.product_list-title {
  margin-bottom: 32px;
}
.product_list-title h2 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
}
</style>
