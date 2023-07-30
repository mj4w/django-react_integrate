import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Form from './components/Form';
import List from './components/List';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';

class App extends React.Component {
  state = {
    data: [],
  };

  handleAddNewData = (newItem) => {
    this.setState((prevState) => ({
      data: [...prevState.data, newItem],
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <Route
              path='/'
              element={(
                <div>
                  <Form addNewData={this.handleAddNewData} />
                  <List data={this.state.data} />
                </div>
              )}
            />
            <Route path='detail/:id' element={<Detail />} />
            <Route path='detail/:id/update/' element={<Update />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

