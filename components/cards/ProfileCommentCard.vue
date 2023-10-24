<template lang="html">
  <div class="profile-comment-card">
    <div class="profile-comment-card-head">
      <div class="profile-comment-card-img">
        <img
          v-if="comment?.product_info?.products[0]?.images[0]?.md_img"
          :src="comment?.product_info?.products[0]?.images[0]?.md_img"
          alt=""
        />
      </div>

      <div class="profile-comment-card-header">
        <div>
          <h4
            @click="$router.push(`/product/${comment?.product_info?.products[0]?.slug}`)"
          >
            {{ comment?.product_info?.name?.ru }}
          </h4>
          <a-rate
            v-if="comment?.stars"
            disabled
            style="color: #00b2a9"
            v-model="comment.stars"
          />
          <a-rate v-else disabled style="color: #00b2a9" />
        </div>
      </div>
    </div>
    <div class="profile-comment-card-body">
      <p>
        <span>{{ $store.state.translations["profile.your-comment"] }}:</span>
        {{ comment?.comment }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["comment"],
  data() {
    return {
      edit: require("../../assets/svg/Fill 4.svg?raw"),
      value: 2,
    };
  },
};
</script>
<style lang="css">
.profile-comment-card {
  padding: 17px 16px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
}
.profile-comment-card-head {
  display: grid;
  grid-template-columns: 73px auto;
  grid-gap: 24px;
}
.profile-comment-card-header {
  display: flex;
  justify-content: space-between;
}
.profile-comment-card-header h4 {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 14px;
  cursor: pointer;
}
.profile-comment-card-img {
  width: 73px;
  height: 69px;
  border-radius: 6px;
  object-fit: cover;
}
.profile-comment-card-img img {
  width: 100%;
  height: 100%;
}
.profile-comment-card-body {
  margin-top: 14px;
}
.profile-comment-card-body p {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #949494;
}
.profile-comment-card-body p span {
  color: #00b2a9;
}
.profile-comment-card-edit {
  cursor: pointer;
  height: 31.5px;
  width: 31.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 241, 241, 0.4);
  mix-blend-mode: normal;
  border-radius: 10px;
}
@media (max-width: 576px) {
  .profile-comment-card {
    padding: 0;
    border: none;
  }
  .profile-comment-card-header h4 {
    font-size: 16px;
  }
  .profile-comment-card-body p span {
    display: none;
  }
  .profile-comment-card-head {
    grid-gap: 16px;
  }
  .my-orders-card-footer div:last-child,
  .my-orders-card-footer div:nth-child(3) {
    display: none;
  }
}
</style>
