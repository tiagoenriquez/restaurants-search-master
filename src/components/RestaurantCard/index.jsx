import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, Title, Address, Photo } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5} edit={false} value={4} isHalf activeColor="#ffd700" />
      <Address>Endereço do restaurante</Address>
    </RestaurantInfo>
    <Photo src={restaurante} alt="Foto do restaurante" />
  </Restaurant>
);

export default RestaurantCard;
