import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
  ImgBanner
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner >
      <ImgBanner
            src="https://image.freepik.com/fotos-gratis/user-people-network-circuit-board-conexao-conexao-tecnologia_1379-882.jpg"
            alt="Thiago Demas"
          />
        <Avatar  src="https://avatars0.githubusercontent.com/u/6172978?s=460&u=429ed7767e15d8e5202b1ea7f92b585cd5e2294f&v=4"
            alt="Thiago Demas">
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Thiago Demas</h1>
        <h2>@thiagodemas</h2>

        <p>
          Web Developer, Github:{' '}
          <a href="https://github.com/Thiagodemas" target="_black">
            @thiagodemas
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Natal, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de Maio de 1992
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>75</strong>
          </span>
          <span>
            <strong>777 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
