import axios from 'axios'
import { IUser } from '../../interface'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

export const searchUsers = async (query: string) => {
  const params = new URLSearchParams({ q: query })
  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

export const getUserAndRepos = async (username: IUser['login']) => {
  const params = new URLSearchParams({ sort: 'created', per_page: '10' })

  const [user, repos] = await Promise.all([
    github.get(`/users/${username}`),
    github.get(`/users/${username}/repos?${params}`)
  ])

  return { user: user.data, repos: repos.data }
}
