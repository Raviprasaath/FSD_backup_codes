const nestedObject = {
    name: 'John',
    address: {
        city: 'Example City',
        country: 'Example Country',
        postal: {
            code: '12345'
        }
    },
    hobbies: ['Reading', 'Gaming']
};

console.log(flattenObject(nestedObject, ''));
function flattenObject(obj, parentKey = '') {
    let result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

//output

// {
//     name: 'John',
//     'address.city': 'Example City',
//     'address.country': 'Example Country',
//     'address.postal.code': '12345',
//     'hobbies.0': 'Reading',
//     'hobbies.1': 'Gaming'
// }

