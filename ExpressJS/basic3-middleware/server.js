const express = require('express');
const app =express();
const path = require('path');
const PORT = 5500;


// previously we gave a access to index.html file only this will not read linked css
// so we need to tell initally by using this static 
// this is a built in middleware of express
// now in url if we type  like /css/indexFile.css -> this will shows what we written inside the css file
// this is in built 

// app.use(express.static(path.join(__dirname, './public'))) 





// let's make custom middleware
// when making custom middleware next keyword is important
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
})
// in the above code in local host if we give a path as a new-page means it will give a ans in terminal
// same for diff diff paths

// API -application programming interface
// simply if client giving some path so, based upon the path and request it will
// going to given the response this is called API








// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// })

// here we want to store a path as / and /index.html
// so for that we need to tell with regular expression

// one more thing was in path if .html is there or not, if we want to load a file means
// we need to do a similar kind of work by using ( ) ?
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})


// now we can change the path

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})



// redirecting to other page
// if user is typing wrong path or old path means need to redirect to new
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html');
})




// next is a new keyword for if the mentioned page is not there means
// it will go with a next

app.get('/hello(.html)?', (req, res, next) => {
    console.log('hello page try to implement');
    next();
}, (req, res) => {
    res.send('Hi This is because of next');
})


const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res, next) => {
    console.log('three');
    res.send('Finished');   
}

app.get('/chain(.html)?', [one, two, three]);

// now user is typing as a non relevant url
// needs to do 2 things - linking with html file 
// also need to update a status -> this will cause in console page
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=>console.log("Success"));