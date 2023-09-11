<template lang="html">
  <div class="wrap">
    <div
      class="h-category-card"
      @click="$router.push(localePath(`/categories/${category.slug}`))"
    >
      <div class="h-category-card-title">
        <h4>{{ category?.name }}</h4>
      </div>
      <div class="h-category-card-img">
        <img v-if="category?.md_img" :src="category?.md_img" alt="" />
      </div>
    </div>
    <h4 class="new-title">{{ category?.name }}</h4>
  </div>
</template>
<script>
export default {
  props: ["category"],
};
</script>
<style lang="css">
.h-category-card {
  padding: 22px;
  background: #f5f5f5;
  border-radius: 20px;
  height: 120px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.h-category-card-img {
  position: absolute;
  right: 0;
  top: 22px;
  height: 100%;
  width: 115px;
}
.h-category-card-img img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.h-category-card-title h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: #000000;
  width: 70%;
  position: relative;
  z-index: 2;
}
.new-title {
  display: none;
}
@media screen and (max-width: 1600px) {
  .h-category-card {
    border-radius: 18px;
    padding: 12px 16px;
  }
  .h-category-card-title h4 {
    font-size: 16px;
    width: 80%;
  }
}
@media screen and (max-width: 1024px) {
  .h-category-card {
    padding: 0;
    border-radius: 12px;
    margin-bottom: 14px;
  }
  .h-category-card-title h4 {
    opacity: 0;
  }
  .new-title {
    display: block;
    font-family: var(--SB_500);
    font-style: normal;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: #000000;
    position: relative;
    z-index: 2;
  }
}
</style>
