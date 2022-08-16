const initStorage = {
  id: null,
  firstname: null,
  lastname: null,
  token: null
}
const appKey = 'myAppDemo'

const useStorage = () => {

  const get = () => {

    let storage = localStorage.getItem(appKey)
    console.log(storage)
    if (storage === 'undefined' || storage === null) {
      storage = initStorage
    }
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