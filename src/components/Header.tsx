import { getUser } from '@/lib/auth';
import React from 'react'

const Header = async () => {
    const user = await getUser();
  return (
    <div>
        Header
    </div>
  )
}

export default Header