import { defineStore } from 'pinia'
import axios from '@/plugins/axios.js'

export const category = defineStore('category', {
    actions: {
        fetchCategories() {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8888/api/categories')
                    .then(response => {
                        console.log('Kategoriyalar olindi')
                        console.log(response)

                        this.categories = response.data

                        resolve()
                    }).catch(() => {
                        console.log('Kategoriyalar olishda xatolik yuz berdi')

                        reject()
                })
            })
        },
        editCategory(data, categoryId) {
            return new Promise((resolve, reject) => {
                axios.put('http://localhost:8888/api/categories/' + categoryId, data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => {
                        console.log("Kategoriya o'zgartirildi")
                        console.log(response)

                        resolve()
                    }).catch(() => {
                        console.log("Kategoriya o'zgartirishda xatolik yuz berdi")

                        reject()
                })
            })
        }
    },
    state() {
        return {
            categories: []
        }
    },
    getters: {
        getCategories() {
            return this.categories
        }
    }
})
