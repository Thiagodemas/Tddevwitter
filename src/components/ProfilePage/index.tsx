import React from 'react';

// import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Thiago Demas</h1>
        <h2>@thiagodemas</h2>

        <p>
          Web Developer, Github: <a href="https://github.com/Thiagodemas" target="_black">@thiagodemas</a>
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

    </Container>
  );
};

export default ProfilePage;