import { Box, Typography } from '@mui/material';
import { MenuSuperior } from '../../components';

interface LayoutBaseProps {
  titulo: string;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ children, titulo }) => {
  return (
    <>
      <MenuSuperior />
      <Box display='flex' flexDirection='column' gap={1} height='100%'>
        <Box padding={1}>
          <Typography variant='h5' component='h1'>
            {titulo}
          </Typography>
        </Box>
        <Box flex={1} overflow='auto'>
          {children}
        </Box>
      </Box>
    </>
  );
};
