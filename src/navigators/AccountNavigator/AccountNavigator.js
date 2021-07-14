import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import options from "./options.js";

// Screens:
import MyAccountScreen from "../../screens/MyAccountScreen/MyAccountScreen.js";
import MessagesScreen from "../../screens/MessagesScreen/MessagesScreen.js";

const Account = createStackNavigator();
const AccountNavigator = () => {
    return (
        <Account.Navigator>
            <Account.Screen
                name="AccountDetails"
                component={MyAccountScreen}
                options={options.AccountDetailsScreen}
            />
            <Account.Screen
                name="AccountMessages"
                component={MessagesScreen}
                options={options.AccountMessagesScreen}
            />
        </Account.Navigator>
    );
};

export default AccountNavigator;
