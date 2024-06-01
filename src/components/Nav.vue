<template>
  <section class="nav">
    <label
      title="home"
      for="home"
      class="nav__label"
      :class="{ active: isActive('/') }"
      @click="clickNav('/')"
    >
      <input id="home" name="page" type="radio" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 20"
        height="20"
        width="21"
        class="icon home"
      >
        <path
          fill="inherit"
          d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"
        ></path>
      </svg>
    </label>
    <label
      title="cart"
      for="cart"
      class="nav__label"
      :class="{ active: isActive('/add') }"
      @click="clickNav('/add')"
    >
      <input id="cart" name="page" type="radio" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="currentColor"
        class="bi bi-journal-plus"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"
        />
        <path
          d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"
        />
        <path
          d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
        />
      </svg>
    </label>
    <label
      title="favorite"
      for="favorite"
      class="nav__label"
      :class="{ active: isActive('/favorite') }"
      @click="clickNav('/favorite')"
    >
      <input id="favorite" name="page" type="radio" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        viewBox="0 0 20 18"
        height="18"
        width="20"
        class="icon favorite"
      >
        <path
          fill="inherit"
          d="M14.44 0C12.63 0 11.01 0.88 10 2.23C9.48413 1.53881 8.81426 0.977391 8.04353 0.590295C7.27281 0.203198 6.42247 0.00108555 5.56 0C2.49 0 0 2.5 0 5.59C0 6.78 0.19 7.88 0.52 8.9C2.1 13.9 6.97 16.89 9.38 17.71C9.72 17.83 10.28 17.83 10.62 17.71C13.03 16.89 17.9 13.9 19.48 8.9C19.81 7.88 20 6.78 20 5.59C20 2.5 17.51 0 14.44 0Z"
        ></path>
      </svg>
    </label>
    <label
      title="favorite"
      for="favorite"
      class="nav__label"
      :class="{ active: isActive('/favorite') }"
      @click="clickNav('/favorite')"
    >
      <input id="favorite" name="page" type="radio" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        viewBox="0 0 20 18"
        height="18"
        width="20"
        class="icon favorite"
      >
        <path
          fill="inherit"
          d="M14.44 0C12.63 0 11.01 0.88 10 2.23C9.48413 1.53881 8.81426 0.977391 8.04353 0.590295C7.27281 0.203198 6.42247 0.00108555 5.56 0C2.49 0 0 2.5 0 5.59C0 6.78 0.19 7.88 0.52 8.9C2.1 13.9 6.97 16.89 9.38 17.71C9.72 17.83 10.28 17.83 10.62 17.71C13.03 16.89 17.9 13.9 19.48 8.9C19.81 7.88 20 6.78 20 5.59C20 2.5 17.51 0 14.44 0Z"
        ></path>
      </svg>
    </label>
  </section>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "nav-component",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const clickNav = (path) => {
      router.push(path);
    };

    const isActive = (path) => {
      return route.path === path;
    };

    return {
      clickNav,
      isActive,
    };
  },
};
</script>

<style scoped></style>
