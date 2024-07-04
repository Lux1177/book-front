<script setup>

import {computed, ref} from "vue";
import {category} from "@/store/category.js";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

category().fetchCategories()

const fetchedCategories = computed(() => category().getCategories)

const categorySet = ref('')
const categoryAddName = ref('')

const notify = (type = "error") => {
    if(type === "success"){
        toast.success("Kategoriya o'zgartirildi !", {
            position: toast.POSITION.TOP_CENTER,
        })
    }else{
        toast.error("Kategoriya o'zgartirishda xatolik !", {
            position: toast.POSITION.TOP_CENTER,
        })
    }
}

function save() {

}

function edit(catId, catName) {
    const categoryNameObject = {
        "name": catName
    }

    category().editCategory(categoryNameObject, catId)
        .then(() => {
            notify("success")
        }).catch(() => {
            notify()
    })
}

</script>

<template>
    <div class="px-3 py-2">
        <div class="flex gap-4">
            <div class="border-2 rounded ">
                <label for="categoryAdd" class="p-2">
                    <input v-model="categorySet" type="radio" class="my-3 mr-1" id="categoryAdd" name="category"
                           value="add">
                    Qo'shish</label>
            </div>
            <div class="border-2 rounded ">
                <label for="categoryEdit" class="p-2">
                    <input v-model="categorySet" type="radio" class="my-3 mr-1" id="categoryEdit" name="category"
                           value="edit">
                    O'zgartirish</label>
            </div>
            <div class="border-2 rounded ">
                <label for="categoryRemove" class="p-2">
                    <input v-model="categorySet" type="radio" class="my-3 mr-1" id="categoryRemove" name="category"
                           value="remove">
                    O'chirish</label>
            </div>
        </div>
        <div class="mt-16">
            <div v-if="categorySet === 'add'">
                <div class="flex">
                    <input v-model="categoryAddName" type="text"
                           class="bg-white rounded text-black border-2 w-1/2 mr-4 px-3"
                           placeholder="Kategoriya nomini kiriting">
                    <button
                        @click="save"
                        type="button"
                        class="text-white bg-blue-800 font-bold py-2.5 rounded hover:bg-blue-600 focus:ring w-1/6">
                        Saqlash
                    </button>
                </div>
            </div>
            <div v-if="categorySet === 'edit'" class="w-2/3">
                <div v-for="category of fetchedCategories" :key="category.id" class="flex justify-between mt-4">
                    <input v-model="category.name"
                           type="text"
                           class="bg-white rounded text-black border-2 w-1/2 mr-4 px-3"
                           placeholder="Kategoriya nomini kiriting">
                    <button
                        @click="edit(category.id, category.name)"
                        type="button"
                        class="text-white bg-blue-800 font-bold py-2.5 rounded hover:bg-blue-600 focus:ring w-1/6">
                        Saqlash
                    </button>
                </div>
            </div>
            <div v-if="categorySet === 'remove'">remove</div>
        </div>
    </div>
</template>

<style scoped>

</style>