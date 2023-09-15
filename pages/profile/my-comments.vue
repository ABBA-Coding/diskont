<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["main.my-comments"] }}
        </nuxt-link>
      </div>
      <div><MainTitle :title="$store.state.translations['main.my-comments']" /></div>
      <div class="profile-page-grid">
        <div>
          <ProfileMenu />
        </div>
        <div>
          <div
            class="my-comments-grid"
            v-if="$store.state.profile?.comments?.data?.length > 0"
          >
            <ProfileCommentCard
              v-for="comment in $store.state.profile?.comments?.data"
              :comment="comment"
              :key="comment?.id"
            />
          </div>
          <div class="comments-empty" v-else>
            <nuxt-img format="webp" src="/comments-empty.png" alt="" />
            <h4>
              {{ $store.state.translations["profile.comment-empty"] }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOrdersCard from "../../components/cards/MyOrdersCard.vue";
import ProfileCommentCard from "../../components/cards/ProfileCommentCard.vue";
import ProfileMenu from "../../components/profile-menu.vue";

export default {
  middleware: "auth",

  data() {
    return {
      empty: true,
      edit: require("../../assets/svg/Edit.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  computed: {
    checkAuth() {
      return this.$store.state.auth;
    },
  },
  mounted() {},
  watch: {
    checkAuth(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
  },
  components: { MyOrdersCard, ProfileCommentCard, ProfileMenu },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.my-comments-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 31px;
}
.comments-empty {
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.comments-empty h4 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>
