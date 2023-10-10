<template lang="html">
  <div>
    <!-- chech number -->
    <a-modal
      v-model="visibleCheck"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOk"
    >
      <div class="vmodal-anim-header">
        <img class="shadow-ell-1" src="../../assets/images/Ellipse 57.png" alt="" />
        <img class="shadow-ell-2" src="../../assets/images/Ellipse 59.png" alt="" />
        <h5>{{ $store.state.translations["main.login-register"] }}</h5>
        <span @click="handleOk"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formCheckNumber"
          ref="ruleFormCheckNumber"
          :rules="rulesCheckNumber"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            :label="$store.state.translations['main.your-phone-number']"
            prop="phone_number"
          >
            <span class="position-relative d-flex align-items-center justify-content-end">
              <!-- <span class="position-absolute number-error" v-if="checkNumberError"
                >Raqam noto’g’ri kiritildi</span
              > -->
              <!-- <the-mask
                @keyup.enter="submitCheckNumber()"
                :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
                placeholder="+998 (__) ___ __ __"
              /> -->
              <input
                type="text"
                v-mask="'+998 ## ### ## ##'"
                @keyup.enter="submitCheckNumber()"
                v-model="formCheckNumber.phone_number"
                placeholder="+998 (__) ___ __ __"
              />
            </span>
            <!-- <a-input v-model="form.name" placeholder="Telefon raqamingiz" /> -->
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitCheckNumber()">
        {{ $store.state.translations["main.login-text"] }}
      </div>
      <!-- <div class="vmodal-btn-outline" @click="visibleLogin = true">Manzilni qo’shish</div> -->
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- chech number -->
    <!-- check number forget password -->
    <a-modal
      v-model="visibleForgetPass"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkForgetPass"
    >
      <div class="vmodal-anim-header">
        <img class="shadow-ell-1" src="../../assets/images/Ellipse 57.png" alt="" />
        <img class="shadow-ell-2" src="../../assets/images/Ellipse 59.png" alt="" />
        <h5>{{ $store.state.translations["main.login-register"] }}</h5>
        <span @click="handleOkForgetPass"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formCheckNumber"
          ref="ruleFormCheckNumber"
          :rules="rulesCheckNumber"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            :label="$store.state.translations['main.your-phone-number']"
            prop="phone_number"
          >
            <span class="position-relative d-flex align-items-center justify-content-end">
              <!-- <the-mask
                @keyup.enter="submitForgetPass()"
                :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
                placeholder="+998 (__) ___ __ __"
                v-model="formCheckNumber.phone_number"
              /> -->
              <input
                @keyup.enter="submitForgetPass()"
                v-mask="'+998 ## ### ## ##'"
                placeholder="+998 (__) ___ __ __"
                v-model="formCheckNumber.phone_number"
              />
            </span>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitForgetPass()">
        {{ $store.state.translations["main.login-text"] }}
      </div>
      <!-- <div class="vmodal-btn-outline" @click="visibleLogin = true">Manzilni qo’shish</div> -->
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- check number forget password -->
    <!-- login profile  -->
    <a-modal
      v-model="visibleLogin"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkLogin"
    >
      <div class="vmodal-header auth-modal">
        <h5>{{ $store.state.translations["main.login-register"] }}</h5>
        <span @click="handleOkLogin"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formLogin"
          ref="ruleFormLogin"
          :rules="rulesLogin"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0"
            :label="$store.state.translations['main.your-phone-number']"
          >
            <!-- <the-mask
              class="disabled"
              v-model="formLogin.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            /> -->
            <input
              class="disabled"
              v-mask="'+998 ## ### ## ##'"
              v-model="formLogin.phone_number"
              placeholder="+998 (__) ___ __ __"
            />
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            label="Parol"
            :class="{ sms_code_error: loginPassError }"
            prop="password"
          >
            <a-input
              v-model="formLogin.password"
              type="password"
              placeholder="Password"
            />
            <span class="sms_code_error_text" v-if="loginPassError">{{
              $store.state.translations["main.pass-error"]
            }}</span>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitLogin()">
        {{ $store.state.translations["main.login-text"] }}
      </div>
      <div class="vmodal-forget-password" @click="forgetPassword()">
        {{ $store.state.translations["main.forget-pass"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- login profile  -->
    <!-- login width sm  -->
    <a-modal
      v-model="visibleSms"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkSms"
    >
      <div class="vmodal-header auth-modal">
        <h5>{{ $store.state.translations["main.login-register"] }}</h5>
        <span @click="handleOkSms"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formSms"
          ref="ruleFormSms"
          :rules="rulesSms"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0 sms_code_number"
            :label="$store.state.translations['main.your-phone-number']"
            @keyup.enter="submitSms()"
          >
            <!-- <the-mask
              class="disabled"
              @keyup.enter="submitSms()"
              v-model="formSms.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            /> -->
            <input
              class="disabled"
              v-mask="'+998 ## ### ## ##'"
              @keyup.enter="submitSms()"
              v-model="formSms.phone_number"
              placeholder="+998 (__) ___ __ __"
            />
            <span class="change_number" @click="replaceNumber()">{{
              $store.state.translations["main.change"]
            }}</span>
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            :class="{ sms_code_error: smsCodeError }"
            :label="$store.state.translations['main.enter-sms-code']"
            prop="sms_code"
          >
            <a-input
              focus
              @keyup.enter="submitSms()"
              v-model="formSms.sms_code"
              type="text"
              :placeholder="$store.state.translations['main.sms-code-place']"
            />
            <span class="sms_code_error_text" v-if="smsCodeError">{{
              $store.state.translations["main.code-incorrect"]
            }}</span>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitSms()">
        {{ $store.state.translations["main.send-sms-code"] }}
      </div>
      <div class="vmodal-forget-password" @click="again_sms_code()">
        {{ $store.state.translations["main.resend-code"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- login width sm  -->
    <!-- profile user name  -->
    <a-modal
      v-model="visibleName"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkName"
    >
      <div class="vmodal-header auth-modal">
        <h5>{{ $store.state.translations["main.login-register"] }}</h5>
        <span @click="handleOkName"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formName"
          ref="ruleFormName"
          :rules="rulesName"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0"
            :label="$store.state.translations['main.enter-your-name']"
            prop="name"
          >
            <a-input
              v-model="formName.name"
              type="text"
              :placeholder="$store.state.translations['main.enter-your-name']"
            />
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            :label="$store.state.translations['main.your-phone-number']"
          >
            <the-mask
              class="disabled"
              v-model="formName.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            />
            <input
              class="disabled"
              v-mask="'+998 ## ### ## ##'"
              v-model="formName.phone_number"
              placeholder="+998 (__) ___ __ __"
            />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitName()">
        {{ $store.state.translations["main.login-text"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- profile user name  -->
    <!-- access profile register  -->
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5></h5>
        <span @click="handleOkSuccess"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body success-vmodal">
        <nuxt-img format="webp" src="/modal-success.png" alt="" />
        <p>{{ $store.state.translations["main.auth-success-text"] }}</p>
      </div>
      <div class="vmodal-btn" @click="handleOkSuccess()">
        {{ $store.state.translations["main.continue-shopping"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- access profile register  -->
  </div>
</template>
<script>
export default {
  name: "AuthModals",
  props: ["visibleAuth"],
  data() {
    return {
      visibleSuccess: false,
      visibleCheck: false,
      visibleLogin: false,
      visibleSms: false,
      visibleName: false,
      formLogin: {
        phone_number: "",
        password: "",
      },
      formCheckNumber: {
        phone_number: "",
      },
      formName: {
        name: "",
      },
      formSms: {
        phone_number: "",
        sms_code: "",
      },
      rulesLogin: {
        password: [
          {
            required: true,
            message: "Password is required",
            trigger: "change",
          },
        ],
      },
      rulesCheckNumber: {
        phone_number: [
          {
            required: true,
            message: "Number is required",
            trigger: "change",
          },
          { min: 9, message: "Raqam noto’g’ri kiritildi", trigger: "blur" },
        ],
      },
      rulesSms: {
        sms_code: [
          {
            required: true,
            message: "sms code is required",
            trigger: "change",
          },
        ],
      },
      rulesName: {
        name: [
          {
            required: true,
            message: "Name is required",
            trigger: "change",
          },
        ],
      },
      smsCodeError: false,
      loginPassError: false,
      checkNumberError: false,
      visibleForgetPass: false,
      forgetPassStatus: false,
    };
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
    authVisible() {
      return this.$store.state.authVisible;
    },
  },
  methods: {
    forgetPassword() {
      this.formCheckNumber.phone_number =
        this.formCheckNumber.phone_number.length == 9
          ? `998${this.formCheckNumber.phone_number}`
          : this.formCheckNumber.phone_number;
      this.visibleLogin = false;
      this.visibleForgetPass = true;
      this.forgetPassStatus = true;
    },
    targetCategory(obj) {
      this.activeCategory = obj;
    },
    handleOkSuccess() {
      this.visibleSuccess = false;
    },
    handleOk() {
      this.visibleCheck = false;
    },
    handleOkLogin() {
      this.visibleLogin = false;
      this.$store.commit("authVisibleChange", false);
    },
    handleOkSms() {
      this.visibleSms = false;
    },
    handleOkName() {
      this.visibleName = false;
    },
    replaceNumber() {
      this.visibleSms = false;
      this.visibleCheck = true;
    },
    submitCheckNumber() {
      const data = {
        phone_number: this.formCheckNumber.phone_number
          .split(" ")
          .join("")
          .replace("+", ""),
      };
      this.$refs["ruleFormCheckNumber"].validate((valid) => {
        valid ? this.__CHECK_NUMBER(data) : false;
      });
    },
    submitForgetPass() {
      const data = {
        phone_number: this.formCheckNumber.phone_number
          .split(" ")
          .join("")
          .replace("+", ""),
      };
      this.$refs["ruleFormCheckNumber"].validate((valid) => {
        valid ? this.__FORGET_PASSWORD(data) : false;
      });
    },
    submitSms() {
      const data = {
        ...this.formSms,
        phone_number: this.formSms.phone_number.split(" ").join("").replace("+", ""),
      };
      this.formName.phone_number =
        this.formSms.phone_number.length == 9
          ? `998${this.formSms.phone_number}`
          : this.formSms.phone_number;
      this.$refs["ruleFormSms"].validate((valid) => {
        valid ? this.__REGISTER_SMS(data) : false;
      });
    },
    submitLogin() {
      const data = {
        phone_number: this.formLogin.phone_number.split(" ").join("").replace("+", ""),
        password: this.formLogin.password,
      };
      this.$refs["ruleFormLogin"].validate((valid) => {
        if (valid) {
          this.__LOGIN(data);
        } else {
          return false;
        }
      });
    },
    submitName() {
      const data = {
        name: this.formName.name,
      };
      this.$refs["ruleFormName"].validate((valid) => {
        if (valid) {
          this.__PROFILE_NAME(data);
        } else {
          return false;
        }
      });
    },
    async __REGISTER_SMS(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchAuth/postRegisterWithSms",
          formData
        );
        localStorage.setItem("dis_auth_token", data.token);
        try {
          const info = await this.$axios.$get("/profile/me", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
            },
          });
          if (!this.forgetPassStatus && !info?.user?.name) {
            this.visibleName = true;
          } else {
            this.$store.dispatch("profileInfo");
            this.visibleName = false;
            this.visibleSuccess = true;
          }
          this.forgetPassStatus = false;
          this.visibleSms = false;
          this.smsCodeError = false;
        } catch (e) {
          this.visibleName = true;
        }
      } catch (e) {
        // console.log(e);
        if (e.response.status == 422) this.smsCodeError = true;
      }
    },
    // putProfileName
    async __PROFILE_NAME(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/putProfileName", formData);
        this.$store.dispatch("profileInfo");
        this.visibleName = false;
        this.visibleSuccess = true;
      } catch (e) {
        // console.log(e);
      }
    },
    again_sms_code() {
      const data = {
        phone_number: this.formCheckNumber.phone_number
          .split(" ")
          .join("")
          .replace("+", ""),
      };

      this.__FORGET_PASSWORD(data);
    },
    handleOkForgetPass() {
      this.visibleForgetPass = false;
    },
    async __FORGET_PASSWORD(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchAuth/postCheckNumberForget",
          formData
        );
        this.handleOkForgetPass();
        this.visibleSms = true;
        this.formLogin.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
        this.formSms.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
      } catch (e) {
        // console.log(e);
      }
    },
    async __CHECK_NUMBER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postCheckNumber", formData);
        if (data?.authorized) {
          this.visibleLogin = true;
        } else {
          this.visibleSms = true;
        }
        this.formLogin.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
        this.formSms.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
      } catch (e) {
        // console.log(e);
      }
    },
    async __LOGIN(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postLogin", formData);
        localStorage.setItem("dis_auth_token", data.token);
        this.$store.dispatch("profileInfo");
        this.$store.commit("authVisibleChange", false);
        // if (this.$route.name != "basket" && this.targetPage) {
        //   this.$router.push("/profile/personal-info");
        // } else {
        //   this.$router.push("/checkout");
        // }
        this.loginPassError = false;
        this.visibleLogin = false;
      } catch (e) {
        if (e.response.status == 422) {
          this.loginPassError = true;
        }
      }
    },
    async __GET_SEARCH() {
      try {
        const data = await this.$store.dispatch("fetchSearch/getSearch", {
          params: { search: this.search },
          headers: { lang: this.$i18n.locale },
        });
        this.searchProducts = data?.products;
        this.searchCategories = data?.categories;
      } catch (e) {}
    },
  },
  watch: {
    authVisible(val) {
      this.visibleCheck = val;
    },
    visibleSuccess(val) {
      if (val) {
        this.formLogin = {
          phone_number: "",
          password: "",
        };
        this.formCheckNumber = {
          phone_number: "",
        };
        this.formName = {
          name: "",
        };
        this.formSms = {
          phone_number: "",
          sms_code: "",
        };
      }
    },
    routerPath() {
      this.searchBlockHide = false;
      this.formLogin = {
        phone_number: "",
        password: "",
      };
      this.formCheckNumber = {
        phone_number: "",
      };
      this.formName = {
        name: "",
      };
      this.formSms = {
        phone_number: "",
        sms_code: "",
      };
      this.targetPage = false;
      this.catalogMenu = false;

      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    visibleCheck(val) {
      this.$store.commit("authVisibleChange", val);
      if (val) this.visibleLogin = false;
    },
    visibleLogin(val) {
      this.$store.commit("authVisibleChange", val);
      if (val) this.visibleCheck = false;
    },
    visibleSms(val) {
      if (val) this.visibleCheck = false;
    },
  },
};
</script>
<style lang=""></style>
