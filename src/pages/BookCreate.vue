<script setup>

import InputForm from "@/components/html/InputForm.vue";
import {category} from "@/store/category.js";
import {computed, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {mediaObject} from "@/store/mediaObject.js";
import {book} from "@/store/book.js";


category().fetchCategories()

const router = useRouter()

const fetchedCategories = computed(() => category().getCategories)

let image = ref('')

let newBook = reactive({
    name: '',
    description: '',
    text: '',
    category: '',
})

function selectImage(event) {
    image = new FormData()
    image.append("file", event.target.files[0])
}

function addBook() {
    mediaObject().createImage(image)
        .then(() => {
            newBook.image = '/api/media_objects/' + mediaObject().getImage

            book().createBook(newBook)
                .then(() => {
                    router.push('/')
                })
        })
}

</script>

<template>

    <div class="grid grid-cols-12">
        <div class="col-span-12 text-2xl font-bold text-gray-800">
            Kitob qo'shing
        </div>

        <div class="col-span-8">
            <InputForm
                v-model="newBook.name"
                labelName="bookName"
                inputType="text"
                inputId="bookName"
                inputName="Book"
                inputPlaceholder="Kitob nomini kiriting"
            />

        </div>
        <div class="col-span-8">
            <InputForm
                v-model="newBook.description"
                labelName="bookDescription"
                inputType="text"
                inputId="bookDescription"
                inputName="Book"
                inputPlaceholder="Kitob tavsifini kiriting"
            />

        </div>
        <div class="col-span-8">
            <textarea
                v-model="newBook.text"
                name="bookText"
                id="bookText"
                rows="5"
                placeholder="Kitob matnini kiriting"
                class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white"
            />
        </div>
        <div class="col-span-8">
            <select v-model="newBook.category"
                    class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white">
                <option v-for="category of fetchedCategories" :key="category.id" :value="category['@id']" >{{ category.name }}</option>
            </select>
        </div>
        <div class="col-span-8">
            <input @change="selectImage($event)" type="file"
                   placeholder="Kitob rasmini joylang"
                   class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white">
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