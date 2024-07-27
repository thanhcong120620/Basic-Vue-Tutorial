<template>
  <p>Locale: {{ locale }}</p>
  <button @click="updateLocaleFunction">From locale component</button>
</template>

<script setup>
import { inject } from 'vue'

const { locale, updateLocaleFunction } = inject('localeFromApp', {
  locale: 'Cà Mau'
}) //phải gọi đúng tên parameter thì parent
</script>
