import axios from '@nuxtjs/axios'

export function postURL(url){
  return axios.post(`/shorten?url${url}`)
}

export function getURL(code){
    return axios.get(`info?code=${code}`)
}