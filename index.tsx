import { ScrollView, StyleSheet, Text, View } from "react-native";

type Cols = {
    label: string,
    key: string,
    displayField?: any
}

type propsType = {
    datasource: any[],
    cols: Cols[],
    loading?: boolean,
}

export default function RNCTable(props: propsType) {
    const { datasource, cols, loading } = props
    return <>
        {loading ? <Text>Loading...</Text> : <View>
            <View style={TableStyles.tHead}>
                <View style={TableStyles.flexRow}>
                    {cols.map((x, i) => <Text style={[TableStyles.tHeading, TableStyles.tCell]} key={i}>{x.label}</Text>)}
                </View>
            </View>
            <View style={TableStyles.tBody}>
                <ScrollView>
                    {datasource.map((x, i) => <View
                        style={TableStyles.flexRow}
                        key={i}
                    >
                        {cols.map((col, ind) => col.displayField ? <View style={TableStyles.tCell} key={ind}>{col.displayField(x)}</View> : <Text style={[TableStyles.tData, TableStyles.tCell]} key={ind}>{x[col.key]}</Text>)}
                    </View>)}
                </ScrollView>
            </View>
        </View >}
    </>
}

const TableStyles = StyleSheet.create({
    tHead: {
        backgroundColor: '#004AAD'
    },
    tHeading: {
        color: 'white',
        fontWeight: 'bold'
    },
    tBody: {
        backgroundColor: '#f0f0fc',
        maxHeight: 500
    },
    tData: {
        color: '#004AAD'
    },
    tRow: {

    },
    flexRow: {
        flexDirection: "row",
    },
    tCell: {
        padding: 15,
        width: 100,
        borderWidth: 1,
        borderColor: '#004AAD',
        flex: 1
    }
})