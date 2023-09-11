<template lang="html">
  <div class="about-page">
    <div class="container_xl">
      <div class="banner">
        <img src="../assets/images/Frame 1000006088.png" alt="" />
      </div>
      <ul class="tabs">
        <li
          class="tab"
          :class="{ active: activeTab == 'delivery' }"
          @click="scrollElement('delivery')"
        >
          Yetkazib berish
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'b2b' }"
          @click="scrollElement('b2b')"
        >
          B2B savdo haqida
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'working' }"
          @click="scrollElement('working')"
        >
          Diskontda ishlash
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'tradeNation' }"
          @click="scrollElement('tradeNation')"
        >
          Diskontda Nasiya savdo
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'warranty' }"
          @click="scrollElement('warranty')"
        >
          Maxsulotlarga kafolat
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'returnProduct' }"
          @click="scrollElement('returnProduct')"
        >
          Maxsulotlarni kaytarish
        </li>
        <li
          class="tab"
          :class="{ active: activeTab == 'faqs' }"
          @click="scrollElement('faqs')"
        >
          Ko’p so'raladigan savollar
        </li>
      </ul>
      <div class="block1" id="delivery">
        <div class="left">
          <h4 class="block-title">Yetkazib berish</h4>
          <p class="block-text">
            Apple’da yangi maxsulotlarni kutib oling. Bu gal apple siz va bizga bir nechta
            ushbu yangi devayslarni birinchilardan bo’lib sotib olishingiz mumkin
          </p>
          <div class="grid">
            <div class="block1-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M33.6673 16.9997C33.6673 26.2044 26.2054 33.6663 17.0007 33.6663C7.79591 33.6663 0.333984 26.2044 0.333984 16.9997C0.333984 7.79493 7.79591 0.333008 17.0007 0.333008C26.2054 0.333008 33.6673 7.79493 33.6673 16.9997Z"
                  fill="#06858C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4348 11.0134C24.9797 11.4372 25.0779 12.2225 24.654 12.7675L17.9757 21.3539C16.9362 22.6904 14.9808 22.8639 13.7223 21.7312L9.49779 17.9292C8.98465 17.4674 8.94305 16.677 9.40488 16.1639C9.8667 15.6507 10.6571 15.6091 11.1702 16.0709L15.3947 19.873C15.5745 20.0348 15.8538 20.01 16.0023 19.8191L22.6806 11.2326C23.1045 10.6877 23.8898 10.5895 24.4348 11.0134Z"
                  fill="#06858C"
                />
              </svg>
              <p>Мы не тратим на рекламу огромные суммы, исключая лишнюю наценку</p>
            </div>
            <div class="block1-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M33.6673 16.9997C33.6673 26.2044 26.2054 33.6663 17.0007 33.6663C7.79591 33.6663 0.333984 26.2044 0.333984 16.9997C0.333984 7.79493 7.79591 0.333008 17.0007 0.333008C26.2054 0.333008 33.6673 7.79493 33.6673 16.9997Z"
                  fill="#06858C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4348 11.0134C24.9797 11.4372 25.0779 12.2225 24.654 12.7675L17.9757 21.3539C16.9362 22.6904 14.9808 22.8639 13.7223 21.7312L9.49779 17.9292C8.98465 17.4674 8.94305 16.677 9.40488 16.1639C9.8667 15.6507 10.6571 15.6091 11.1702 16.0709L15.3947 19.873C15.5745 20.0348 15.8538 20.01 16.0023 19.8191L22.6806 11.2326C23.1045 10.6877 23.8898 10.5895 24.4348 11.0134Z"
                  fill="#06858C"
                />
              </svg>
              <p>Мы не тратим на рекламу огромные суммы, исключая лишнюю наценку</p>
            </div>
            <div class="block1-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M33.6673 16.9997C33.6673 26.2044 26.2054 33.6663 17.0007 33.6663C7.79591 33.6663 0.333984 26.2044 0.333984 16.9997C0.333984 7.79493 7.79591 0.333008 17.0007 0.333008C26.2054 0.333008 33.6673 7.79493 33.6673 16.9997Z"
                  fill="#06858C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4348 11.0134C24.9797 11.4372 25.0779 12.2225 24.654 12.7675L17.9757 21.3539C16.9362 22.6904 14.9808 22.8639 13.7223 21.7312L9.49779 17.9292C8.98465 17.4674 8.94305 16.677 9.40488 16.1639C9.8667 15.6507 10.6571 15.6091 11.1702 16.0709L15.3947 19.873C15.5745 20.0348 15.8538 20.01 16.0023 19.8191L22.6806 11.2326C23.1045 10.6877 23.8898 10.5895 24.4348 11.0134Z"
                  fill="#06858C"
                />
              </svg>
              <p>Мы не тратим на рекламу огромные суммы, исключая лишнюю наценку</p>
            </div>
            <div class="block1-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M33.6673 16.9997C33.6673 26.2044 26.2054 33.6663 17.0007 33.6663C7.79591 33.6663 0.333984 26.2044 0.333984 16.9997C0.333984 7.79493 7.79591 0.333008 17.0007 0.333008C26.2054 0.333008 33.6673 7.79493 33.6673 16.9997Z"
                  fill="#06858C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4348 11.0134C24.9797 11.4372 25.0779 12.2225 24.654 12.7675L17.9757 21.3539C16.9362 22.6904 14.9808 22.8639 13.7223 21.7312L9.49779 17.9292C8.98465 17.4674 8.94305 16.677 9.40488 16.1639C9.8667 15.6507 10.6571 15.6091 11.1702 16.0709L15.3947 19.873C15.5745 20.0348 15.8538 20.01 16.0023 19.8191L22.6806 11.2326C23.1045 10.6877 23.8898 10.5895 24.4348 11.0134Z"
                  fill="#06858C"
                />
              </svg>
              <p>Мы не тратим на рекламу огромные суммы, исключая лишнюю наценку</p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/images/AdobeStock_366164734 1.png" alt="" />
        </div>
      </div>
      <div class="block2" id="b2b">
        <h2 class="block-title">B2B savdo haqida</h2>
        <p class="block-text">
          Texnologiya rivojlanib borar ekan, B2B munosabatlari o'sishda davom etadi va
          biznes uchun yangi imkoniyatlar va muammolarni yaratadi. B2B savdo hunisini
          tushunish mijozlarga yo'naltirilganlik va raqobatdosh ustunliklarni saqlab
          qolish uchun ajoyib yondashuv bo'lishi mumkin.
        </p>

        <img src="../assets/images/AdobeStock_573155258 1.png" alt="" />
        <p class="block-text">
          Mijozlar bilan ishlash hech qachon oson emas, ayniqsa B2B kontekstida; shuning
          uchun sizga moslama kerak bo'ladi B2B savdo huni. B2C-dan farqli o'laroq,
          mijozlar ko'proq emotsional murojaat qiladilar va B2B Sotish hunilari ancha
          murakkabroq bo'lib, xarid qilish to'g'risida qaror qabul qilishda yanada oqilona
          va qiymat va ROIga yo'naltirilgan bo'lishi mumkin.
        </p>
        <p class="block-text">
          Texnologiya rivojlanib borar ekan, B2B munosabatlari o'sishda davom etadi va
          biznes uchun yangi imkoniyatlar va muammolarni yaratadi. B2B savdo hunisini
          tushunish mijozlarga yo'naltirilganlik va raqobatdosh ustunliklarni saqlab
          qolish uchun ajoyib yondashuv bo'lishi mumkin.
        </p>
      </div>
      <div class="block3" id="working">
        <div class="left">
          <h2 class="block-title">Diskontda ishlash</h2>
          <p class="block-text">
            Хотите быть частью команды Diskont? Расскажите почему вы нам подходите и
            отправляйте свое резюме
          </p>
          <div class="lists">
            <ul class="list">
              <h6>Магазин вакансий</h6>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
            </ul>
            <ul class="list">
              <h6>ИТ-вакансии</h6>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
              <li>
                <span v-html="icon"></span>
                <p class="block-text">Бухгалтерия и финансы</p>
              </li>
            </ul>
          </div>
          <div class="btns">
            <button>Хочу работать в Diskont</button>
            <a href="#">Telegram bot @diskont_jobs</a>
          </div>
        </div>
        <div class="right">
          <div class="block3-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="56"
              viewBox="0 0 54 56"
              fill="none"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0287 0.618324C20.9758 1.18662 21.283 2.41514 20.7147 3.3623L12.7147 16.6956C12.1464 17.6428 10.9179 17.9499 9.97071 17.3816C9.02355 16.8133 8.71641 15.5848 9.28471 14.6377L17.2847 1.30432C17.853 0.357158 19.0815 0.0500278 20.0287 0.618324Z"
                fill="#06858C"
              />
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.0287 17.3816C43.0815 17.9499 41.853 17.6428 41.2847 16.6956L33.2847 3.3623C32.7164 2.41514 33.0235 1.18662 33.9707 0.618324C34.9179 0.0500274 36.1464 0.357158 36.7147 1.30432L44.7147 14.6377C45.283 15.5848 44.9758 16.8133 44.0287 17.3816Z"
                fill="#06858C"
              />
              <path
                opacity="0.4"
                d="M49.0859 47.1546C48.073 52.1109 43.7489 55.6667 38.7346 55.6667H15.2667C10.2524 55.6667 5.9283 52.1109 4.91543 47.1546L0.555643 25.8213C-0.796845 19.2033 4.2114 13 10.9069 13L43.0944 13C49.7899 13 54.7981 19.2033 53.4457 25.8213L49.0859 47.1546Z"
                fill="#06858C"
              />
              <path
                d="M43.0944 13L10.9069 13C4.94565 13 0.321885 17.9174 0.334008 23.6667H53.6673C53.6794 17.9174 49.0556 13 43.0944 13Z"
                fill="#06858C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 32.333C20.1046 32.333 21 33.2284 21 34.333L21 44.9997C21 46.1042 20.1046 46.9997 19 46.9997C17.8954 46.9997 17 46.1042 17 44.9997L17 34.333C17 33.2284 17.8954 32.333 19 32.333Z"
                fill="#06858C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35 32.333C36.1046 32.333 37 33.2284 37 34.333L37 44.9997C37 46.1042 36.1046 46.9997 35 46.9997C33.8954 46.9997 33 46.1042 33 44.9997L33 34.333C33 33.2284 33.8954 32.333 35 32.333Z"
                fill="#06858C"
              />
            </svg>
            <div>
              <h1>7 млн+</h1>
              <p>Количество рабочих</p>
            </div>
          </div>
          <div class="block3-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="38"
              viewBox="0 0 54 38"
              fill="none"
            >
              <circle
                opacity="0.4"
                cx="15.0007"
                cy="9.66667"
                r="6.66667"
                fill="#06858C"
              />
              <circle
                opacity="0.4"
                cx="39.0007"
                cy="9.66667"
                r="6.66667"
                fill="#06858C"
              />
              <ellipse opacity="0.4" cx="27" cy="29.666" rx="16" ry="8" fill="#06858C" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.9869 34.9657C41.4848 33.5545 43.0011 31.6988 43.0011 29.666C43.0011 26.5007 39.3246 23.7648 33.9902 22.4676C35.8768 21.9563 38.0378 21.666 40.3345 21.666C47.6983 21.666 53.6678 24.6508 53.6678 28.3327C53.6678 32.0146 47.6983 34.9993 40.3345 34.9993C39.8796 34.9993 39.43 34.988 38.9869 34.9657Z"
                fill="#06858C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0112 22.4675C14.6767 23.7647 11 26.5007 11 29.666C11 31.6988 12.5163 33.5545 15.0143 34.9658C14.5713 34.988 14.122 34.9993 13.6673 34.9993C6.30352 34.9993 0.333984 32.0146 0.333984 28.3327C0.333984 24.6508 6.30352 21.666 13.6673 21.666C15.9638 21.666 18.1247 21.9563 20.0112 22.4675Z"
                fill="#06858C"
              />
              <circle cx="27" cy="8.33301" r="8" fill="#06858C" />
            </svg>
            <div>
              <h1>7 млн+</h1>
              <p>пользователей</p>
            </div>
          </div>
          <div class="block3-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="54"
              viewBox="0 0 48 54"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.1805 37.4071C38.1394 32.324 42.6673 24.7104 42.6673 18.6187C42.6673 8.5198 34.31 0.333008 24.0007 0.333008C13.6913 0.333008 5.33398 8.5198 5.33398 18.6187C5.33398 24.7104 9.86187 32.324 14.8208 37.4071C18.083 40.7509 21.5317 42.9997 24.0007 42.9997C26.4696 42.9997 29.9183 40.7509 33.1805 37.4071ZM24.0013 24.3327C26.9468 24.3327 29.3346 21.9449 29.3346 18.9993C29.3346 16.0538 26.9468 13.666 24.0013 13.666C21.0558 13.666 18.668 16.0538 18.668 18.9993C18.668 21.9449 21.0558 24.3327 24.0013 24.3327Z"
                fill="#07757E"
              />
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8146 38.9805C4.29977 40.411 0 42.8711 0 45.6661C0 50.0843 10.7452 53.6661 24 53.6661C37.2548 53.6661 48 50.0843 48 45.6661C48 42.8713 43.7007 40.4113 37.1864 38.9807C36.809 39.3998 36.4276 39.8069 36.0437 40.2004C34.2509 42.0381 32.3245 43.6626 30.4031 44.8556C28.5717 45.9928 26.3286 46.9997 24.0007 46.9997C21.6727 46.9997 19.4296 45.9928 17.5982 44.8556C15.6768 43.6626 13.7504 42.0381 11.9576 40.2004C11.5736 39.8068 11.1921 39.3997 10.8146 38.9805Z"
                fill="#07757E"
              />
            </svg>
            <div>
              <h1>14+</h1>
              <p>наши филиалы</p>
            </div>
          </div>
        </div>
      </div>
      <div class="blocks-grid">
        <div class="block4" id="warranty">
          <div class="left">
            <img src="../assets/images/image 50959.png" alt="" />
          </div>
          <div class="right">
            <h2 class="block-title">Maxsulotlarga kafolat</h2>
            <p class="block-text">
              Mijozlar bilan ishlash hech qachon oson emas, ayniqsa B2B kontekstida;
              shuning uchun sizga moslama kerak bo'ladi B2B savdo huni. B2C-dan farqli
              o'laroq, mijozlar ko'proq emotsional murojaat qiladilar va B2B Sotish
              hunilari ancha murakkabroq bo'lib, xarid qilish to'g'risida qaror qabul
              qilishda yanada oqilona va qiymat va ROIga yo'naltirilgan bo'lishi mumkin.
            </p>
            <p class="block-text">
              Texnologiya rivojlanib borar ekan, B2B munosabatlari o'sishda davom etadi va
              biznes uchun yangi imkoniyatlar va muammolarni yaratadi. B2B savdo hunisini
              tushunish mijozlarga yo'naltirilganlik va raqobatdosh ustunliklarni saqlab
              qolish uchun ajoyib yondashuv bo'lishi mumkin.
            </p>
          </div>
        </div>
        <div class="block5" id="tradeNation">
          <div class="left">
            <h2 class="block-title">Diskontda Nasiya savdo</h2>
            <p class="block-text">
              Mijozlar bilan ishlash hech qachon oson emas, ayniqsa B2B kontekstida;
              shuning uchun sizga moslama kerak bo'ladi B2B savdo huni. B2C-dan farqli
              o'laroq, mijozlar ko'proq emotsional murojaat qiladilar va B2B Sotish
              hunilari ancha murakkabroq bo'lib, xarid qilish to'g'risida qaror qabul
              qilishda yanada oqilona va qiymat va ROIga yo'naltirilgan bo'lishi mumkin.
            </p>
            <p class="block-text">
              Texnologiya rivojlanib borar ekan, B2B munosabatlari o'sishda davom etadi va
              biznes uchun yangi imkoniyatlar va muammolarni yaratadi. B2B savdo hunisini
              tushunish mijozlarga yo'naltirilganlik va raqobatdosh ustunliklarni saqlab
              qolish uchun ajoyib yondashuv bo'lishi mumkin.
            </p>
          </div>
          <div class="right">
            <img src="../assets/images/BenefitsBlock_600-300-31102022 1.png" alt="" />
          </div>
        </div>
        <div class="block6" id="returnProduct">
          <div class="left">
            <img src="../assets/images/image 50957.png" alt="" />
          </div>
          <div class="right">
            <h2 class="block-title">Maxsulotlarni qaytarish</h2>
            <p class="block-text">
              Mijozlar bilan ishlash hech qachon oson emas, ayniqsa B2B kontekstida;
              shuning uchun sizga moslama kerak bo'ladi B2B savdo huni. B2C-dan farqli
              o'laroq, mijozlar ko'proq emotsional murojaat qiladilar va B2B Sotish
              hunilari ancha murakkabroq bo'lib, xarid qilish to'g'risida qaror qabul
              qilishda yanada oqilona va qiymat va ROIga yo'naltirilgan bo'lishi mumkin.
            </p>
            <p class="block-text">
              Texnologiya rivojlanib borar ekan, B2B munosabatlari o'sishda davom etadi va
              biznes uchun yangi imkoniyatlar va muammolarni yaratadi. B2B savdo hunisini
              tushunish mijozlarga yo'naltirilganlik va raqobatdosh ustunliklarni saqlab
              qolish uchun ajoyib yondashuv bo'lishi mumkin.
            </p>
          </div>
        </div>
      </div>
      <div class="faqs" id="faqs">
        <h1>Ko’p so'raladigan savollar</h1>
        <div class="grid">
          <div>
            <div
              class="drop"
              @click="dropAction(faq?.id)"
              v-for="faq in chunkIntoN(faqs, 2)[0]"
              :key="faq?.id"
            >
              <div class="drop-body">
                <div class="head">
                  <h5>{{ faq?.question }}</h5>
                </div>
                <div class="text" :class="{ inactive: dropActive != faq?.id }">
                  <p>
                    {{ faq?.answer }}
                  </p>
                </div>
              </div>
              <div class="drop-icon d-flex align-items-start justify-content-center">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10L12 14L17 10"
                      stroke="#1F8A70"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
              </div>
            </div>
          </div>
          <div>
            <div
              class="drop"
              @click="dropAction(faq?.id)"
              v-for="faq in chunkIntoN(faqs, 2)[1]"
              :key="faq?.id"
            >
              <div class="drop-body">
                <div class="head">
                  <h5>{{ faq?.question }}</h5>
                </div>
                <div class="text" :class="{ inactive: dropActive != faq?.id }">
                  <p>
                    {{ faq?.answer }}
                  </p>
                </div>
              </div>
              <div class="drop-icon d-flex align-items-start justify-content-center">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10L12 14L17 10"
                      stroke="#1F8A70"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropActive: null,
      activeTab: "delivery",
      icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5Z"
                    fill="#06858C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4605 6.90802C14.7874 7.16232 14.8463 7.63353 14.592 7.96049L10.585 13.1123C9.9613 13.9143 8.78809 14.0183 8.03296 13.3387L5.49828 11.0575C5.1904 10.7804 5.16544 10.3062 5.44254 9.99831C5.71963 9.69043 6.19385 9.66547 6.50173 9.94256L9.03641 12.2238C9.14429 12.3209 9.31189 12.306 9.40099 12.1914L13.408 7.03958C13.6623 6.71262 14.1335 6.65372 14.4605 6.90802Z"
                    fill="#06858C"
                  /></svg
                >`,
    };
  },
  async asyncData({ $axios, store, i18n }) {
    const [faqData] = await Promise.all([
      store.dispatch("fetchFaqs/getFaq", {
        headers: {
          lang: i18n.locale,
        },
      }),
    ]);
    const faqs = faqData?.faq;
    return {
      faqs,
    };
  },
  methods: {
    chunkIntoN(arr, n) {
      const size = Math.ceil(arr.length / n);
      return Array.from({ length: n }, (v, i) => arr.slice(i * size, i * size + size));
    },
    scrollElement(id) {
      this.activeTab = id;
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    },
    dropAction(id) {
      if (this.dropActive === id) {
        this.dropActive = null;
      } else {
        this.dropActive = id;
      }
    },
  },
  watch: {
    "$route.path"(val) {},
  },
};
</script>
<style lang="css" scoped>
.about-page {
  padding-top: 40px;
}
.tabs {
  margin-top: 80px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.tabs li {
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 600px;
  background: #f9f9f9;
  color: #808080;
  font-family: var(--SB_400);
  white-space: nowrap;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 24px */
}

.block-title {
  color: var(--diskont-toq-yashil, #09454f);
  font-family: var(--SB_600);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  margin-bottom: 16px;
}
.block-text {
  color: #363636;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.block1 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #ebebeb;
  background: #fff;
  overflow: hidden;
}
.block1-card {
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #fcfffe;
  position: relative;
  z-index: 10;
}
.block1 .grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
}
.block1-card p {
  margin-top: 24px;
  color: #676767;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
}
.block1 .right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.block1 .right img {
  position: absolute;
  z-index: 1;
}
.block2 {
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 120px;
}
.block2 p {
  color: #363636;
}
.block2 img {
  margin: 40px 0;
  width: 100%;
}
.block3 {
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 390px;
  grid-gap: 40px;
}
.block3 .block3 p {
  color: #363636;
}
.block3 .right {
  border-radius: 24px;
  border: 1px solid #ebebeb;
  background: #fcfffe;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.block3 .lists {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
}
.block3 .lists .list h6 {
  color: var(--diskont-toq-yashil, #09454f);
  font-family: var(--SB_5600);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.block3 .lists .list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.block3 .lists .list li {
  display: flex;
  gap: 8px;
}
.block3-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-gap: 24px;
}
.block3-card h1 {
  color: var(--diskont-yashil, #06858c);
  font-family: var(--SB_700);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  text-transform: uppercase;
}
.block3-card p {
  color: #363636;
  font-family: var(--SB_400);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 8px;
  /* 30px */
}
.block3 .btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-top: 48px;
}
.block3 .btns button,
.block3 .btns a {
  height: 53px;
  border-radius: 11.201px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--SB_500);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.401px; /* 140.009% */
  border: none;
}
.block3 .btns button {
  background: var(--yashil, #1f8a70);
  color: #fff;
}
.block3 .btns a {
  color: var(--diskont-yashil, #06858c);
  border: 1px solid #ebebeb;
  background: #fcfffe;
}
.block4 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 120px;
  padding: 88px;
  border-radius: 24px;
  border: 1px solid #ebebeb;
  background: #fcfffe;
  padding-bottom: 0;
}
.block5 {
  padding: 80px;
  border-radius: 24px;
  border: 1px solid #ebebeb;
  background: #fcfffe;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-gap: 100px;
}
.block6 {
  /* padding: 80px; */
  border-radius: 24px;
  border: 1px solid #ebebeb;
  background: #fcfffe;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  grid-gap: 100px;
}
.block6 .right {
  padding: 80px 80px 80px 0;
}
.block4 .left {
  display: flex;
  justify-content: center;
  position: relative;
}
.block4 p,
.block5 p,
.block6 p {
  color: #363636;
  margin-bottom: 16px;
}
.block6 .left {
  position: relative;
}

.drop {
  padding: 22px 32px;
  border-radius: 16px;
  background: #f9f9f9;
  display: grid;
  grid-template-columns: 1fr 32px;
  grid-gap: 32px;
  cursor: pointer;
}
.drop .head {
  cursor: pointer;
}

.drop .head:hover .text {
  height: 0;
}
.drop .text {
  overflow: hidden;
  transition: 0.3s linear;
  max-height: 300px;
}
.drop .inactive {
  max-height: 0;
  transition: 0.3s linear;
}
.drop .head h5 {
  color: var(--black, #020105);
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.drop .text p {
  color: var(--grey-80, #353437);
  font-family: var(--SB_400);
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
  margin-top: 12px;
}
.drop span {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3e6e5;
}
.faqs {
  margin-top: 120px;
  margin-bottom: 120px;
}
.faqs h1 {
  color: var(--diskont-toq-yashil, #09454f);
  font-family: var(--SB_500);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 52px */
  margin-bottom: 32px;
}
.faqs .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
}

.faqs .grid > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blocks-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.tabs .active {
  color: var(--diskont-yashil, #06858c);
  background: #e9fcfb;
}

@media (max-width: 768px) {
  .tabs {
    margin-top: 24px;
    gap: 24px;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
  .banner {
    height: 124px;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
  }
  .banner img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .tabs li {
    cursor: pointer;
    padding: 8px 16px;
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .block1 {
    grid-template-columns: 1fr;
    margin-top: 40px;
    padding: 16px;
  }
  .block1 .grid {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
  .block1 .right {
    height: 310px;
  }
  .block1 .right img {
    height: 100%;
  }
  .block1 .block1-card {
    display: flex;
    gap: 16px;
    padding: 16px;
  }
  .block1 .block1-card p {
    margin-top: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .block-title {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
  }
  .block-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .block2 {
    margin-top: 80px;
  }
  .block3 {
    margin-top: 80px;
    grid-template-columns: 1fr;
  }
  .block3 .right {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
  .block3 .lists {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
  .block3 .lists .list h6 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .block3 .lists .list {
    gap: 10px;
  }
  .block3 .btns {
    grid-template-columns: 1fr;
    margin-top: 24px;
    grid-gap: 8px;
  }
  .block3 .btns button,
  .block3 .btns a {
    height: 47px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.401px;
    border-radius: 8px;
  }
  .block3-card h1 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 21.6px */
    text-transform: uppercase;
  }
  .block3-card p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .block3-card {
    grid-template-columns: 40px 1fr;
    grid-gap: 8px;
  }
  .block4,
  .block5 {
    padding: 16px;
    grid-template-columns: 1fr;
  }
  .block5 .right img {
    width: 100%;
  }
  .block4,
  .block6 {
    display: flex;
    flex-direction: column-reverse;
    gap: 56px;
  }
  .block4 .left {
    display: flex;
    justify-content: center;
  }
  .block4 .left img {
    width: 90%;
  }
  .block5 {
    grid-gap: 24px;
  }
  .block6 .right {
    padding: 16px;
  }
  .block6 .left img {
    width: 100%;
  }
  .block6 {
    gap: 0;
  }
  .faqs {
    margin-top: 80px;
  }
  .faqs h1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 24px;
  }
  .faqs .grid {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
  .faqs .grid > div {
    gap: 8px;
  }
  .drop {
    padding: 16px;
    grid-gap: 18px;
  }
  .drop .head h5 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .drop .text p {
    color: #808080;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
}
</style>
