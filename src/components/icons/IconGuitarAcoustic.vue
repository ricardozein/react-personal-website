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
    class="icon-guitar"
  >
    <ellipse cx="12" cy="16" rx="7" ry="6" />
    <circle cx="12" cy="16" r="2.5" opacity="0.3" />
    <path d="M12 10v6" />
    <path d="M12 10L14 3" />
    <path d="M12 10L10 3" />
    <line x1="10" y1="5" x2="14" y2="5" />
    <line x1="10.5" y1="7" x2="13.5" y2="7" />
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
