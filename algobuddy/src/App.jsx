import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import BFSPage from './pages/graphAlgos/breadthFirstSearchPage'; 
import DFSPage from './pages/graphAlgos/depthFirstSearchPage';
import HeapSortPage from './pages/sortAlgos/heapSortPage';
import BinarySearchPage from './pages/searchAlgos/binarySearchPage';
import LinearSearchPage from './pages/searchAlgos/linearSearchPage';
import BubbleSortPage from './pages/sortAlgos/bubbleSortPage';
import InsertionSortPage from './pages/sortAlgos/insertionSortPage';
import MergeSortPage from './pages/sortAlgos/mergeSortPage';
import QuickSortPage from './pages/sortAlgos/quickSortPage';
import SelectionSortPage from './pages/sortAlgos/selectionSortPage';
import NavBar from './components/hero/nav_bar';
import './styles/global.css';


const App = () => {
  return (
    <div className='text-fontcolour'>
    <Router>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/bfs" element={<BFSPage/>}/>
        <Route path="/dfs" element={<DFSPage/>}/>
        <Route path="/heapsort" element={<HeapSortPage/>}/>
        <Route path="/binarysearch" element={<BinarySearchPage/>}/>
        <Route path="/linearsearch" element={<LinearSearchPage/>}/> 
        <Route path="/bubblesort" element={<BubbleSortPage/>}/>  
        <Route path="/insertionsort" element={<InsertionSortPage/>}/>
        <Route path="/mergesort" element={<MergeSortPage/>}/>   
        <Route path="/quicksort" element={<QuickSortPage/>}/>
        <Route path="/selectionsort" element={<SelectionSortPage/>}/>  
      </Routes>
    </Router>
    </div>

  );
}


export default App;
