<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["profile.personal-info"] }}
        </nuxt-link>
      </div>
      <div><MainTitle :title="$store.state.translations['profile.personal-info']" /></div>
      <div class="profile-page-grid">
        <div>
          <ProfileMenu />
        </div>
        <div>
          <div class="personal-info-grid" v-if="!profileEdit">
            <div class="personal-info-card">
              <div class="personal-info-card-header">
                <h3>{{ $store.state.translations["profile.personal-info"] }}</h3>

                <span class="personal-info-edit-btn" @click="profileEdit = true"
                  ><span v-html="edit"></span>
                  {{ $store.state.translations["main.change"] }}
                </span>
              </div>
              <div class="personal-info-card-body">
                <div>
                  <div>
                    <b-skeleton v-if="skeleton" width="200px" height="20px"></b-skeleton>
                    <p v-else>
                      {{ $store.state.translations["profile.name"] }}:<span>{{
                        !profile?.name && !profile?.surname
                          ? "-----"
                          : `${profile?.surname ? profile?.surname : ""} ${profile?.name}`
                      }}</span>
                    </p>
                    <b-skeleton v-if="skeleton" width="200px" height="20px"></b-skeleton>
                    <p v-else>
                      {{ $store.state.translations["profile.email"] }}:<span>{{
                        profile?.email ? profile?.email : "-----"
                      }}</span>
                    </p>
                    <!-- <p>Пароль:<span>12****AA</span></p> -->
                  </div>
                </div>
                <div>
                  <div>
                    <b-skeleton v-if="skeleton" width="200px" height="20px"></b-skeleton>
                    <p v-else>
                      {{ $store.state.translations["profile.phone"] }}:<span>{{
                        profile?.login
                          ? `+${`${profile?.login}`
                              .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                              .filter((item, index) => index != 0)
                              .join(" ")}`
                          : "-----"
                      }}</span>
                    </p>
                    <!-- <b-skeleton v-if="skeleton" width="200px" height="20px"></b-skeleton>
                    <p v-else>
                      {{ $store.state.translations["profile.address"] }}:<span>{{
                        profile?.address ? profile?.address : "-----"
                      }}</span>
                    </p> -->
                  </div>
                </div>
              </div>
              <button class="profile-edit-btn" @click="profileEdit = true">
                {{ $store.state.translations["main.change"] }}
              </button>
            </div>
            <div class="personal-info-card">
              <div class="personal-info-card-header2">
                <h3>{{ $store.state.translations["profile.text-1"] }}</h3>

                <span class="personal-info-edit-btn"> </span>
              </div>
              <div class="personal-info-card-body2">
                <p>{{ $store.state.translations["profile.text-2"] }}</p>

                <span>
                  <a-switch default-checked @change="onChange" /><span
                    class="sms-title"
                    >{{ $store.state.translations["profile.by-sms"] }}</span
                  ></span
                >
              </div>
            </div>
          </div>
          <a-form-model ref="ruleForm" :model="form" :rules="rules" v-if="profileEdit">
            <div class="personal-info-card">
              <div
                class="personal-info-card-header2 d-flex align-items-center justify-content-between"
              >
                <h3>{{ $store.state.translations["profile.change-info"] }}</h3>
                <div class="d-flex web_edit_btns">
                  <span class="personal-info-colse-btn" @click="profileEdit = false"
                    ><span v-html="close"></span>
                    {{ $store.state.translations["product.close"] }}</span
                  >
                  <span class="personal-info-save-btn" @click="submitForm()"
                    ><span v-html="save"></span>
                    {{ $store.state.translations["profile.save"] }}</span
                  >
                </div>
              </div>
              <div class="personal-info-card-body2">
                <h4 class="form-title">
                  {{ $store.state.translations["profile.personal"] }}
                </h4>
                <div class="form-grid-3">
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.form-name']"
                    prop="name"
                  >
                    <a-input
                      v-model="form.name"
                      :placeholder="`${$store.state.translations['profile.form-name']}...`"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.last-name']"
                    prop="last_name"
                  >
                    <a-input
                      v-model="form.last_name"
                      :placeholder="`${$store.state.translations['profile.last-name']}...`"
                    />
                  </a-form-model-item>
                  <span></span>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.phone-number']"
                  >
                    <input
                      type="text"
                      class="w-100 ant-input"
                      v-model="form.phone_number"
                      v-mask="'+998 ## ### ## ##'"
                      placeholder="+998 __ ___ __ __"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.form-email']"
                  >
                    <a-input
                      v-model="form.email"
                      :placeholder="$store.state.translations['profile.form-email']"
                    />
                  </a-form-model-item>
                </div>
                <!-- <h4 class="form-title">Manzil</h4>
                <div class="form-grid-3">
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Viloyat yoki shahar"
                    :class="{ 'select-placeholder': form.region_id == '' }"
                  >
                    <a-select
                      class="checkout-select"
                      v-model="form.region_id"
                      placeholder="Viloyatni tanlang"
                    >
                      <a-select-option
                        v-for="(region, index) in regions"
                        :key="region?.id"
                      >
                        {{ region?.name }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Tuman"
                    :class="{ 'select-placeholder': form.district_id == '' }"
                  >
                    <a-select
                      class="checkout-select"
                      v-model="form.district_id"
                      placeholder="Tuman"
                      :disabled="cities?.length == 0"
                    >
                      <a-select-option v-for="(city, index) in cities" :key="city?.id">
                        {{ city?.name }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Ko’cha va uy raqamingiz"
                  >
                    <a-input v-model="form.address" placeholder="Adress" />
                  </a-form-model-item>
                </div> -->
                <h4 class="form-title">
                  {{ $store.state.translations["profile.password-title"] }}
                </h4>
                <div class="form-grid-3" v-if="$store.state.profile.password_updated">
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.password']"
                  >
                    <a-input-password
                      v-model="form.current_password"
                      :placeholder="$store.state.translations['profile.password']"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.new-password']"
                  >
                    <a-input-password
                      v-model="form.password"
                      :placeholder="$store.state.translations['profile.new-password']"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.repeat-password']"
                    :class="{ password_repeat_error: passwordConfirmationError }"
                  >
                    <a-input-password
                      v-model="form.password_confirmation"
                      :placeholder="$store.state.translations['profile.repeat-password']"
                    />
                  </a-form-model-item>
                </div>
                <div class="form-grid-3" v-else>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.new-password']"
                  >
                    <a-input-password
                      v-model="form.password"
                      :placeholder="$store.state.translations['profile.new-password']"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    :label="$store.state.translations['profile.repeat-password']"
                    :class="{ password_repeat_error: passwordConfirmationError }"
                  >
                    <a-input-password
                      v-model="form.password_confirmation"
                      :placeholder="$store.state.translations['profile.repeat-password']"
                    />
                  </a-form-model-item>
                </div>
              </div>
              <div class="mobile_edit_btns">
                <span class="personal-info-colse-btn" @click="profileEdit = false"
                  ><span v-html="close"></span>
                  {{ $store.state.translations["product.close"] }}</span
                >
                <span class="personal-info-save-btn" @click="submitForm()"
                  ><span v-html="save"></span>
                  {{ $store.state.translations["profile.save"] }}</span
                >
              </div>
            </div>
          </a-form-model>
          <!-- <div class="personal-info-banner" v-if="!profileEdit">
            <h4>Sizning Diskoinlaringiz soni</h4>
            <p>
              dustry. Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambleddustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <nuxt-link :to="localePath('/')">Moree about Dicoins</nuxt-link>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileMenu from "../../components/profile-menu.vue";

export default {
  middleware: "auth",
  data() {
    return {
      skeleton: true,
      profileEdit: false,
      last_password: "",
      edit: require("../../assets/svg/Edit.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      save: require("../../assets/svg/Stroke 3.svg?raw"),
      close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.66699 6.64648L17.333 17.3105M6.66699 17.3105L17.333 6.64648" stroke="url(#paint0_linear_2584_34453)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_2584_34453" x1="6.66699" y1="17.3105" x2="6.66699" y2="6.64648" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f5363e"/>
      <stop offset="1" stop-color="#f5363e"/>
    </linearGradient>
  </defs>
</svg>`,
      form: {
        name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        current_password: "",
        phone_number: "",
        address: "",
        postcode: "",
        region_id: "",
        district_id: "",
        email: "",
      },
      regions: [],
      rules: {
        name: [{ required: true, message: "This field is required", trigger: "blur" }],
      },
      profile: {},
      cities: {},
      passwordConfirmationError: false,
    };
  },
  computed: {
    checkAuth() {
      return this.$store.state.auth;
    },
  },
  async mounted() {
    this.__GET_PROFILE_INFO();
    this.__GET_REGIONS();
  },
  methods: {
    async __GET_PROFILE_INFO() {
      try {
        this.skeleton = true;
        const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
        this.profile = profileData?.user;
        this.form = {
          name: this.profile.name ? this.profile.name : "",
          last_name: this.profile.surname ? this.profile.surname : "",
          address: this.profile.address ? this.profile.address : "",
          postcode: this.profile.postcode ? this.profile.postcode : "",
          email: this.profile.email ? this.profile.email : "",
          phone_number: this.profile.login ? `+${this.profile.login}` : "",
          region_id: this.profile.region_id ? this.profile.region_id : "",
          district_id: this.profile.district_id ? this.profile.district_id : "",
        };
        this.skeleton = false;
      } catch (e) {
        if (e.response.status == 401) this.$store.dispatch("logout");
      }
    },
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions", {
        headers: { lang: this.$i18n.locale },
      });
      this.regions = data?.regions;
    },
    async __EDIT_PROFILE_INFO(dataForm) {
      try {
        const data = await this.$store.dispatch("fetchAuth/putProfileInfo", dataForm);
        this.profileEdit = false;
        this.$notification.success({
          message: "Success",
          description: "Successful changed",
        });
        this.__GET_PROFILE_INFO();
      } catch (e) {}
    },
    submitForm() {
      if (!this.form.password) {
        this.$notification.error({
          message: "Error",
          description: "Password is required",
        });
      }
      if (
        !this.$store.state.profile.password_updated &&
        this.form.password != this.form.password_confirmation
      ) {
        this.passwordConfirmationError = true;
      } else {
        const data = {
          ...this.form,
          phone_number: this.form.phone_number.split(" ").join("").replace("+", ""),
        };
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.passwordConfirmationError = false;
            this.__EDIT_PROFILE_INFO(data);
          } else {
            return false;
          }
        });
      }
    },
    onChange(checked) {},
  },
  watch: {
    checkAuth(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
    "form.region_id"(val) {
      this.cities = this.regions.find((item) => item.id == val)?.districts;
    },
  },
  components: { ProfileMenu },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
@import "../../assets/css/pages/checkout.css";
.ant-form-explain {
  display: none;
}
.password_repeat_error input {
  border: 1px solid #ffc0c0 !important;
}
</style>
