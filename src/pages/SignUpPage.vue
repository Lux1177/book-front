<script setup>
import InputForm from "@/components/html/InputForm.vue";
import {reactive, ref} from "vue";
import {user} from "@/store/user.js";

const selected = ref('men')

const genders = ref([
    { text: 'Erkak', value: 'men' },
    { text: 'Ayol', value: 'woman' },
])

let newUser = reactive({
    email: '',
    password: '',
    age: 0,
    gender: selected,
    phone: '',
})

function registration() {
    user().reg(newUser)
}


</script>

<template>
    <section class="bg-gray-900">
        <div class="flex items-center justify-center min-h-screen">
            <div class="w-1/3 bg-gray-800 border-gray-700 rounded-lg">
                <!--                <div v-if="isError" class="text-2xl text-red-600 text-center mt-3">Login yoki parolda xato!</div>-->
                <div class="p-6 space-y-4">
                    <div class="flex justify-between">
                        <h1 class="text-white font-bold text-xl">Ro'yxatdan o'tish</h1>
                    </div>
                    <form class="text-white">
                        <div class="mb-2">
                            <InputForm v-model="newUser.email" labelName="Email" inputName="email" input-id="email"/>
                        </div>
                        <div class="mb-2">
                            <InputForm v-model="newUser.password" labelName="Parol" inputName="password" input-id="password"
                                       inputType="password" input-placeholder="********"/>
                        </div>
                        <div class="mb-2">
                            <InputForm v-model.number="newUser.age" labelName="Yoshingiz" inputName="age" inputType="number" input-id="age"
                                       input-placeholder="18"/>
                        </div>
                        <div class="mb-2">
                            <label class="text-white">Jins</label>
                            <select v-model="selected" class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white" >
                                <option v-for="gender in genders" :value="gender.value">
                                    {{ gender.text }}
                                </option>
                            </select>

                        </div>
                        <div class="mb-2">
                            <label for="phone" class="text-white">Telefon raqam</label>
                            <input v-model="newUser.phone" type="tel" placeholder="+998 xx xxx xx xx" id="phone" class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white">
                        </div>
                        <button
                            @click="registration"
                            type="button"
                            class="text-white bg-blue-800 font-bold w-full py-2.5 rounded hover:bg-blue-600 focus:ring">
                            Ro'yxatdan o'tish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>