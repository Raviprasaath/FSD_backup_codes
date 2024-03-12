// Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).
// Example
// SHOULD BE CONVERTED TO =
// [
    // { language: 'JavaScript', count: 2 },
    // { language: 'C++', count: 1 },
    // { language: 'TypeScript', count: 1 }
// ]
    
    
const languages = [
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
] 

let result = [];
languages.forEach(({language})=>{
    console.log(language);
    let existingItem = result.find((item)=>item.language == language);
    if(existingItem){
        existingItem.count++;
    }else{
        result.push({language,count:1});
    }
})

console.log(result);