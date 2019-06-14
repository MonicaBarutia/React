import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const renderField = ({input, type, label, meta: {touched, error}, ... custom}) => {
    switch (type) {
        case "text" :
            return renderTextField({input, type, label, meta: {touched, error}, ...custom})
    }


};

const renderTextField = ({input, label, meta: {touched, error}, ... custom}) => (
    <div>
        <TextField
            error={touched && error}
            label={label}
            {...input}
            {...custom}
            fullWidth
        />
        <Typography
            color="error"
            paragraph
        >
            {touched && error}
        </Typography>
    </div>
);