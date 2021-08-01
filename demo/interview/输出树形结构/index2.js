const list = [
	{id: 1, name: 'A', parentId: 0},
	{id: 2, name: 'B', parentId: 0},
	{id: 3, name: 'C', parentId: 1},
	{id: 4, name: 'D', parentId: 1},
	{id: 5, name: 'E', parentId: 2},
	{id: 6, name: 'F', parentId: 3},
	{id: 7, name: 'G', parentId: 2},
	{id: 8, name: 'H', parentId: 4},
	{id: 9, name: 'I', parentId: 5}
];
//转换成下面的形式
//const tree = [
//	{
//		id: 1,
//		name: 'A',
//		parentId: 0,
//		children: [
//			{
//				id: 3,
//				name: 'C',
//				parentId: 1,
//				children: [...]
//			}
//		]
//	},
//	...
//

function convert(list = []) {
    const map = {}
    const ret = []

    list.forEach(item => {
        map[item.id] = item
    })

    list.forEach(item => {
        const parent = map[item.parentId]
        if(parent) {
            parent.children || (parent.children = []).push(item)
        }
        else {
            ret.push(item)
        }
    })
    
    return ret;
}

console.log(convert(list));
console.log(list)
