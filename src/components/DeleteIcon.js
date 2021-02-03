import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { circle_delete } from 'react-icons-kit/ikons/circle_delete';

const SideIconContainer = 
    withBaseIcon({ size: 25 })

export const DeleteIcon = () => <SideIconContainer icon={circle_delete} />