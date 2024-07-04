<script setup>

defineProps({
    labelName: {
        type: String,
        default: 'Email'
    },
    inputType: {
        type: String,
        default: 'email'
    },
    inputId: {
        type: String,
        default: ''
    },
    inputName: {
        type: String,
        default: 'email',
        required: true
    },
    inputPlaceholder: {
        type: String,
        default: 'name@company.com'
    },
    inputPattern: {
        type: String,
    }
})

defineEmits(['update:modelValue'])

</script>

<template>
    <label :for="inputId" class="text-white">{{ labelName }}</label>
    <input class="mb-3 border-gray-600 rounded w-full bg-gray-700 p-2.5 text-white" :type="inputType" :name="inputName"
           :id="inputId"
           :placeholder="inputPlaceholder" required
           :pattern="inputPattern"
           @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>

</style>