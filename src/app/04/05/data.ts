import type { User } from './types'

export const dataUsers: User[] = [
  {
    id: 1,
    name: 'Ian Chen',
    role: '前端廠長',
    email: 'ian@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ian',
    status: 'online',
  },
  {
    id: 2,
    name: 'Alice Wang',
    role: 'UI 設計師',
    email: 'alice@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    status: 'offline',
  },
  {
    id: 3,
    name: 'Bob Lee',
    role: '後端工程師',
    email: 'bob@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    status: 'online',
  },
  {
    id: 4,
    name: 'Charlie Zhang',
    role: '產品經理',
    email: 'charlie@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    status: 'online',
  },
]
