import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View ,Text} from 'react-native'

const Account = ({ accountList, fetchedAccountList }) => {
  useEffect(() => {
    // Testing filling station with data that comes from the backend
    const fill = async () => {
      // clear state from any data
      await fetchedAccountList([])

      // Generating 1M records
      const data = []
      for (let i = 0; i < 1000000; i++) {
        data.push({
          id: i,
          balance: i,
          name: `account ${i}`
        })
      }
      console.log(data)

      // Snapshot date befor the inserting data
      const dateBefor = new Date();

      await fetchedAccountList(data)

      // Snapshot after befor the inserting data
      const dateAfter = new Date();

      // For 1M records
      console.log(dateBefor)

      const diffInSecends = (dateAfter - dateBefor) / 1000
      const diffInMin = diffInSecends / 60
      const diffInHours = diffInMin / 60

      console.log("In seconds", diffInSecends)
      console.log("In Minutes", diffInMin)
      console.log("In Hours", diffInHours)

      console.log(dateAfter)
    }

    fill();

  }, [])

  return (
    <View>
      <Text>
      {accountList.length}
      </Text>
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