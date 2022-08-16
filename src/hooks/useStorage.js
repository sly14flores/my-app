const initStorage = {
  id: '',
  firstname: '',
  lastname: '',
  token: ''
}
const appKey = 'myAppDemo'

const useStorage = () => {

  const get = () => {

    let storage = (localStorage.getItem(appKey)===null)?initStorage:JSON.parse(localStorage.getItem(appKey))

    return storage

  }

  const set = (data) => {

    localStorage.setItem(appKey, JSON.stringify(data))

  }

  const reset = () => {

    localStorage.setItem(appKey, JSON.stringify(initStorage))

  }

  return {
    get,
    set,
    reset
  }

}

export default useStorage