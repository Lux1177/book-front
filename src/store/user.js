import { defineStore } from 'pinia'
import axios from '@/plugins/axios.js'

export const user = defineStore('user', {
    actions: {
        reg(data) {
            return new Promise((resolve, reject) =>{
                axios.post("http://localhost:8888/api/users/my", data, {
                    headers: {
                        'Content-Type': 'application/ld+json',
                        }
                    })
                    .then(response => {
                        console.log("Foydalanuvchi yaratildi")
                        console.log(response)

                        resolve()
                    }).catch(()=>{
                    console.log("Foydalanuvchi yaratishda xatolik")

                    reject()
                })
            })
        }
    }
})
