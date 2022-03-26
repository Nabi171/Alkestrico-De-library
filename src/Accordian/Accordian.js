import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Accordian = () => {
  return (
    <div>
      <Card className='mt-4 mx-3'>
        <Card.Body>
          <h5>HOW REACT WORKS??</h5><hr />
          <p>React is a Library which works in plethora of DOM wise component to execute the codes like a tree.Its just a plain javascript which can convert HTML DOM as javascript component which works fast to execute the code.So, making client side api, it contained lots of component which are JSX function and DOM HTML component to execute the code.On the other hand, its a library which is maintained a tree of component which called by function from core javascript component to execute the its branches of tree components from working core component to execute the HTML DOM elements.</p>
        </Card.Body>
      </Card>
      <Card className='mt-4 mx-3'>
        <Card.Body>
          <h5>HOW REACT WORKS??</h5><hr />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Props</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>In react props is one kinds of function argument and attributes in HTML DOM.</td>
                <td>State can be defined as data to its components that can be changed data with user input,time,server or responses.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>2</td>
                <td>Here data which are changes like immutable to execute its component.</td>
                <td>Its data calls itself which are mutable.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3</td>
                <td>its data can be changed</td>
                <td>its data can not be modified using this.setState</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4</td>
                <td>its data passed from its parrent</td>
                <td>its data data created its component</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5</td>
                <td>its class component is this.props</td>
                <td>its class component is this.state</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Accordian;


