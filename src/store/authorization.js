import {defineStore} from "pinia";
import axios from "axios";

export const authorization = defineStore('authorization', {
    actions: {
        auth(data) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:8888/api/users/auth", data)
                    .then((response) => {
                        console.log("Token olindi")
                        console.log(response)
                        localStorage.setItem("token", response.data.token)
                        console.log(localStorage.getItem("token"))

                        resolve()
                    }).catch((error) => {
                    console.log("Token olishda xatolik yuz berdi")
                    reject()
                })
            })
        }
    }
})