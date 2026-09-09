import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="character">
        <div className="row">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label>Class</label>
          <select>
            <option>骑士</option>
            <option>一无所有者</option>
          </select>
        </div>
        <div className="row">
          <label>Level</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Vigor</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Attunement</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Endurance</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Vitality</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Strength</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Dexterity</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Intelligence</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Faith</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Luck</label>
          <input type="number" disabled />
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <label>Hollowing</label>
          <input type="number" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>
      <div className="equipments">
        <div className="weapons right-hands">
          <div className="weapon"></div>
          <div className="weapon"></div>
          <div className="weapon"></div>
        </div>
        <div className="weapons left-hands">
          <div className="weapon"></div>
          <div className="weapon"></div>
          <div className="weapon"></div>
        </div>
        <div className="armors">
          <div className="armor head"></div>
          <div className="armor chest"></div>
          <div className="armor hands"></div>
          <div className="armor legs"></div>
        </div>
      </div>
      <div className="stats">
        <div>
          <div className="row">
            <label>HP</label>
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>FP</label>
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Stamina</label>
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Equip Load</label>
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Poise</label>
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Item Discovery</label>
            <input type="number" disabled />
          </div>
        </div>
        <div>
          <div className="row">
            <label>Physical</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>VS strike</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>VS slash</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>VS thrust</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Magic</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Fire</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Lightning</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Dark</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
        </div>
        <div>
          <div className="row">
            <label>Bleed</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Poison</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Frost</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
          <div className="row">
            <label>Curse</label>
            <input type="number" disabled />
            <input type="number" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
