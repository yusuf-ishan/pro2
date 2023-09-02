import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './App.css';
import { useState } from 'react';
const defaultContent = `
  ![Dwinatech Logo](https://yt3.ggpht.com/ytc/AKedOLRCB8l9dwq0qVxZIb7C7b1G5lvYlFIYzymD1Dkx=s176-c-k-c0x00ffffff-no-rj)
  
  # Hello, 
  ## You're welcome at
  ### DwinaTech Channel
  
  
  \`<div>Inline code</div>\`
  
  \`\`\`
  const multipleLineCode = (param) => {
      if(param) {
          return param
      }
  }
  \`\`\`
  
  **Some bold text**
  
  [Visit My Channel](https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA)
  
  > Block Quot
  
  1. First list item
  2. Second list item
  `
function App() {  
  const [content, setContent] = useState(defaultContent)
  const handleChange = (event) => {
    setContent(event.target.value)
  }
  
  return (
    <div className="App">   
    <div className='area'> 
     <textarea className="content" id="editor" cols="30" rows="10" onChange={handleChange} value={content} ></textarea>
     </div>
     <div  id="preview">
     <ReactMarkdown >{content}</ReactMarkdown>
     </div>
     </div>
  );
}

export default App;
