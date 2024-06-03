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
