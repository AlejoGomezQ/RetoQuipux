<template>
  <div>
    <div class="carousel">
      <slot></slot>
      <button class="prev" @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-compact-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
          />
        </svg>
      </button>
      <button class="next" @click="previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-compact-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",

  methods: {
    next() {
      this.$emit('next')
    },

    previous() {
      this.$emit('previous')
    }
  }
};
</script>

<style scoped>
.carousel {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
}

button {
    position: absolute;
    height: 30px;
    width: 40px;
    top: calc(15% - 10px);
    background: transparent;
    border: none;
    color: #aaa
}

button:focus, button:hover {
  outline: none;
  cursor: pointer;
  color: #666;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>