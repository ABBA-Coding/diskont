<template lang="html">
  <a :href="img?.link?.ru" target="_blank">
    <div class="small-banner-card">
      <img :src="img?.md_img" alt="" />
    </div>
  </a>
</template>
<script>
export default {
  props: ["img"],
};
</script>
<style lang="css">
.small-banner-card {
  height: 290px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}
.small-banner-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
