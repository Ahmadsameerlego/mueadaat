export default class Validations {
    static checkEmail(email){
        if (/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig.test(email))
        {
            
          return true
        }
          return false
    }
    static minLength (name, minLength){
        if (name.length < minLength){
            return false
        }
        return true
    }
}