<template lang="html">
  <div class="about-us__list">
    <ul>
      <li>
        <nuxt-link
          :class="{
            'about-us__list__active': $route.name.includes('info-about-us'),
          }"
          :to="localePath('/info/about-us')"
          >{{ $store.state.translations["main.aboutUs"] }}</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{ 'about-us__list__active': $route.name.includes('info-delivery') }"
          :to="localePath('/info/delivery')"
          >Yetkazib berish</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{ 'about-us__list__active': $route.name.includes('info-about-b2b') }"
          :to="localePath('/info/about-b2b')"
          >B2B savdo haqida</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{ 'about-us__list__active': $route.name.includes('info-working') }"
          :to="localePath('/info/working')"
        >
          {{ $store.state.translations["main.workingdiskont"] }}</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{
            'about-us__list__active': $route.name.includes('info-trade-nation'),
          }"
          :to="localePath('/info/trade-nation')"
          >Diskontda Nasiya savdo</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{
            'about-us__list__active': $route.name == 'info-warranty',
          }"
          :to="localePath('/info/warranty')"
          >Maxsulotlarga kafolat</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "aboutMenuList",
};
</script>
<style lang=""></style>
