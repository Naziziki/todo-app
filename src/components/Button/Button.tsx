import Button from '@mui/material/Button';
import styled from '@emotion/styled';

type ButtonType = {
  label: string;
};

const MainButton = styled(Button)`
font-weight: 500;
line-height: 24px;`;

export default function ButtonUsage({ label }: ButtonType) {
  return <MainButton variant="contained"
color="primary"
size="medium">{label}</MainButton>;
}


