import React, { useState, useRef } from 'react';
import { Upload, FileText, Brain, Sparkles, Zap, Sun, Moon } from 'lucide-react';
import './App.css';
import studyHubLogo from '/Study Hub Logo 2[1].png'

function App() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
    // Handle file upload logic here
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="background-gradient"></div>
      <div className="grid-overlay"></div>
      
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">
            <img src={studyHubLogo} alt="Study Hub Logo" style={{ height: '60px' }} />
          </div>
          <h1 className="logo-text">Dr. Slides</h1>
        </div>
        
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="floating-elements">
            <div className="floating-element element-1">
              <Zap size={20} />
            </div>
            <div className="floating-element element-2">
              <Brain size={24} />
            </div>
            <div className="floating-element element-3">
              <Sparkles size={18} />
            </div>
          </div>
          
          <h1 className="hero-title">
            Master Your Lecture Slides with{' '}
            <span className="highlight">Dr. Slides</span>
          </h1>
          
          <p className="hero-description">
            Upload your lecture slides and watch <b className="highlight">Dr. Slides</b> explains complex concepts. Perfect for last-minute exam prep or in-depth study sessions.
          </p>

          <div 
            className={`upload-area ${isDragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleFileSelect}
          >
            <div className="upload-content">
              <div className="upload-icon-container">
                <Upload size={48} className="upload-icon" />
                <div className="pulse-ring"></div>
              </div>
              <p className="upload-text">
                Drag and drop your lecture slides (PDF/PPT) here, or
              </p>
              <button className="select-file-btn">
                Select file
              </button>
            </div>
            
            <div className="tech-indicators">
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.ppt,.pptx"
              onChange={handleFileInputChange}
              className="file-input"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;