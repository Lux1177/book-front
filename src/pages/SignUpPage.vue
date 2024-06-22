<script setup>

import InputForm from "@/components/html/InputForm.vue";
</script>

<template>
    <section class="bg-gray-900">
        <div class="flex items-center justify-center min-h-screen">
            <div class="w-1/3 bg-gray-800 border-gray-700 rounded-lg">
<!--                <div v-if="isError" class="text-2xl text-red-600 text-center mt-3">Login yoki parolda xato!</div>-->
                <div class="p-6 space-y-4">
                    <h1 class="text-white font-bold text-xl">Tizimga kirish</h1>
                    <form class="text-white">

                        <div class="mb-2">
                            <InputForm v-model="data.email" labelName="Email" inputName="email"/>
                        </div>
                        <div class="mb-3">
                            <InputForm v-model="data.password" labelName="Parol" inputType="password" inputId="password"
                                       inputName="password"
                                       inputPlaceholder="********"/>
                        </div>
                        <button
                            @click="login"
                            type="button"
                            class="text-white bg-blue-800 font-bold w-full py-2.5 rounded hover:bg-blue-600 focus:ring">
                            Kirish-
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>