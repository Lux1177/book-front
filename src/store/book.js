import { defineStore } from 'pinia'
import axios from '@/plugins/axios.js'

export const book = defineStore('book', {
    actions: {
        fetchBooks(categoryId = null) {
            return new Promise((resolve, reject) => {
                let url = ''

                if(categoryId) {
                    url = '/by/category?categoryId=' + categoryId
                }
                
                axios.get('http://localhost:8888/api/books' + url)
                    .then(response => {
                        console.log('Kitoblar olindi')
                        console.log(response)
                        this.books = response.data
                        resolve()
                    }).catch(() => {
                    console.log('Kitoblarni olishda xatolik yuz berdi')
                    reject()
                })
            })
        },
        fetchBook(bookId) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8888/api/books/' + bookId)
                    .then((response) => {
                        console.log('Kitob olindi')
                        console.log(response.data)

                        this.book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                        }

                        resolve()
                    }).catch(() =>{
                        console.log('Kitob olishda xatolik')

                        reject()
                } )
            })
        },
        createBook(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8888/api/books', data)
                    .then(response => {
                        console.log('Kitob joylandi')
                        console.log(response)

                        resolve()

                    }).catch(() => {
                        console.log('Kitob joylashda xatolik yuz berdi')

                        reject()
                })
            })
        }
    },
    state() {
        return {
            books: [],
            book: {}
        }
    },
    getters: {
        getBooks() {
            return this.books
        },
        getBook() {
            return this.book
        }
    }
})
