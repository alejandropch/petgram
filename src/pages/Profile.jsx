import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Layout } from '../components/Layout'

import { Button } from '../components/SubmitButton'
import { useApolloClient } from '@apollo/client'

export const Profile = () => {
  const { logOut } = useContext(Context)
  const client = useApolloClient()

  return (
    <Layout title='Profile' subtitle='This is your user page'>
      <Button onClick={() => logOut({ client })}>Log out</Button>
    </Layout>
  )
}
