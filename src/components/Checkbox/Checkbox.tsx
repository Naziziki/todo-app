import Checkbox from '@mui/material/Checkbox';
import styled from '@emotion/styled';

type CheckboxType = {
  id: string;
};

const CustomCheckbox = styled(Checkbox)
  `color: white;
  padding: 12px;`;

export default function CheckboxUsage({id}:CheckboxType) {
return (
  <CustomCheckbox color='primary' size="medium" id={id} />
);
}


