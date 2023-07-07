import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import './App.css'

function App() {
  return (
    <Loader />
  )
}

export default App
