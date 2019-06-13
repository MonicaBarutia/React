import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

class StreamForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            /*   <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                   <Field name="title" component={this.renderInput} label="Enter Title"/>
                   <Field name="description" component={this.renderInput} label="Enter Description"/>
                   <button className="ui button primary">Submit</button>
               </form> */
            <div
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // margin: 20,
                    // padding: 20,
                }}
            >
                <form noValidate autoComplete="off">
                    <TextField
                        id="title"
                        label="Title"
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <TextField
                        id="title"
                        label="Description"
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
            </div>
            /*<FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            */
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

