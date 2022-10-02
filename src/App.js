import React, { useState } from 'react';

const App = ({ isOpen = true, handleSubmit }) => {
    const [fields, setFields] = useState(0)

    const handleClick = () => {
        setFields(fields + 1)
    }
    const handleSubmitlocal = () => {
        if (handleSubmit !== undefined) { handleSubmit() }
    }
    return (
        isOpen && <div id="modal-container"
            style={{
                position: 'absolute',
                height: '100%',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgb(0 0 0 / 72%)'
            }}
        >

            <div
                id="modal"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgb(0 0 0 / 0%)',
                    backgroundColor: 'white',
                }}>
                <div
                    style={{
                        padding: '16px',
                        borderBottom: '1px solid'
                    }}
                    id="header">
                    Authentication
                </div>
                <div id="main-content" style={{ display: 'flex' }}>
                    <div
                        id="left-section"
                        style={{
                            width: '180px',
                            padding: '16px',
                            borderRight: '1px solid'
                        }}>
                        <h1>TELUS</h1>
                        <h3>Arun Chaudhary</h3>
                        <h4>Home Solutions</h4>
                        <div style={{ gap: '4px', display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <strong>* BAN 123456789</strong>
                            </div>
                            <div>
                                <strong>* BAN 123456789</strong>
                            </div>
                            <div>
                                <strong>* BAN 123456789</strong>
                            </div>
                            <div>
                                <strong>* BAN 123456789</strong>
                            </div>
                        </div>
                    </div>
                    <div id="right-section" style={{ width: '520px', padding: '16px' }}>
                        <div id="whos-calling">
                            <h3>Who's calling</h3>
                            <div style={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
                                <div>
                                    <input type="radio" id="accOwner" name="whoscalling" value="accOwner" />
                                    <label for="accOwner">Account Owner: Arun Chaudhary</label>
                                </div>
                                <div>
                                    <input type="radio" id="authUser" name="whoscalling" value="authUser" />
                                    <label for="authUser">Auth User: Mukul Chaudhary</label>
                                </div>
                            </div>
                        </div>
                        <div id="form-fields" style={{
                            display: 'flex',
                            gap: '7px',
                            flexDirection: 'column'
                        }}>
                            <h4>select 3 fields</h4>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="pin" value="pin" name="pin" />
                                <label for="pin"> PIN : 123453</label>
                            </div>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="sin" value="sin" name="sin" />
                                <label for="sin"> SIN :23213</label>
                            </div>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="dob" value="dob" name="dob" />
                                <label for="dob"> DOB :5/7/1997</label>
                            </div>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="add" value="add" name="add" />
                                <label for="add"> Address : lorem ipsum 1</label>
                            </div>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="phn" value="phn" name="phn" />
                                <label for="phn"> primary number : 909090909909</label>
                            </div>
                            <div>
                                <input onChange={handleClick} type="checkbox" id="sec" value="sec" name="sec" />
                                <label for="sec"> sec number : 8080808080</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" style={{
                    padding: '16px',
                    borderTop: '1px solid',
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}
                >
                    <button style={{ padding: '8px' }} disabled={fields < 3} onClick={handleSubmitlocal}>{`submit ${fields}`}</button>
                </div>
            </div>
        </div>
    )
}

export default App;