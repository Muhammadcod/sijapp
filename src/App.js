import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        users: [],
        parsedUsers: '',
        checkAll: false,
    };

    componentDidMount() {
        window.axios
            .get('https://api.github.com/users?since=234010')
            .then((r) => {
                this.setState({ users: r.data });

                this.setState({
                    parsedUsers: r.data.map((v) => {
                        return (
                            <tr className="" key={v.id}>
                                <td>
                                    <input type="checkbox" className="checker"
                                           checked={this.state.checkAll ? 'checked' : ''}/>
                                </td>
                                <td>
                                    <div
                                        className="d-flex align-items-center align-content-center">
                                        <img src={v.avatar_url}
                                             alt={v.login[0].toUpperCase()}
                                             className="font-weight-bold mr-2 rounded-circle text-center"
                                             style={{
                                                 fontSize: '1.5em',
                                                 width: '55px',
                                             }}/>

                                        <div className="user-name">
                                            <strong
                                                className="font-weight-bold">
                                                {v.login}
                                            </strong>
                                            <br/>
                                            <span className="text-muted small">
                                                {v.type}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        );
                    }),
                });
            })
            .catch(function (error) {

            });

        /*const checkAll = document.getElementById('checkAllBox');
        checkAll.addEventListener('change', function () {
            const checkAllValue = this.checked;
            document
                .querySelectorAll('.checker')
                .forEach(function (v) {
                    if (checkAllValue === true) {
                        v.setAttribute('checked', checkAllValue);
                    } else {
                        v.removeAttribute('checked');
                    }
                });
        });*/
    }

    render() {
        return (
            <div className="Internia">
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
                    <a className="navbar-brand" href="/">
                        <img
                            src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='149' height='26' viewBox='-21 84 149 26'%3E%3Cg fill='%23424242'%3E%3Cpath d='M61.39 103.43V86.59h5.15c2.57 0 4.64.78 6.2 2.33 1.56 1.55 2.34 3.58 2.34 6.09 0 2.53-.78 4.56-2.34 6.11-1.56 1.55-3.63 2.32-6.2 2.32h-5.15v-.01zm2.17-14.77v12.71h2.99c1.96 0 3.51-.56 4.64-1.68 1.13-1.12 1.69-2.68 1.69-4.67 0-1.98-.56-3.53-1.69-4.66-1.13-1.13-2.67-1.69-4.64-1.69l-2.99-.01zM81.94 103.81c-1.69 0-3.09-.58-4.19-1.74-1.1-1.16-1.65-2.63-1.65-4.4 0-1.76.53-3.22 1.6-4.39s2.43-1.75 4.09-1.75c1.71 0 3.07.55 4.08 1.66s1.52 2.66 1.52 4.65l-.02.24h-9.06c.03 1.13.41 2.04 1.13 2.73a3.61 3.61 0 0 0 2.59 1.04c1.38 0 2.46-.69 3.25-2.07l1.93.94c-.52.97-1.24 1.73-2.15 2.28-.92.54-1.96.81-3.12.81zm-3.46-7.53h6.61a2.87 2.87 0 0 0-.98-1.99c-.59-.53-1.38-.79-2.36-.79-.82 0-1.52.25-2.11.75-.58.51-.97 1.18-1.16 2.03zM97.91 100.23c0 1-.44 1.85-1.32 2.54-.88.69-1.98 1.04-3.32 1.04-1.16 0-2.18-.3-3.06-.91-.88-.6-1.51-1.4-1.88-2.39l1.93-.82c.28.69.69 1.23 1.24 1.61.54.38 1.13.58 1.78.58.69 0 1.27-.15 1.73-.45.46-.3.69-.65.69-1.06 0-.74-.56-1.28-1.69-1.62l-1.98-.49c-2.24-.56-3.36-1.65-3.36-3.25 0-1.05.43-1.89 1.28-2.53s1.95-.95 3.28-.95c1.02 0 1.94.24 2.76.73s1.4 1.14 1.73 1.95l-1.93.8a2.41 2.41 0 0 0-1.07-1.14c-.49-.27-1.05-.41-1.66-.41-.56 0-1.07.14-1.52.42s-.67.63-.67 1.04c0 .66.62 1.13 1.86 1.41l1.74.45c2.3.56 3.44 1.71 3.44 3.45zM102.21 87.93c0 .42-.15.78-.45 1.08-.3.3-.66.45-1.08.45s-.78-.15-1.08-.45c-.3-.3-.45-.66-.45-1.08s.15-.78.45-1.08c.3-.3.66-.45 1.08-.45s.78.15 1.08.45c.3.29.45.65.45 1.08zm-.45 3.97v11.53H99.6V91.9h2.16zM109.13 108.89a6.235 6.235 0 0 1-3.35-.94c-.46-.3-.86-.65-1.19-1.06s-.58-.86-.75-1.36l2.05-.85c.24.67.64 1.22 1.22 1.62.58.41 1.25.61 2.02.61 1.18 0 2.09-.35 2.75-1.06s.99-1.68.99-2.92v-1.11h-.09c-.41.61-.96 1.09-1.66 1.45-.7.35-1.46.53-2.27.53-1.51 0-2.8-.59-3.88-1.76-1.07-1.21-1.6-2.67-1.6-4.38s.53-3.16 1.6-4.35c1.08-1.19 2.38-1.79 3.88-1.79.82 0 1.57.18 2.27.53s1.25.84 1.66 1.45h.09v-1.6h2.07v11.04c0 1.85-.53 3.3-1.58 4.35-1.07 1.07-2.48 1.6-4.23 1.6zm.07-7.06c1.07 0 1.94-.38 2.61-1.15.71-.77 1.06-1.77 1.06-3.01 0-1.21-.35-2.2-1.06-2.99-.69-.78-1.56-1.18-2.61-1.18-1.04 0-1.91.39-2.61 1.18-.71.78-1.06 1.78-1.06 2.99 0 1.22.35 2.22 1.06 2.99.7.78 1.57 1.17 2.61 1.17zM117.13 91.9h2.07v1.6h.09c.33-.56.84-1.04 1.52-1.41.68-.38 1.39-.56 2.13-.56 1.41 0 2.5.4 3.26 1.21.76.81 1.14 1.96 1.14 3.45v7.25h-2.16v-7.11c-.05-1.88-1-2.82-2.85-2.82-.86 0-1.58.35-2.16 1.05s-.87 1.53-.87 2.51v6.38h-2.16l-.01-11.55zM-20.87 94.16c0-5.32 4.47-9.65 9.79-9.65 2.94 0 5.04 1.15 6.61 2.66l-1.86 1.86c-1.13-1.06-2.66-1.88-4.75-1.88-3.88 0-6.92 3.13-6.92 7.01s3.04 7.01 6.92 7.01c2.52 0 3.95-1.01 4.87-1.93.75-.75 1.25-1.84 1.44-3.32h-6.31v-2.63h8.87c.09.47.14 1.04.14 1.65 0 1.98-.54 4.42-2.28 6.16-1.69 1.76-3.86 2.71-6.73 2.71-5.32 0-9.79-4.33-9.79-9.65zM5.1 91.39c-3.44 0-6.24 2.61-6.24 6.21 0 3.58 2.8 6.21 6.24 6.21s6.24-2.64 6.24-6.21c0-3.6-2.8-6.21-6.24-6.21zm0 9.97c-1.88 0-3.51-1.55-3.51-3.76 0-2.24 1.62-3.76 3.51-3.76 1.88 0 3.51 1.53 3.51 3.76 0 2.21-1.62 3.76-3.51 3.76zM18.71 91.39c-3.44 0-6.24 2.61-6.24 6.21 0 3.58 2.8 6.21 6.24 6.21s6.24-2.64 6.24-6.21c-.01-3.6-2.81-6.21-6.24-6.21zm0 9.97c-1.88 0-3.51-1.55-3.51-3.76 0-2.24 1.62-3.76 3.51-3.76s3.51 1.53 3.51 3.76c-.01 2.21-1.63 3.76-3.51 3.76zM35.4 91.76v1.01h-.09c-.61-.73-1.79-1.39-3.27-1.39-3.11 0-5.95 2.73-5.95 6.24 0 3.48 2.85 6.19 5.95 6.19 1.48 0 2.66-.66 3.27-1.41h.09v.89c0 2.38-1.27 3.65-3.32 3.65-1.67 0-2.71-1.2-3.13-2.21l-2.38.99c.68 1.65 2.49 3.67 5.51 3.67 3.2 0 5.91-1.88 5.91-6.47V91.76H35.4zm-3.13 9.6c-1.88 0-3.46-1.58-3.46-3.74 0-2.19 1.58-3.79 3.46-3.79 1.86 0 3.32 1.6 3.32 3.79 0 2.17-1.46 3.74-3.32 3.74zM39.87 85.17h2.73v18.26h-2.73zM50.09 101.36c-1.39 0-2.38-.64-3.01-1.88l8.31-3.44-.28-.71c-.53-1.38-2.11-3.94-5.33-3.94-3.2 0-5.86 2.52-5.86 6.21 0 3.48 2.64 6.21 6.16 6.21 2.85 0 4.49-1.74 5.18-2.75l-2.12-1.41c-.7 1.03-1.67 1.71-3.05 1.71zm-.22-7.57c1.08 0 2 .54 2.31 1.32l-5.55 2.31c-.07-2.41 1.86-3.63 3.24-3.63z'/%3E%3C/g%3E%3C/svg%3E"
                            alt=""/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" tabIndex="-1"
                                   aria-disabled="true">GetAway</a>
                            </li>
                        </ul>
                    </div>

                    <div className="account-action">
                        <a href="/">
                            <i className="fas fa-bell"/>
                        </a>

                        <a href="/">
                            <i className="fas fa-envelope"/>
                        </a>

                        <a href="/" className="user-profile">
                            <img
                                src="https://pbs.twimg.com/profile_images/1163187699618131974/6MxudhT2_bigger.jpg"
                                alt="Profile"/>
                        </a>
                    </div>
                </nav>

                <main className="employees-main">
                    <section
                        className="any-who d-flex justify-content-between align-items-center">
                        <h2 className="font-weight-bold m-0">Employee</h2>

                        <button
                            className="btn btn-success btn-lg app-bg-green border-0 capsule px-4">
                            add employee
                        </button>
                    </section>

                    <div className="container">
                        <section className="row my-4">
                            <div className="col-md-3">
                                Aside
                            </div>

                            <div className="col-md-9">
                                <table className="w-100 employee-table"
                                       style={{
                                           borderCollapse: 'separate',
                                           borderSpacing: '0 25px',
                                       }}>
                                    <thead>
                                    <tr>
                                        <td>
                                            <input type="checkbox"
                                                   id="checkAllBox"
                                                   onChange={(e) => {
                                                       console.log(e);
                                                       this.setState({ checkAll: true });
                                                   }}/>
                                        </td>
                                        <td>Name</td>
                                        <td>Salary</td>
                                        <td>Status</td>
                                        <td>Actions</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.parsedUsers}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
        );
    }
}

export default App;
