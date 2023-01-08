/*eslint-disable */
import { notification } from "ant-design-vue/lib";
export function isValidURL(url) {
    if(!url) return false;
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))|' + // OR ip (v4) address
        'localhost' + // OR localhost
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(url);
}

export function copyURL(url){
  navigator.clipboard.writeText(url)
  notification['success']({
    message: 'URL link copied successfully!'
  })
}