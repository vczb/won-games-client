// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = {
  id: '123',
  jwt: '123',
  user: {
    email: 'viniciuszucatti@gmail.com'
  }
}
useSession.mockImplementation(() => [session])
