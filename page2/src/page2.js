import Heading from './components/heading/heading.js';
import PotatoImg from './components/page2/page2.js';

const heading = new Heading();
heading.render('potato');
const potatoImg = new PotatoImg();
potatoImg.render();

import('HelloWorldApp/HelloWorldButton')
.then(HelloWorldButtonModule => {
    const HelloWorldButton = HelloWorldButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();

})