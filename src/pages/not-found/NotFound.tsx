import { Box, Typography } from '@mui/material';
import { LayoutBase } from '../../shared/layouts';

export const NotFound = () => {
  return (
    <LayoutBase titulo='Página não encontrada'>
      <Box>
        <Typography variant='body1' component='p'>
          Erro 404 - O recurso especificado não existe.
        </Typography>
      </Box>
    </LayoutBase>
  );
};