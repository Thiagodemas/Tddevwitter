import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
      <Tweet
          name="Filipe Deschamps"
          user="@filipedechamps"
          date="3 de Ago"
          description="Salários, Mercado de Trabalho e o Futuro da Programação (feat Rocketseat)"
          imgNews="https://i.ytimg.com/vi/uIOkpQa8PGU/maxresdefault.jpg"
          avatar="https://yt3.ggpht.com/a/AATXAJxiC0ILNRKn_1sIcE6LcCsRrEVkDCGhpTdMRDJS=s100-c-k-c0xffffffff-no-rj-mo"
          likes="902"
          retweet="500"
        />
      <Tweet
          name="Rocketseat"
          user="@rocketseat"
          date="3 de Ago"
          description="Next Level Week! 🚀"
          imgNews="https://repository-images.githubusercontent.com/269772558/be6e8780-a831-11ea-997a-b33c150d6db2"
          avatar="https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default"
          likes="1608"
          retweet="1204"
        />
       
        <Tweet
          name="Rocketseat"
          user="@rocketseat"
          date="2 de Ago"
          description="Iniciando no React Native 🚀"
          imgNews="https://blog.rocketseat.com.br/content/images/2018/12/adonis-reactjs-react-native-3.png"
          avatar="https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default"
          likes="787"
          retweet="313"
        />
         <Tweet
          name="Rocketseat"
          user="@rocketseat"
          date="2 de Ago"
          description="Foguete não tem ré 🚀"
          imgNews="https://arturkilldragon.files.wordpress.com/2019/06/omnistack-wallpaper-1920x1080.png"
          avatar="https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default"
          likes="244"
          retweet="48"
        />
        <Tweet
          name="Filipe Deschamps"
          user="@filipedechamps"
          date="1 de Ago"
          description="Programei 4 robôs que criam vídeos para mim no YouTube"
          imgNews="https://i.ytimg.com/vi/pbVwH8o837A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDyGYEuRgv5CvNTMUE8_cnNpa2YMQ"
          avatar="https://yt3.ggpht.com/a/AATXAJxiC0ILNRKn_1sIcE6LcCsRrEVkDCGhpTdMRDJS=s100-c-k-c0xffffffff-no-rj-mo"
          likes="456"
          retweet="240"
        />
       
      </Tweets>
    </Container>
  );
};

export default Feed;
