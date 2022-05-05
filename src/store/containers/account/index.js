import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { useQuery, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { QUERY_ALL_ACCOUNTS } from '../../../queries/queries';


const Account = (props, { accountList, fetchedAccountList }) => {
  const { loading, data, refetch, error } = useQuery(QUERY_ALL_ACCOUNTS);

  useEffect(() => {
    refetch()
  }, [])

  return (

    <View style={{ marginTop: 30 }}>
      <Button
        onPress={() => props.navigation.navigate("AccountList")}
        title="List of accounts"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={() => props.navigation.navigate("AddAccount")}
        title="Add Account"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}


export default connect(
  (state) => ({
    accountList: state.account.accountList
  }),
  (dispatch) => ({
    fetchedAccountList: dispatch.account.fetchedAccountList
  })
)(Account)