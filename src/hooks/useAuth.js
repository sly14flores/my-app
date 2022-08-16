import useStorage from './useStorage'

const useAuth = () => {

  const { token } = useStorage().get()

  const isLogin = token === null ? false : true

  return {
    isLogin
  }

}

export default useAuth;