<script setup>
import {book} from '@/store/book.js'
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();

book().fetchBook(route.params.bookId)

const fetchedBook = computed(() => book().getBook)

</script>

<template>
    <h2 class="text-2xl font-extrabold mb-5">{{ fetchedBook.name }}</h2>
    <p class="py-2 text-justify">{{ fetchedBook.text }}</p>
</template>

<style scoped>

</style>