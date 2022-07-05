import logo from './logo.svg';
import './App.css';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import hdd from '../src/assets/hdd.jpg'
import Items from './Items/Items.component';
function App() {

  const list=[
    {
      name:"Apple Pro",
      mrp:20000.00,
      price:17715.00,
      image:hdd
    },
    {
      name:"Raspberry keyboard",
      mrp:2600.00,
      price:2200.00,
      image:'https://www.raspberrypi.com/app/uploads/2020/10/Raspberry-Pi-400-front-e1603976050533-900x394.jpg'
    },
    {
      name:"Mouse",
      mrp:6000,
      price:5500,
      image:'https://9to5toys.com/wp-content/uploads/sites/5/2022/06/ASUS-ROG-Chakram-X-Gaming-Mouse-Hero.jpg'
    }
  ];

  return (
    <div className="App">
      <div className='items-list-grid'>
        {
          list.map(item => {
            return <Items  productInfo={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
