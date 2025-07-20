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
    color?: string,
    cardView?: boolean,
    displayCard?: (item: any) => any
}

export default function RNCTable(props: propsType) {
    const { datasource, cols, loading, color, cardView, displayCard } = props
    const TableStyles = StyleSheet.create({
        tHead: {
            backgroundColor: color ?? '#004AAD'
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
            color: color ?? '#004AAD'
        },
        tRow: {

        },
        flexRow: {
            flexDirection: "row",
        },
        tCell: {
            padding: 10,
            width: 100,
            borderWidth: 1,
            borderColor: color ?? '#004AAD',
            flex: 1
        }
    })
    return <>
        {loading ? <Text>Loading...</Text> : datasource && datasource.length === 0 ? <View>
            <Text style={{ textAlign: 'center', padding: 20 }}>No Rows Available</Text>
        </View> : <View>
            {cardView && <View>
                {datasource.map((item, index) => <View style={{ marginBottom: 5 }} key={index}>
                    {displayCard && displayCard(item)}
                </View>)}
            </View>}
            {!cardView && <View>
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
            </View>}
        </View >}
    </>
}