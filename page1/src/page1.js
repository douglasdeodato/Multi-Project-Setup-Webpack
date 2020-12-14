import Heading from './components/heading/heading.js';
import HelloWorldButton from './components/page1/page1.js';


if (process.env.NODE_ENV === 'production'){
    console.log('production mode');
} else if (process.env.NODE_ENV === 'development'){
    console.log('development mode');
}

const heading = new Heading();
heading.render('hello world button');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();