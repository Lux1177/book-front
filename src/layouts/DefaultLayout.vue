<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheCategory from "@/components/TheCategory.vue";
</script>

<template>
    <!--    Header-->
    <TheHeader />
    <!--  Main content  -->
    <div class="grid grid-cols-12">
        <!--    Sidebar    -->
        <TheCategory />
        <!--    Books row    -->
        <div class="col-span-10 m-3">
            <!--            <HomePage />-->
            <router-view />
        </div>

    </div>
    <!--Footer-->
    <TheFooter />
</template>

<style scoped>

</style>