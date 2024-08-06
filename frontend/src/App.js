import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import SubmittedCodesPage from './components/SubmittedCodesPage';
import ViewCommentsPage from './components/ViewCommentsPage';
import ExploreCodesPage from './components/ExploreCodesPage';
import ViewCodePage from './components/ViewCodePage';
import CodeDetailsPage from './components/CodeDetailsPage';

import { CodesProvider } from './CodesContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0d0d0d;
    font-family: 'Arial', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <CodesProvider>
      <Router>
        <AppContainer>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/submitted-codes" element={<SubmittedCodesPage />} />
            <Route path="/explore-codes" element={<ExploreCodesPage />} />
            <Route path="/explore-code/:codeId" element={<ViewCodePage />} />
            <Route path="/view-comments/:codeId" element={<ViewCommentsPage />} />
            <Route path="/CodeDetailsPage/:codeId" element={<CodeDetailsPage />}/>

          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </CodesProvider>
  );
}

export default App;
