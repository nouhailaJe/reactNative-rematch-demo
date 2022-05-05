import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { gql, useQuery, useMutation, useSubscription, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
//redux
import { connect } from 'react-redux';
import { QUERY_ALL_ACCOUNTS } from '../queries/queries';


 
function AccountList({ accountList, fetchedAccountList }) {
    const { loading, data, refetch, error } = useQuery(QUERY_ALL_ACCOUNTS,{fetchPolicy:"cache-only"});
    useEffect(()=>{
        fetchedAccountList(data.accounts.accounts)
     },[])

    return (
        <View>
                <ScrollView style={{ padding: 10 }}> 
                    {data != undefined && accountList.map((element, index) => (
                        <View key={index} style={{flexDirection:"row"}}>
                            {console.log}
                            <Text style={{ fontSize: 15,marginRight:50}}>{element.name}</Text>
                            <Text style={{ fontSize: 15 }}>{element.balance}</Text>
                        </View>

                    ))}
                    <View style={{ height: 300 }}><Text> </Text></View>
                </ScrollView>
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
)(AccountList)