import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './item';  // Asegúrate de que este path es correcto
import Slider from '../helper/slider.json';

function Example() {
    return (
        <Carousel>
            {
                Slider.map((item) => <Item key={item.id} item={item} />)
            }
        </Carousel>
    );
}

export default Example;
