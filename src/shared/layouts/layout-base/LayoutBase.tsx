import { Box, Typography } from '@mui/material';

interface LayoutBaseProps {
  titulo: string;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ children, titulo }) => {
  return (
    <Box display='flex' flexDirection='column' gap={1} height='100%'>
      <Box>
        <Typography variant='h5' component='h1'>
          {titulo}
        </Typography>
      </Box>
      <Box flex={1} overflow='auto'>{children}</Box>
    </Box>
  );
};
