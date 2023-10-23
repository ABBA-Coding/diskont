<template lang="html">
  <a :href="banner[0]?.link">
    <div class="home-banner">
      <img :src="banner[0]?.lg_img" alt="" />
    </div>
  </a>
</template>
<script>
export default {
  props: ["banner"],
};
</script>
<style lang="css">
.home-banner {
  width: 100%;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 50px;
}
.home-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 576px) {
  .home-banner {
    height: 136px;
  border-radius: 16px;

  }
  .home-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
}
</style>
