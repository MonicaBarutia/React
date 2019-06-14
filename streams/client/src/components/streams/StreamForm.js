import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import { renderField } from '../../utils/formHelpers';

class StreamForm extends React.Component {
    state = {textTitle: "", textDescription: ""};

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
                <Field
                    name="title"
                    type="text"
                    component={renderField}
                    label="Enter Title"
                />
                <Field
                    name="description"
                    type="text"
                    component={renderField}
                    label="Enter Description"
                />
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

