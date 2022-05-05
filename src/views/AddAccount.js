import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useMutation,useQuery } from '@apollo/client';
//redux
import { connect } from 'react-redux';
import { ADD_ACCOUNT,QUERY_ALL_ACCOUNTS } from '../queries/queries';



function AddAccount({ accountList }) {
    const { loading, data, refetch } = useQuery(QUERY_ALL_ACCOUNTS)

    const [account_id, setaccountId] = useState("");
    const [amount, setAmount] = useState(0);
    const [accountName, setAccountName] = useState("");
    const refRBSheet = useRef();
    const [createAccount, { error }] = useMutation(ADD_ACCOUNT)



    return (
        <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", marginRight: 10 }}>Account Name: </Text>
                <TextInput style={{ height: 30, borderBottomWidth: .6, borderBottomColor: "gray", width: 200 }}
                    placeholder='enter Account Name' value={accountName} onChange={(e) => setAccountName(e.nativeEvent.text)} ></TextInput>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                <Text style={{ fontWeight: "bold", marginRight: 10 }}>Amount: </Text>
                <TextInput style={{ height: 30, borderBottomWidth: .6, borderBottomColor: "gray", width: 200 }}
                    placeholder='enter Amount' value={amount.toString()} onChange={(e) => setAmount(Number(e.nativeEvent.text))} ></TextInput>
            </View>
            <TouchableOpacity
                onPress={async () => {
                    createAccount({
                        variables: {
                            input: {
                                name: accountName,
                                balance: amount,
                                initial_balance: amount,
                                note: accountName
                            }
                        }
                    });
                    refetch()
                }}
                style={{ marginTop: 20, backgroundColor: "#20B2AA", height: 40, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ color: "white" }}>Add Account</Text>
            </TouchableOpacity>
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
)(AddAccount)