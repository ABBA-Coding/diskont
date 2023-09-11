<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link :to="localePath('/')">{{
            $store.state.translations["main.home-page"]
          }}</nuxt-link>
          <nuxt-link
            v-if="categoryChilds?.parent?.parent?.slug"
            :to="localePath(`/categories-inner/${categoryChilds?.parent?.parent?.slug}`)"
          >
            {{ categoryChilds?.parent?.parent?.name }}
          </nuxt-link>

          <nuxt-link
            v-if="categoryChilds?.parent?.slug"
            :to="localePath(`/categories-inner/${categoryChilds?.parent?.slug}`)"
          >
            {{ categoryChilds?.parent?.name }}
          </nuxt-link>

          <nuxt-link :to="localePath('/')">
            {{ categoryChilds?.name }}
          </nuxt-link>
        </div>
        <div class="d-flex categories-page-title">
          <MainTitle :title="categoryChilds?.name" class="mb-0" />
          <span
            >{{ products?.length }}
            {{ $store.state.translations["category.product-count"] }}</span
          >
        </div>
        <div class="mobile__filter">
          <button @click="filterHandle = true" class="filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.1818 4.8C12.1818 4.44399 12.2938 4.09598 12.5036 3.79997C12.7133 3.50397 13.0115 3.27326 13.3603 3.13702C13.7092 3.00078 14.093 2.96513 14.4634 3.03459C14.8337 3.10404 15.1738 3.27547 15.4408 3.52721C15.7078 3.77894 15.8897 4.09967 15.9633 4.44884C16.037 4.798 15.9992 5.15992 15.8547 5.48883C15.7102 5.81774 15.4655 6.09886 15.1515 6.29664C14.8376 6.49443 14.4685 6.6 14.0909 6.6C13.5846 6.6 13.099 6.41036 12.741 6.07279C12.383 5.73523 12.1818 5.27739 12.1818 4.8ZM2.63636 5.4H10.2727C10.4415 5.4 10.6034 5.33679 10.7227 5.22426C10.842 5.11174 10.9091 4.95913 10.9091 4.8C10.9091 4.64087 10.842 4.48826 10.7227 4.37574C10.6034 4.26321 10.4415 4.2 10.2727 4.2H2.63636C2.46759 4.2 2.30573 4.26321 2.18639 4.37574C2.06705 4.48826 2 4.64087 2 4.8C2 4.95913 2.06705 5.11174 2.18639 5.22426C2.30573 5.33679 2.46759 5.4 2.63636 5.4ZM6.45455 7.2C6.06067 7.20104 5.67678 7.31693 5.3555 7.53176C5.03423 7.7466 4.79129 8.04987 4.66 8.4H2.63636C2.46759 8.4 2.30573 8.46321 2.18639 8.57573C2.06705 8.68826 2 8.84087 2 9C2 9.15913 2.06705 9.31174 2.18639 9.42426C2.30573 9.53678 2.46759 9.6 2.63636 9.6H4.66C4.77674 9.91132 4.98207 10.1864 5.2535 10.395C5.52494 10.6037 5.85202 10.738 6.19896 10.7831C6.54589 10.8282 6.89932 10.7825 7.22054 10.6509C7.54177 10.5194 7.81842 10.307 8.02022 10.0372C8.22202 9.76727 8.34119 9.45025 8.36469 9.12078C8.38819 8.79131 8.31512 8.4621 8.15347 8.16916C7.99181 7.87623 7.74781 7.63087 7.44816 7.45993C7.14851 7.289 6.80477 7.19907 6.45455 7.2ZM15.3636 8.4H10.2727C10.104 8.4 9.94209 8.46321 9.82275 8.57573C9.70341 8.68826 9.63636 8.84087 9.63636 9C9.63636 9.15913 9.70341 9.31174 9.82275 9.42426C9.94209 9.53678 10.104 9.6 10.2727 9.6H15.3636C15.5324 9.6 15.6943 9.53678 15.8136 9.42426C15.933 9.31174 16 9.15913 16 9C16 8.84087 15.933 8.68826 15.8136 8.57573C15.6943 8.46321 15.5324 8.4 15.3636 8.4ZM7.72727 12.6H2.63636C2.46759 12.6 2.30573 12.6632 2.18639 12.7757C2.06705 12.8883 2 13.0409 2 13.2C2 13.3591 2.06705 13.5117 2.18639 13.6243C2.30573 13.7368 2.46759 13.8 2.63636 13.8H7.72727C7.89605 13.8 8.05791 13.7368 8.17725 13.6243C8.29659 13.5117 8.36364 13.3591 8.36364 13.2C8.36364 13.0409 8.29659 12.8883 8.17725 12.7757C8.05791 12.6632 7.89605 12.6 7.72727 12.6ZM15.3636 12.6H13.34C13.1899 12.1997 12.8945 11.8623 12.5061 11.6474C12.1176 11.4326 11.6611 11.3541 11.2173 11.4259C10.7734 11.4977 10.3708 11.7152 10.0805 12.0398C9.79021 12.3644 9.631 12.7754 9.631 13.2C9.631 13.6246 9.79021 14.0356 10.0805 14.3602C10.3708 14.6848 10.7734 14.9023 11.2173 14.9741C11.6611 15.0459 12.1176 14.9674 12.5061 14.7526C12.8945 14.5377 13.1899 14.2003 13.34 13.8H15.3636C15.5324 13.8 15.6943 13.7368 15.8136 13.6243C15.933 13.5117 16 13.3591 16 13.2C16 13.0409 15.933 12.8883 15.8136 12.7757C15.6943 12.6632 15.5324 12.6 15.3636 12.6Z"
                fill="black"
              /></svg
            >{{ $store.state.translations["category.filters"] }}
          </button>
          <button class="sort" @click="sortHande = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.3 5.83333H14.87L15.045 5.66667L14.87 5.5H15.3C15.3374 5.5 15.3671 5.50409 15.3905 5.50999L15.4452 5.56207C15.4921 5.6068 15.5 5.64498 15.5 5.66667C15.5 5.66683 15.5 5.66698 15.5 5.66714C15.4999 5.68891 15.4918 5.72686 15.4452 5.77126L15.3905 5.82335C15.3671 5.82924 15.3374 5.83333 15.3 5.83333ZM13.82 6.83333H14.33L13.3452 7.77126C13.3057 7.80888 13.285 7.8192 13.2763 7.82288C13.2692 7.82593 13.2497 7.83333 13.2 7.83333C13.1503 7.83333 13.1308 7.82593 13.1236 7.82288C13.115 7.8192 13.0943 7.80888 13.0548 7.77126C13.0079 7.72654 13 7.68835 13 7.66667C13 7.64498 13.0079 7.6068 13.0548 7.56207L13.82 6.83333ZM2.7 5.5H13.42L13.595 5.66667L13.42 5.83333H2.7C2.59652 5.83333 2.55214 5.80204 2.53733 5.78793C2.52471 5.77592 2.5 5.74549 2.5 5.66667C2.5 5.58785 2.52471 5.55742 2.53733 5.5454C2.55214 5.53129 2.59652 5.5 2.7 5.5ZM14.33 4.5H13.82L13.0548 3.77126C13.0079 3.72654 13 3.68835 13 3.66667C13 3.64498 13.0079 3.6068 13.0548 3.56207C13.1417 3.47931 13.2583 3.47931 13.3452 3.56207L14.33 4.5ZM2.60951 12.1767C2.63287 12.1708 2.66257 12.1667 2.7 12.1667H3.13L2.955 12.3333L3.13 12.5H2.7C2.66257 12.5 2.63287 12.4959 2.60951 12.49L2.55483 12.4379C2.50786 12.3932 2.5 12.355 2.5 12.3333C2.5 12.3116 2.50786 12.2735 2.55483 12.2287L2.60951 12.1767ZM4.94517 10.4379L4.18 11.1667H3.67L4.65483 10.2287C4.74172 10.146 4.85828 10.146 4.94517 10.2287C4.99214 10.2735 5 10.3116 5 10.3333C5 10.355 4.99214 10.3932 4.94517 10.4379ZM15.3 12.5H4.58L4.405 12.3333L4.58 12.1667H15.3C15.4035 12.1667 15.4479 12.198 15.4627 12.2121C15.4753 12.2241 15.5 12.2545 15.5 12.3333C15.5 12.4122 15.4753 12.4426 15.4627 12.4546C15.4479 12.4687 15.4035 12.5 15.3 12.5ZM3.67 13.5H4.18L4.94517 14.2287C4.99214 14.2735 5 14.3116 5 14.3333C5 14.355 4.99214 14.3932 4.94517 14.4379C4.90567 14.4756 4.88504 14.4859 4.87635 14.4895C4.86916 14.4926 4.8497 14.5 4.8 14.5C4.7503 14.5 4.73084 14.4926 4.72365 14.4895C4.71496 14.4859 4.69433 14.4756 4.65483 14.4379L3.67 13.5Z"
                fill="black"
                stroke="black"
              /></svg
            >{{ $store.state.translations["category.sorting"] }}
          </button>
        </div>
        <!-- <div>
          <CategoriesTabCarousel>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ayollar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Bolalar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ximoyalangan smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Yengil smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Защищенные смартфоны</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с мощным аккумулятором</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с хорошей камерой</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>

            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ayollar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Bolalar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ximoyalangan smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Yengil smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Защищенные смартфоны</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с мощным аккумулятором</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с хорошей камерой</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
          </CategoriesTabCarousel>
        </div> -->
        <div
          class="mt-4"
          v-if="banners.filter((item) => item.type == 'type1').length > 0"
        >
          <CategoriesInnerBannerCarousel>
            <div
              class="swiper-slide"
              v-for="banner in banners.filter((item) => item.type == 'type1')"
              :key="banner?.id"
            >
              <CategoriesInnerBanner :banner="banner" />
            </div>
          </CategoriesInnerBannerCarousel>
        </div>
      </div>
      <div class="categories-page-inner-grid">
        <div class="categories-filter-list">
          <div>
            <h5>{{ $store.state.translations["main.categories"] }}</h5>
            <div
              v-for="firstCategory in allCategories"
              :key="firstCategory?.id"
              class="categories-list-box"
            >
              <nuxt-link
                :to="localePath(`/categories-inner/${firstCategory?.slug}`)"
                :class="{
                  'active-category': $route.params.index == firstCategory?.slug,
                }"
                class="first-category"
                >{{ firstCategory?.name }}</nuxt-link
              >
              <Transition name="bounce">
                <ul
                  class="categories-list-inner"
                  v-if="
                    (firstCategory?.children.length > 0 &&
                      firstCategory?.slug == $route.params.index) ||
                    firstCategory.children.find(
                      (item) => item.slug == $route.params.index
                    ) ||
                    firstCategory.children.find((item) =>
                      item.children.find((elem) => elem.slug == $route.params.index)
                    )
                  "
                >
                  <li
                    v-for="middCategory in firstCategory?.children"
                    :key="middCategory?.id"
                  >
                    <span
                      :class="{
                        'active-category': $route.params.index == middCategory?.slug,
                      }"
                      @click="
                        $router.push(
                          localePath(`/categories-inner/${middCategory?.slug}`)
                        )
                      "
                      >{{ middCategory?.name }}</span
                    >
                    <div
                      class="child-categories-list"
                      v-if="
                        middCategory?.slug == $route.params.index ||
                        middCategory?.children.find(
                          (item) => item.slug == $route.params.index
                        )
                      "
                    >
                      <nuxt-link
                        v-if="middCategory?.children.length > 0"
                        v-for="childs in middCategory?.children"
                        :to="localePath(`/categories-inner/${childs?.slug}`)"
                        class="mb-0"
                        :class="{
                          'active-category': $route.params.index == childs?.slug,
                        }"
                        :key="childs.id"
                        >{{ childs?.name }}</nuxt-link
                      >
                    </div>
                  </li>
                  <!-- <li>
                  <span
                    :class="{
                      'active-category':
                        $route.params.index ==
                        (!categoryChilds?.parent?.parent?.slug && categoryChilds.slug),
                    }"
                    @click="
                      $router.push(
                        categoryChilds?.parent?.parent.id
                          ? `/categories-inner/${categoryChilds?.parent?.slug}`
                          : `/categories-inner/${categoryChilds?.slug}`
                      )
                    "
                    >{{
                      categoryChilds?.parent?.parent?.name
                        ? categoryChilds?.parent?.name
                        : categoryChilds?.name
                    }}</span
                  >
                  <div class="child-categories-list">
                    <nuxt-link
                      v-if="
                        categoryChilds?.parent?.parent?.name &&
                        categoryChilds?.children.length == 0
                      "
                      :to="`/categories-inner/${categoryChilds?.slug}`"
                      :class="{
                        'active-category': $route.params.index == categoryChilds?.slug,
                      }"
                      >{{ categoryChilds?.name }}</nuxt-link
                    >
                    <nuxt-link
                      v-if="categoryChilds?.children.length > 0"
                      v-for="childs in categoryChilds?.children"
                      :to="`/categories-inner/${childs?.slug}`"
                      :class="{ 'active-category': $route.params.index == childs?.slug }"
                      :key="childs.id"
                      >{{ childs?.name }}</nuxt-link
                    >
                  </div>
                </li> -->
                </ul>
              </Transition>
            </div>

            <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
          </div>
          <div class="categories-atribute-box">
            <div class="filter-range">
              <h5>{{ $store.state.translations["category.price"] }}</h5>

              <a-slider
                range
                :step="10000"
                :max="20000000"
                :min="10000"
                v-model="sliderValue"
                @change="onChangeSlider"
                @afterChange="onAfterChange"
              />
              <div class="filter-slider-inputs">
                <span>
                  <input
                    type="text"
                    v-model="sliderValue[0]"
                    placeholder="от"
                    @keyup.enter="onAfterChange(sliderValue)"
                  />
                  <span></span>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="до"
                    v-model="sliderValue[1]"
                    @keyup.enter="onAfterChange(sliderValue)"
                  />
                  <span></span>
                </span>
              </div>
            </div>
            <div v-for="attribit in attributes" :key="attribit.id">
              <h5 @click="atributDropAction(attribit.id)">
                {{ attribit?.name }}<span v-html="arrow"></span>
              </h5>
              <div
                class="categories-checkbox-list"
                :class="{ 'height-auto': atributDrop.includes(attribit.id) }"
              >
                <a-checkbox
                  v-if="showAllAtr.includes(attribit.id)"
                  class="filter-checkbox"
                  v-for="option in attribit.options"
                  :key="option.id"
                  :checked="$route.query?.attributes?.includes(option.id)"
                  @change="onChange(option.id)"
                  >{{ option?.name }}
                </a-checkbox>
                <a-checkbox
                  v-if="!showAllAtr.includes(attribit.id)"
                  class="filter-checkbox"
                  v-for="option in attribit.options.slice(0, 5)"
                  :key="option.id"
                  :checked="$route.query?.attributes?.includes(option.id)"
                  @change="onChange(option.id)"
                  >{{ option?.name }}
                </a-checkbox>

                <span
                  v-if="!showAllAtr.includes(attribit.id) && attribit.options.length > 5"
                  class="categories-list_show-more"
                  @click="showAllAtributs(attribit.id)"
                  >{{ $store.state.translations["main.show-more"] }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-between w-100">
            <div class="select-filters">
              <span
                v-for="filterItem in filterOptions"
                :key="filterItem.id"
                @click="deleteFilterItem(filterItem.id)"
                >{{ filterItem?.name }}<span v-html="filterX"></span
              ></span>
              <div
                class="clear-filter"
                @click="clearFilter"
                v-if="Object.keys($route.query).length > 1"
              >
                {{ $store.state.translations["category.cleaning-filter"] }}
              </div>
            </div>
            <a-select
              v-model="sort"
              class="categories-filter-select"
              placeholder="Select good person"
              style="width: 252px"
            >
              <a-select-option
                v-for="item in sortItems"
                :key="item?.value"
                :label="item.label"
                :value="item.value"
                >{{ item.label }}
              </a-select-option>
            </a-select>
          </div>
          <div class="categories-card-grid" v-if="loading">
            <div
              class="empty-card"
              v-for="product in [1, 2, 4, 5, 6, 7, 8]"
              :key="product"
            >
              <b-skeleton width="100%" height="100%"></b-skeleton>
            </div>
          </div>
          <div class="categories-card-grid" v-if="products.length > 0 && !loading">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="comments-empty" v-if="products.length == 0 && !loading">
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>{{ $store.state.translations["category.product-not-found"] }}</h4>
          </div>
          <!-- <div class="categories-products-show-more" v-if="products.length > 30">
            {{ $store.state.translations["main.show-more"] }} 44
          </div> -->
          <div class="products-pagination" v-if="totalPage > params.pageSize">
            <a-pagination
              size="small"
              v-model.number="current"
              :total="totalPage"
              :page-size.sync="params.pageSize"
            />
          </div>
        </div>
      </div>
      <div class="categories-page-inner-grid together">
        <span></span>
        <div>
          <div class="categories-page-info" v-html="categoryChilds?.desc"></div>
        </div>
      </div>
    </div>
    <div class="categories-app-banner-container">
      <!--<div class="container_xl">
        <CategoriesAppCard />F
      </div>-->
    </div>

    <div :class="{ show: filterHandle }" class="hidden__filter">
      <div class="filter-list">
        <div>
          <div class="filter__header">
            <h5>Filtr va parametrlar</h5>
            <div @click="filterHandle = false" class="x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M4.2213 4.38536C4.15114 4.31 4.09548 4.22054 4.05751 4.12208C4.01954 4.02362 4 3.91809 4 3.81152C4 3.70495 4.01954 3.59943 4.05751 3.50097C4.09548 3.40251 4.15114 3.31305 4.2213 3.23769C4.29146 3.16233 4.37475 3.10256 4.46642 3.06177C4.55809 3.02099 4.65634 3 4.75556 3C4.85478 3 4.95303 3.02099 5.0447 3.06177C5.13636 3.10256 5.21966 3.16233 5.28982 3.23769L13.0562 11.581L20.8226 3.23769C20.8927 3.16233 20.976 3.10256 21.0677 3.06177C21.1594 3.02099 21.2576 3 21.3568 3C21.456 3 21.5543 3.02099 21.646 3.06177C21.7376 3.10256 21.8209 3.16233 21.8911 3.23769C21.9612 3.31305 22.0169 3.40251 22.0549 3.50097C22.0928 3.59943 22.1124 3.70495 22.1124 3.81152C22.1124 3.91809 22.0928 4.02362 22.0549 4.12208C22.0169 4.22054 21.9612 4.31 21.8911 4.38536L14.1232 12.727L21.8911 21.0687C21.9612 21.144 22.0169 21.2335 22.0549 21.332C22.0928 21.4304 22.1124 21.5359 22.1124 21.6425C22.1124 21.7491 22.0928 21.8546 22.0549 21.9531C22.0169 22.0515 21.9612 22.141 21.8911 22.2164C21.8209 22.2917 21.7376 22.3515 21.646 22.3923C21.5543 22.433 21.456 22.454 21.3568 22.454C21.2576 22.454 21.1594 22.433 21.0677 22.3923C20.976 22.3515 20.8927 22.2917 20.8226 22.2164L13.0562 13.8731L5.28982 22.2164C5.21966 22.2917 5.13636 22.3515 5.0447 22.3923C4.95303 22.433 4.85478 22.454 4.75556 22.454C4.65634 22.454 4.55809 22.433 4.46642 22.3923C4.37475 22.3515 4.29146 22.2917 4.2213 22.2164C4.15114 22.141 4.09548 22.0515 4.05751 21.9531C4.01954 21.8546 4 21.7491 4 21.6425C4 21.5359 4.01954 21.4304 4.05751 21.332C4.09548 21.2335 4.15114 21.144 4.2213 21.0687L11.9892 12.727L4.2213 4.38536Z"
                  fill="#020105"
                />
              </svg>
            </div>
          </div>

          <div class="filter-range">
            <h5>{{ $store.state.translations["category.price"] }}</h5>

            <a-slider
              range
              :step="10000"
              :max="20000000"
              :min="10000"
              v-model="sliderValue"
              @change="onChangeSlider"
              @afterChange="onAfterChange"
            />
            <div class="filter-slider-inputs">
              <span>
                <input
                  type="text"
                  v-model="sliderValue[0]"
                  placeholder="от"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="до"
                  v-model="sliderValue[1]"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
            </div>
          </div>

          <div
            v-for="firstCategory in allCategories"
            :key="firstCategory?.id"
            class="categories-list-box"
          >
            <nuxt-link
              :to="localePath(`/categories-inner/${firstCategory?.slug}`)"
              :class="{
                'active-category': $route.params.index == firstCategory?.slug,
              }"
              class="first-category"
              >{{ firstCategory?.name }}</nuxt-link
            >

            <Transition name="bounce">
              <ul
                class="categories-list-inner"
                v-if="
                  (firstCategory?.children.length > 0 &&
                    firstCategory?.slug == $route.params.index) ||
                  firstCategory.children.find(
                    (item) => item.slug == $route.params.index
                  ) ||
                  firstCategory.children.find((item) =>
                    item.children.find((elem) => elem.slug == $route.params.index)
                  )
                "
              >
                <li
                  v-for="middCategory in firstCategory?.children"
                  :key="middCategory?.id"
                >
                  <span
                    :class="{
                      'active-category': $route.params.index == middCategory?.slug,
                    }"
                    @click="
                      $router.push(localePath(`/categories-inner/${middCategory?.slug}`))
                    "
                    >{{ middCategory?.name }}</span
                  >
                  <div
                    class="child-categories-list"
                    v-if="
                      middCategory?.slug == $route.params.index ||
                      middCategory?.children.find(
                        (item) => item.slug == $route.params.index
                      )
                    "
                  >
                    <nuxt-link
                      v-if="middCategory?.children.length > 0"
                      v-for="childs in middCategory?.children"
                      :to="localePath(`/categories-inner/${childs?.slug}`)"
                      class="mb-0"
                      :class="{
                        'active-category': $route.params.index == childs?.slug,
                      }"
                      :key="childs.id"
                      >{{ childs?.name }}</nuxt-link
                    >
                  </div>
                </li>
              </ul>
            </Transition>
          </div>

          <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
        </div>
        <div class="categories-atribute-box">
          <div v-for="attribit in attributes" :key="attribit.id">
            <h5 @click="atributDropAction(attribit.id)">
              {{ attribit?.name }} <span v-html="arrow"></span>
            </h5>
            <div
              class="categories-checkbox-list"
              :class="{ 'height-auto': atributDrop.includes(attribit.id) }"
            >
              <a-checkbox
                v-if="showAllAtr.includes(attribit.id)"
                class="filter-checkbox"
                v-for="option in attribit.options"
                :key="option.id"
                :checked="$route.query?.attributes?.includes(option.id)"
                @change="onChange(option.id)"
                >{{ option?.name }}
              </a-checkbox>
              <a-checkbox
                v-if="!showAllAtr.includes(attribit.id)"
                class="filter-checkbox"
                v-for="option in attribit.options.slice(0, 5)"
                :key="option.id"
                :checked="$route.query?.attributes?.includes(option.id)"
                @change="onChange(option.id)"
                >{{ option?.name }}
              </a-checkbox>

              <span
                v-if="!showAllAtr.includes(attribit.id) && attribit.options.length > 5"
                class="categories-list_show-more"
                @click="showAllAtributs(attribit.id)"
                >{{ $store.state.translations["main.show-more"] }}</span
              >
            </div>
          </div>
          <button class="confirm" @click="filterHandle = false">
            {{ $store.state.translations["category.show-resoult"] }}
          </button>
        </div>
      </div>
    </div>
    <div :class="{ show: sortHande }" class="hidden__filter">
      <div class="filter-list">
        <div>
          <div class="filter__header">
            <h5>Saralash</h5>
            <div @click="sortHande = false" class="x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M4.2213 4.38536C4.15114 4.31 4.09548 4.22054 4.05751 4.12208C4.01954 4.02362 4 3.91809 4 3.81152C4 3.70495 4.01954 3.59943 4.05751 3.50097C4.09548 3.40251 4.15114 3.31305 4.2213 3.23769C4.29146 3.16233 4.37475 3.10256 4.46642 3.06177C4.55809 3.02099 4.65634 3 4.75556 3C4.85478 3 4.95303 3.02099 5.0447 3.06177C5.13636 3.10256 5.21966 3.16233 5.28982 3.23769L13.0562 11.581L20.8226 3.23769C20.8927 3.16233 20.976 3.10256 21.0677 3.06177C21.1594 3.02099 21.2576 3 21.3568 3C21.456 3 21.5543 3.02099 21.646 3.06177C21.7376 3.10256 21.8209 3.16233 21.8911 3.23769C21.9612 3.31305 22.0169 3.40251 22.0549 3.50097C22.0928 3.59943 22.1124 3.70495 22.1124 3.81152C22.1124 3.91809 22.0928 4.02362 22.0549 4.12208C22.0169 4.22054 21.9612 4.31 21.8911 4.38536L14.1232 12.727L21.8911 21.0687C21.9612 21.144 22.0169 21.2335 22.0549 21.332C22.0928 21.4304 22.1124 21.5359 22.1124 21.6425C22.1124 21.7491 22.0928 21.8546 22.0549 21.9531C22.0169 22.0515 21.9612 22.141 21.8911 22.2164C21.8209 22.2917 21.7376 22.3515 21.646 22.3923C21.5543 22.433 21.456 22.454 21.3568 22.454C21.2576 22.454 21.1594 22.433 21.0677 22.3923C20.976 22.3515 20.8927 22.2917 20.8226 22.2164L13.0562 13.8731L5.28982 22.2164C5.21966 22.2917 5.13636 22.3515 5.0447 22.3923C4.95303 22.433 4.85478 22.454 4.75556 22.454C4.65634 22.454 4.55809 22.433 4.46642 22.3923C4.37475 22.3515 4.29146 22.2917 4.2213 22.2164C4.15114 22.141 4.09548 22.0515 4.05751 21.9531C4.01954 21.8546 4 21.7491 4 21.6425C4 21.5359 4.01954 21.4304 4.05751 21.332C4.09548 21.2335 4.15114 21.144 4.2213 21.0687L11.9892 12.727L4.2213 4.38536Z"
                  fill="#020105"
                />
              </svg>
            </div>
          </div>
          <div class="mobile-sorts">
            <div
              class="sort-item"
              v-for="(item, index) in sortItems"
              :key="index"
              @click="sort = item.value"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="13.5" stroke="#1F8A70" />
                </svg>
                <svg
                  v-if="sort == item.value"
                  class="position-absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#1F8A70" />
                </svg> </span
              >{{ item.label }}
            </div>
          </div>
          <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
        </div>
        <div class="categories-atribute-box">
          <button class="confirm" @click="sortHande = false">
            {{ $store.state.translations["category.show-resoult"] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import CategoriesCard from "../../components/cards/CategoriesCard.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import CategoriesInnerBannerCarousel from "../../components/categories/categoriesInner-banner-carousel.vue";
import CategoriesInnerBanner from "../../components/categories/categoriesInner-banner.vue";
import CategoriesTabCarousel from "../../components/categories/categoriesInner-tab-carousel.vue";
import global from "../../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      filterHandle: false,
      sortHande: false,
      showAllAtr: [],
      sliderValue: [10000, 10000000],
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      sort: "all",
      disabled: false,
      filterOptions: [],
      products: [],
      atr: [],
      loading: false,
      attributes: [],
      options: [],
      atributDrop: [],
      categoryChilds: [],
      sortItems: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "popular",
          label: "По популярности",
        },
        {
          value: "cheap",
          label: "Подешевле",
        },
        {
          value: "expensive",
          label: "Подороже",
        },
      ],
    };
  },
  async asyncData({ $axios, params, query, store, i18n }) {
    const [
      productsData,
      allCategoriesData,
      bannersData,
      categoryData,
    ] = await Promise.all([
      store.dispatch("fetchProducts/getProducts", {
        params: { ...query },
        headers: {
          lang: i18n.locale,
        },
      }),
      $axios.$get(`/categories`, {
        params: {
          all: 1,
        },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchBanners/getBanners", {
        headers: {
          lang: i18n.locale,
        },
      }),
      $axios.$get(`/categories/${params.index}`, {
        params: { ...query, limit: 1 },
      }),
    ]);
    const productsOthers = productsData?.products?.data;
    const allCategories = allCategoriesData?.categories;
    const banners = bannersData?.banners?.data;

    const categoryChilds = categoryData?.category;
    const attributes = categoryData?.attributes;
    const options = [];
    categoryData?.attributes.forEach((item) => {
      options.push(...item.options);
    });
    const filterOptions = [];
    if (query.attributes) {
      let atr = query.attributes.split(",");
      atr.forEach((item) => {
        let findItem = options.find((elem) => elem.id == item);
        filterOptions.push(findItem);
      });
    }
    const allInfo = categoryData;
    return {
      productsOthers,
      allCategories,
      banners,
      options,
      categoryChilds,
      attributes,
      filterOptions,
      allInfo,
    };
  },

  mounted() {
    this.getFirstData("__GET_PRODUCTS");
    if (this.$route.query.min_price) {
      this.sliderValue[0] = Number(this.$route.query.min_price);
    }
    if (this.$route.query.max_price) {
      this.sliderValue[1] = Number(this.$route.query.max_price);
    }
  },
  computed: {
    filterAtributs() {
      let arr = [];
      if (this.$route.query?.attributes) {
        arr = this.$route.query?.attributes.split(",");
      }
      return arr.length;
    },
  },
  methods: {
    showAllAtributs(id) {
      if (!this.showAllAtr.includes(id)) {
        this.showAllAtr.push(id);
      }
    },

    atributDropAction(id) {
      if (!this.atributDrop.includes(id)) {
        this.atributDrop.push(id);
      } else {
        this.atributDrop = this.atributDrop.filter((item) => item != id);
      }
    },
    clearFilter() {
      this.$router.replace({
        path: `/categories-inner/${this.$route.params.index}`,
        query: {
          page: this.$route.query.page,
        },
      });
      this.filterOptions = [];
    },
    async __GET_PRODUCTS() {
      this.loading = true;
      const data = await this.$store.dispatch("fetchProducts/getProducts", {
        params: { ...this.$route.query, category: this.$route.params.index },
      });
      this.totalPage = data?.products?.total;
      this.products = data?.products?.data;
      this.loading = false;

      console.log(data);
    },
    // async __GET_CATEGORY() {
    //   this.loading = true;
    //   const data = await this.$axios.$get(`/categories/${this.$route.params.index}`, {
    //     params: { ...this.$route.query, limit: 1 },
    //   });
    //   this.loading = false;
    //   this.categoryChilds = data?.category;
    //   this.attributes = data?.attributes;
    //   this.options = [];
    //   this.totalPage = data?.products?.total;
    //   data?.attributes.forEach((item) => {
    //     this.options.push(...item.options);
    //   });
    //   this.filterOptions = [];
    //   if (this.$route.query.attributes) {
    //     let atr = this.$route.query.attributes.split(",");
    //     atr.forEach((item) => {
    //       let findItem = this.options.find((elem) => elem.id == item);
    //       this.filterOptions.push(findItem);
    //     });
    //   }
    //   this.allInfo = data;
    // },
    async onChange(value) {
      let atr = [];
      if (this.$route.query.attributes) {
        atr = await this.$route.query.attributes.split(",");
      }
      if (atr.includes(`${value}`)) {
        atr.splice(atr.indexOf(`${value}`), 1);
      } else {
        atr.push(value);
      }
      let string = await atr.join(",");
      if (!this.$route.query.attributes || this.$route.query.attributes != string) {
        let query = { ...this.$route.query, attributes: string };
        await this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
      }
      this.filterOptions = [];
      if (this.$route.query.attributes) {
        let filterAtr = this.$route.query.attributes.split(",");
        filterAtr.forEach((item) => {
          let findItem = this.options.find((elem) => elem.id == item);
          this.filterOptions.push(findItem);
        });
      }
    },
    onChangeSlider(val) {},

    async deleteFilterItem(id) {
      let atr = await this.$route.query.attributes.split(",");
      atr.splice(atr.indexOf(`${id}`), 1);
      let query = { ...this.$route.query, attributes: atr.join(",") };

      await this.$router.replace({
        path: `/categories-inner/${this.$route.params.index}`,
        query: query,
      });
      if (!Object.keys(query).includes("attributes")) {
        this.filterOptions = [];
      }
    },
    async onAfterChange(value) {
      if (
        !this.$route.query.max_price ||
        this.$route.query.min_price != value[0] ||
        this.$route.query.max_price != value[1]
      ) {
        let query = {
          ...this.$route.query,
          min_price: value[0],
          max_price: value[1],
        };
        await this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
        this.__GET_PRODUCTS();
      }
    },
  },
  watch: {
    async sort(val) {
      let filterObj = {
        ...this.$route.query,
        sort: val,
      };
      if (val == "all") {
        delete filterObj["sort"];
        await this.$router.replace({
          path: this.$route.path,
          query: { ...filterObj },
        });
      } else {
        if (this.$route.query.sort != filterObj.sort) {
          await this.$router.replace({
            path: this.$route.path,
            query: { ...filterObj },
          });
        }
        this.__GET_PRODUCTS({ ...this.$route.query });
      }
    },

    async current(val) {
      this.changePagination(val, "__GET_PRODUCTS");
    },
    filterAtributs(val) {
      if (val == 0) this.filterOptions = [];
      this.__GET_PRODUCTS();
      if (val == 0 && this.$route.query.attributes == "") {
        let query = { ...this.$route.query };
        delete query.attributes;
        this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
      }
      if (val > 0) {
        this.filterOptions = [];
        if (this.$route.query.attributes) {
          let filterAtr = this.$route.query.attributes.split(",");
          filterAtr.forEach((item) => {
            let findItem = this.options.find((elem) => elem.id == item);
            this.filterOptions.push(findItem);
          });
        }
      }
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    CategoriesInnerBannerCarousel,
    CategoriesInnerBanner,
    CategoriesTabCarousel,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
.mobile-sorts {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 32px;
}
.sort-item {
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  background: #fff;
  color: #000;
  font-family: var(--SB_500);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  gap: 18px;
  align-items: center;
}
.sort-item span {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

.active-category {
  color: var(--color_green) !important;
}
.text-test {
  color: red;
}
.categories-atribute-box {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hidden__filter {
  transition: 0.4s;
  transform: translateX(-100%);
  padding: 148px 16px 99px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 9;
  height: 100%;
  overflow: auto;
}
.hidden__filter.show {
  transform: translateX(0);
}
.hidden__filter h5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1c1f22;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.28px;
  margin-bottom: 12px;
}
.confirm {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--color_green);
  border-radius: 12px;
  padding: 16px 0;
  border: none;
  margin-top: 32px;
}
.hidden__filter .filter-range {
  margin: 32px 0 56px 0;
}
.filter__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
