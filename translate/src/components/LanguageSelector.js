import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
                <i className="flag ro" onClick={() => this.context.onLanguageChange('romanian')}/>
            </div>
        )
    }
}

export default LanguageSelector;