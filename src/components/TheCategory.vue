<script setup>

import {category} from "@/store/category.js";
import {computed} from "vue";

category().fetchCategories()

const fetchedCategories = computed(() => category().getCategories)

console.log(fetchedCategories)

</script>

<template>
    <div class="col-span-2 bg-gray-800 text-white min-h-screen border-t">
        <ul v-for="category of fetchedCategories" >
            <router-link :to="'/categories/' + category.id" class="p-3 cursor-pointer hover:text-gray-500 border-b block">{{ category.name }}</router-link>
        </ul>
    </div>
</template>

<style scoped>

</style>