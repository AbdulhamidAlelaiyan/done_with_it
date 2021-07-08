import React, { useState, useReducer } from "react";
import { FlatList } from "react-native";

import Screen from "../../components/UI/Screen";
import ListItem from "../../components/UI/ListItem";
import ListItemSeparator from "../../components/UI/ListItemSeparator";
import ListItemDeleteAction from "../../components/UI/ListItemDeleteAction";

import { messagesInitState, messagesReducer, DELETE_MESSAGE } from "./reducer";

import styles from "./styles";

const MessagesScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [messages, messagesDispatch] = useReducer(
        messagesReducer,
        messagesInitState
    );

    const deleteMessage = (messageId) => {
        console.log("here!");
        messagesDispatch({ type: DELETE_MESSAGE, payload: messageId });
    };

    return (
        <Screen>
            <FlatList
                style={styles.messagesList}
                data={messages}
                keyExtractor={(message) => +message.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={require("../../../assets/mosh.jpg")}
                        onPress={() => console.log("Message Selected")}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={deleteMessage.bind(null, item.id)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() =>
                    messagesDispatch({ type: DELETE_MESSAGE, payload: 2 })
                }
            />
        </Screen>
    );
};

export default MessagesScreen;
