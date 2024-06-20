import {defineStore} from "pinia";
import axios from "@/plugins/axios.js";

export const mediaObject = defineStore('mediaObject', {
    actions: {
        createImage(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8888/api/media_objects', data)
                    .then((response) => {
                        console.log('Rasm yuklandi')
                        console.log(response)

                        this.image = response.data.id

                        resolve()
                    }).catch(() => {
                        console.log('Rasm yuklashda xatolik')

                        reject()
                })
            })
        }
    },
    state() {
        return {
            image: null
        }
    },
    getters: {
        getImage() {
            return this.image
        }
    }
})

