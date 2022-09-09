import { IUser } from '../../interface'
import { Link } from 'react-router-dom'

type UserItemsProps = {
  user: IUser
}

export const UserItem = ({ user: { login, avatar_url } }: UserItemsProps) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img
                src={avatar_url}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  )
}
