<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-pen-watch"
  >
    <!-- Fountain pen -->
    <path d="M3 21l3-3" />
    <path d="M6 18l5-5" />
    <path d="M11 13l2-2 1.5-1.5" />
    <path d="M14.5 9.5l1-1a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8l-1 1" />
    
    <!-- Watch -->
    <circle cx="17" cy="17" r="4" />
    <path d="M16 15v2.5l1.5 1" />
    <path d="M15.5 13.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1" />
    <path d="M15.5 20.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1" />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  strokeWidth: {
    type: [Number, String],
    default: 2
  }
})
</script>
