<template lang="html">
  <div class="main-title">
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="css">
.main-title {
  margin-bottom: 24px;
}
.main-title h2 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
}
@media screen and (max-width: 1600px) {
  .main-title h2 {
    font-size: 24px;
  }
}
@media (max-width: 576px) {
  .main-title h2 {
    font-size: 18px;
    line-height: 27px;
  }
}
</style>
