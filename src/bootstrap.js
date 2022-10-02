import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount to startup the app
const mountApp = (e, handleSubmit) => {
    ReactDOM.render(
        <App isOpen={true} handleSubmit={handleSubmit} />,
        e
    )
}



// dev mode
if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('mount-modal')
    if (el) mountApp(document.getElementById('mount-modal'))
}


//when called through the conatiner

export { mountApp }