import { Box, Skeleton, Typography } from '@mui/material';
import { LayoutBase } from '../../shared/layouts';

export const Home = () => {
  return (
    <LayoutBase titulo='Página Inicial'>
      <Box display='flex' flexDirection='column' gap={5} padding={2}>
        <Typography variant='body1' component='p'>
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Box display='flex' flexDirection='row' gap={5}>
            <Skeleton variant='rectangular' width={210} height={118} />
            <Skeleton variant='rectangular' width={210} height={118} />
            <Skeleton variant='rectangular' width={210} height={118} />
          </Box>
          <Skeleton variant='text' />
        </Typography>
      </Box>
    </LayoutBase>
  );
};
