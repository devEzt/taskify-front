// src/components/Subtitle.tsx

import React from 'react';
import { Typography } from '@material-ui/core';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <Typography variant="h4" component="h2" gutterBottom>
      {text}
    </Typography>
  );
};

export default Subtitle;
