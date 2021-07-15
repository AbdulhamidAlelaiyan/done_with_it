import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import options from "./options.js";
import routes from "./routes.js";

// Screens:
import MyAccountScreen from "../../screens/MyAccountScreen/MyAccountScreen.js";
import MessagesScreen from "../../screens/MessagesScreen/MessagesScreen.js";

const Account = createStackNavigator();
const AccountNavigator = () => {
    return (
        <Account.Navigator>
            <Account.Screen
                name={routes.ACCOUNT_DETAILS}
                component={MyAccountScreen}
                options={options.AccountDetailsScreen}
            />
            <Account.Screen
                name={routes.ACCOUNT_MESSAGES}
                component={MessagesScreen}
                options={options.AccountMessagesScreen}
            />
        </Account.Navigator>
    );
};

export default AccountNavigator;
