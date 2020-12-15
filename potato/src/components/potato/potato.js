import Potato from './potato.jpg';
import './potato.scss';

class PotatoImg {
    render() {
        const img = document.createElement('img');
        img.src = Potato;
        img.alt = 'potato alt';
        img.classList.add('potato-img');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
        
    }
}


export default PotatoImg;



