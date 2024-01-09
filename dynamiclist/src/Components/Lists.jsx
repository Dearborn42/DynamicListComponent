import React from 'react'
import ListItem from './ListItem';

const Lists = ({type, data, orientation}) => {
    var direction = orientation ? "row" : "column";
    var gapSize = orientation ? "3rem" : "0rem"
    console.log(data)
    return (
        type ? 
        (<ol style={{
                display: "flex", 
                flexDirection: direction, 
                flexWrap: "wrap", 
                justifyContent: "space-evenly", 
                gap: gapSize
            }}>
            {data.map((x, i) => <ListItem key={i} data={x}/>)}
        </ol>) : 
        (<ul style={{
                display: "flex", 
                flexDirection: direction, 
                flexWrap: "wrap",
                justifyContent: "space-evenly", 
                gap: gapSize
            }}>
            {data.map((x, i) => <ListItem key={i} data={x}/>)}
        </ul>)
        
    )
}

// const styles = StyleSheet.create({
//     option1: {
//         display: "flex",
//     },
//     option2: {
//         display: "flex",
//     }
// })

export default Lists