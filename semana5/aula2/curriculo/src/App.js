import React from 'react';
import BigCard from './components/BigCard/BigCard';
import PageSection from './components/PageSection/PageSection';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton'
import './App.css';

function App() {
  return (
    <div className="App">
    <PageSection titulopage="Dados Pessoais">
      <BigCard titulo="Astrodev" imagem="https://picsum.photos/id/906/200/200"
      texto="Ola, eu sou o Astrodev. Sou o chefe dos alunos do Future4.">
      </BigCard>
      <SmallCard imagem="https://cdn.icon-icons.com/icons2/510/PNG/512/email_icon-icons.com_50400.png"
      texto="Email: " conteudo="future4code@gmail.com">
      </SmallCard>
      <SmallCard imagem="https://cdn.icon-icons.com/icons2/510/PNG/512/email_icon-icons.com_50400.png"
      texto="Endereço: " conteudo="Rua do futuro, 4">
      </SmallCard>
      <ImageButton texto="Ver Mais" imagem="https://image.flaticon.com/icons/png/512/57/57085.png">
      </ImageButton>
    </PageSection>
    <PageSection titulopage="Experiências profissionais">
      <BigCard titulo="Future4" imagem="https://picsum.photos/id/906/200/200"
      texto="Formando desenvolvedores para o futuro!">
      </BigCard>  
      <BigCard titulo="Outsmasrt" imagem="https://picsum.photos/id/906/200/200"
      texto="Criando apps incríveis para grandes clientes.">
      </BigCard>  
    </PageSection>
    <PageSection titulopage="Minhas redes sociais">
      <ImageButton texto="Facebook" imagem="https://image.flaticon.com/icons/png/512/57/57085.png">
      </ImageButton>
    </PageSection>
    </div>
  );
}

export default App;
