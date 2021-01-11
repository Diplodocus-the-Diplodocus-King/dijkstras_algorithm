// |Route End 1|Route End 2|Distance|
// |---|---|---|
// |A|C|2|
// |C|D|1|
// |C|F|4|
// |B|D|4|
// |B|E|7|
// |D|F|1|
// |D|G|2|
// |F|G|3|
// |G|H|4|
// |E|H|10|

let nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const paths = [
    {
        node1: 'A',
        node2: 'C',
        distance: 2
    },
    {
        node1: 'C',
        node2: 'D',
        distance: 1
    },
    {
        node1: 'C',
        node2: 'F',
        distance: 4
    },
    {
        node1: 'B',
        node2: 'D',
        distance: 4
    },
    {
        node1: 'B',
        node2: 'E',
        distance: 7
    },
    {
        node1: 'D',
        node2: 'F',
        distance: 1
    },
    {
        node1: 'D',
        node2: 'G',
        distance: 2
    },
    {
        node1: 'F',
        node2: 'G',
        distance: 3
    },
    {
        node1: 'G',
        node2: 'H',
        distance: 4
    },
    {
        node1: 'E',
        node2: 'H',
        distance: 10
    }
];

const dijkstras = (nodes, paths, source) => {

   let distances = {};
   
   const setDistances = nodes.forEach(node => {
       distances[`${node}`] = undefined;
   });

   let currentNode = source;
   let currentLowest = ['', Infinity];
   let addDistance = 0;
   let updateNodes = [...nodes];
//    let count = 0;

   while(nodes.length){
    // while(count<8){
        console.log('start', currentNode, nodes);
       for(let i=0; i<nodes.length; i++){
        console.log(nodes[i])
            if(currentNode === nodes[i]){
                if(currentNode === source){
                    distances[`${nodes[i]}`] = 0;
                }
                const spliceFixed = updateNodes.splice(i,1);
                continue
            }

            for(let j=0; j<paths.length; j++){

                if((currentNode === paths[j].node1 && nodes[i] === paths[j].node2) || (currentNode === paths[j].node2 && nodes[i] === paths[j].node1)){
                    if(distances[`${nodes[i]}`] === undefined || distances[`${nodes[i]}`] > (paths[j].distance + addDistance)){
                        distances[`${nodes[i]}`] = paths[j].distance + addDistance;
                    }
                } 
            }
       }

       nodes = [...updateNodes];
       for (let k=0; k<nodes.length; k++){
           if(distances[`${nodes[k]}`] < currentLowest[1]){
               currentLowest = [nodes[k], distances[`${nodes[k]}`]];
           }
       }

       console.log('end', distances, currentLowest, nodes, updateNodes);
       currentNode = currentLowest[0];
       addDistance = currentLowest[1];
       currentLowest = ['', Infinity];
    //    count++;
   }
}

dijkstras(nodes, paths, 'A');