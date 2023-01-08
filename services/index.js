import { api } from '@/api'

export function postURL(url){
  return api.post(`/shorten?url=${url}`)
}

export function getURL(code){
    return api.get(`info?code=${code}`)
}