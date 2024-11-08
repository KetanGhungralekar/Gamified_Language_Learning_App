import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'French is one of only two languages spoken on all five continents, along with English.',
    translation: 'Français',

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'German is the official language in Germany, Austria, Liechtenstein, Luxembourg, and Switzerland.',
    translation: 'Deutsch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Spanish is the second most spoken language in the world: With around 485 million native speakers, Spanish is the second most spoken language in the world, after Mandarin.',
    translation: 'Español',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'The Portuguese alphabet has 26 letters, the same as the English alphabet. However, the letters K, W, and Y were added in 2009 to help with foreign loanwords.',
    translation: 'Português',

  }
];

const Item = ({ title, source, translation }) => (
  <Box sx={styles1.container}>
    <Box sx={styles1.content}>
      <img src={source} alt={`${translation} Flag`} style={{ width: 150, height: 99, borderRadius: '8px' }} />
      <Typography variant="h4" sx={styles1.title}>{translation}</Typography>
      <Typography variant="body2" sx={styles1.description}>{title}</Typography>
    </Box>

    {/* Wave Backgrounds */}
    <Box sx={styles1.wave1}>
      <svg height="200" width="100%" viewBox="0 0 1440 320">
        <path
          fill="#5907f8"
          fillOpacity="0.3"
          d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,218.7C840,181,960,107,1080,106.7C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </Box>

    <Box sx={styles1.wave2}>
      <svg height="200" width="100%" viewBox="0 0 1440 320">
        <path
          fill="#e7e0fb"
          fillOpacity="0.6"
          d="M0,224L60,202.7C120,181,240,139,360,128C480,117,600,139,720,165.3C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </Box>
  </Box>
);

const Home = () => (
  <Container maxWidth="md" sx={styles.container}>
    <Grid container spacing={4}>
      {DATA.map(item => (
        <Grid item xs={12} key={item.id}>
          <Item title={item.title} source={item.source} translation={item.translation} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

const styles = {
  container: {
    marginTop: '20px',
    padding: '20px',
  },
};

const styles1 = {
  container: {
    position: 'relative',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #4F1DAE, #9D6CFF)',
    borderRadius: '12px',
    padding: '20px',
    color: '#FFFFFF',
    overflow: 'hidden',
  },
  content: {
    zIndex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '15px 0',
  },
  description: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  wave1: {
    position: 'absolute',
    bottom: '0px',
    left: 0,
    width: '100%',
    zIndex: 1,
  },
  wave2: {
    position: 'absolute',
    bottom: '-30px',
    left: 0,
    width: '100%',
    zIndex: 0,
  },
};

export default Home;
