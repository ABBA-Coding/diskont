<template lang="html">
  <div class="v-notification">
    <div class="v-notification-icon">
      <slot></slot>
    </div>
    <div class="v-notification-body">
      <h4>{{ title }}</h4>
      <p>Haridlar qilishda davom eting!</p>
      <span class="toast-close" @click="$emit('click')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.9959 2.00586L2.00586 13.9434"
            stroke="#D9D9D9"
            stroke-width="2.20091"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 13.95L2 2"
            stroke="#D9D9D9"
            stroke-width="2.20091"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="css">
.v-notification {
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 85px auto;
  max-width: 528px;
  position: fixed;
  top: 32px;
  right: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: 0.5s;
}
.v-notification-body {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  position: relative;
  padding-right: 20px;
}
.v-notification-body h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
}
.v-notification-body p {
  margin-top: 10px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #949494;
}
.toast-close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .v-notification {
    top: 16px;
    right: 16px;
    padding: 16px;
    border-radius: 12px;
    max-width: 80%;
  }

  .v-notification-body h4 {
    font-size: 14px;
    line-height: 150%;
  }
  .v-notification-body p {
    font-size: 12px;
    margin-top: 4px;
  }
  .v-notification-body {
    justify-content: center;
    padding: 0;
  }
  .v-notification-icon {
    width: 72px;
  }
  .v-notification-icon {
    width: 90%;
  }
}
</style>
