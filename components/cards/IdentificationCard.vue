<template lang="html">
  <div class="identification-card">
    <div class="identification-card-img">
      <nuxt-img format="webp" src="/image 43.png" alt="" />
    </div>
    <div class="identification-card-body">
      <span>
        <h1>ID kartangizning uziz old tarafi</h1>
        <p>
          ver since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraver since the 1500s, when
          an unknown printer took a galley of ver since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also
        </p>
      </span>
      <div>
        <div class="upload-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M24 23C24 23.8284 23.3284 24.5 22.5 24.5H1.5C0.671578 24.5 0 23.8284 0 23C0 22.1716 0.671578 21.5 1.5 21.5H22.5C23.3284 21.5 24 22.1716 24 23ZM10.9394 18.2482C11.2323 18.5411 11.6161 18.6875 12 18.6875C12.3838 18.6875 12.7678 18.5411 13.0606 18.2482L18.3752 12.9336C18.961 12.3478 18.961 11.3981 18.3752 10.8123C17.7894 10.2265 16.8397 10.2265 16.2539 10.8123L13.5 13.5662V2C13.5 1.17158 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17158 10.5 2V13.5662L7.74609 10.8123C7.1603 10.2265 6.21056 10.2265 5.62477 10.8123C5.03897 11.3981 5.03897 12.3478 5.62477 12.9336L10.9394 18.2482Z"
              fill="#09454f"
            /></svg
          >Rasimni yuklash
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.identification-card {
  padding: 17px;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  display: flex;
}
.identification-card-img {
  width: 196px;
  height: 195px;
}
.identification-card-img img {
  object-fit: cover;
}
.identification-card-body {
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.identification-card-body h1 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  margin-bottom: 16px;
}
.identification-card-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #616161;
}
.identification-card-body .upload-img {
  padding: 12px 16px;
  background: #fafafa;
  border-radius: 12px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--color_green);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.identification-card-body .upload-img svg {
  margin-right: 16px;
}
</style>
