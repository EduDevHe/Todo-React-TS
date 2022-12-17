import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="wraper">
          <div className="container">
            <div className="inputArea">
              <input type="text" className="input" />
              <button className="button">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
