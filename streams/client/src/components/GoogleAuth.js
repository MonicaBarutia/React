import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '578955737577-qt8i43pvk7p59rui60dmeh7ncr9uk0ng.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;