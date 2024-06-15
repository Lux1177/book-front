<script setup>

import InputForm from "@/components/html/InputForm.vue";
import {category} from "@/store/category.js";
import {computed, reactive, ref} from "vue";



category().fetchCategories()

const fetchedCategories = computed(() => category().getCategories)

let image = ref('')

let book = reactive({
    name: '',
    description: '',
    text: '',
    category: '',
})

function selectImage(event) {
    image = new FormData()
    image.append("image", event.target.files[0])
}

function addBook() {

}

</script>

<template>

    <div class="grid grid-cols-12">
        <div class="col-span-12 text-2xl font-bold text-gray-800">
            Kitob qo'shing
        </div>

        <div class="col-span-8">
            <InputForm
                v-model="book.name"
                labelName="bookName"
                inputType="text"
                inputId="bookName"
                inputName="Book"
                inputPlaceholder="Kitob nomini kiriting"
            />

        </div>
        <div class="col-span-8">
            <InputForm
                v-model="book.description"
                labelName="bookDescription"
                inputType="text"
                inputId="bookDescription"
                inputName="Book"
                inputPlaceholder="Kitob tavsifini kiriting"
            />

        </div>
        <div class="col-span-8">
            <textarea
                v-model="book.text"
                name="bookText"
                id="bookText"
                rows="5"
                placeholder="Kitob matnini kiriting"
                class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white"
            />
        </div>
        <div class="col-span-8">
            <select v-model="book.category" name="" id="" class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white" >
                <option v-for="category of fetchedCategories" :key="category.id" >{{ category.name }}</option>
            </select>
        </div>
        <div class="col-span-8">
            <InputForm
                @change="selectImage($event)"
                labelName="bookImage"
                inputType="file"
                inputId="bookImage"
                inputName="BookImage"
                inputPlaceholder="Kitob rasmini tanlang"
            />
        </div>
        <div class="col-span-8">
            <button
                @click="addBook"
                type="button"
                class="text-white bg-blue-800 font-bold w-full py-2.5 rounded hover:bg-blue-600 focus:ring">

                Saqlash
            </button>
        </div>
    </div>

</template>

<style scoped>

</style>