<script setup>

import {book} from '@/store/book.js'
import {computed, watch} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute();

watch(
    () => route.params.id,
    (id) => {
        if(id) {
            book().fetchBooks(id)
        } else {
            book().fetchBooks()
        }
    },
    {immediate: true}
)

book().fetchBooks()

const books = computed(() => book().getBooks)

</script>

<template>
    <div v-for="book of books" class="col-span-1  bg-gray-100 border rounded-xl overflow-hidden shadow-lg">
        <img :src="'http://localhost:8888' + book.image.contentUrl" alt="#">
        <div>
            <h5 class="font-bold text-2xl px-2">{{ book.name }}</h5>
            <p class="px-2 pt-2">{{ book.description }}</p>
            <router-link :to="'/book-content/' + book.id" class="float-right mr-3 mb-3 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-800">O'qish</router-link>
        </div>
    </div>
</template>

<style scoped>

img{
    width: 100%;
    height: 320px;
}

</style>