<template lang="html">
  <div
    class="brand-card"
    @click="$router.push(localePath(`/brand-categories/${brand?.slug}`))"
  >
    <img v-if="brand?.logo" :src="brand?.md_logo" alt="" />
    <img v-else src="../../assets/images/image 56.png" alt="" />
  </div>
</template>
<script>
export default {
  props: ["brand"],
};
</script>
<style lang="css">
.brand-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  height: 106px;
  cursor: pointer;
}
.brand-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
