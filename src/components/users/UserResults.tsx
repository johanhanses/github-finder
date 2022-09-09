import { useContext } from 'react'
import {
  GithubContext,
  GithubContextProps
} from '../../context/github/GithubContext'
import { Spinner } from '../layout/Spinner'
import { UserItem } from './UserItem'

export const UserResults = () => {
  const { users, loading } = useContext<GithubContextProps>(GithubContext)

  if (loading) return <Spinner />
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}
