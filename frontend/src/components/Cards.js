import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const CustomCard = ({ title, description, code }) => {
  return (
    <Card variant="outlined" className="CustomCard">
      <CardContent>
        
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Divider className="divider" />

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Divider className="divider" />

        <Typography variant="body2" color="text.primary">
          Código Utilizado:
        </Typography>

        <CopyBlock
          text={code}
          language="jsx"
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
        
      </CardContent>
    </Card>
  );
};

export default CustomCard;
