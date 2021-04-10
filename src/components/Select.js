import React from 'react';

export class Select extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names">
          <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option>
        </select>
      </div>
    );
  }
}