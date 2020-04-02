import React from 'react';

function App() {
  return (
    <div >
      <h4>Olá! Bora fazer uploads 😉</h4>
      <form
        action="http://localhost:3000/uploadFile"
        method="POST"
        enctype="multipart/form-data"
      >
        <input name="arquivo" type="file" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
