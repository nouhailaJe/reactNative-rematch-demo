import { gql } from '@apollo/client';



const QUERY_ALL_ACCOUNTS = gql`
  query Accounts {
     accounts {
      ... on AccountSuccessfulResult {
        accounts {
          name
          balance
          id
        }
      }
    }
  }
  `
const ADD_ACCOUNT = gql` 
mutation Mutation($input: createAccountsInput!) {
  createAccount(input: $input) {
    name
    balance
    note
    
  }
}`

export { QUERY_ALL_ACCOUNTS, ADD_ACCOUNT }