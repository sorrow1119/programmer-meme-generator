/* 程序员表情包生成器样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', 'Microsoft YaHei', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2em;
    opacity: 0.9;
}

.generator-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

.template-selector, .text-input-section {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.template-selector h3, .text-input-section h3 {
    margin-bottom: 20px;
    color: #4a5568;
    font-size: 1.3em;
}

.template-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
}

.template-item {
    aspect-ratio: 1;
    background: #f7fafc;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    transition: all 0.3s ease;
}

.template-item:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.template-item.selected {
    border-color: #667eea;
    background: #eef2ff;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #4a5568;
}

.input-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.generate-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.generate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.preview-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin-bottom: 40px;
    text-align: center;
}

.preview-section h3 {
    margin-bottom: 25px;
    color: #4a5568;
    font-size: 1.3em;
}

.meme-preview {
    margin-bottom: 25px;
}

#memeCanvas {
    max-width: 100%;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.action-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.action-btn {
    padding: 12px 24px;
    background: #48bb78;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-btn:hover {
    background: #38a169;
    transform: translateY(-2px);
}

.gallery-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.gallery-section h3 {
    margin-bottom: 25px;
    color: #4a5568;
    font-size: 1.3em;
    text-align: center;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.gallery-item {
    background: #f7fafc;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    border: 2px solid #e2e8f0;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

footer {
    text-align: center;
    padding: 30px 0;
    color: white;
    opacity: 0.8;
}

footer a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

footer a:hover {
    opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .generator-section {
        grid-template-columns: 1fr;
    }
    
    .action-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .action-btn {
        width: 200px;
    }
    
    header h1 {
        font-size: 2em;
    }
}

/* 动画效果 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.container > * {
    animation: fadeInUp 0.6s ease-out;
}
